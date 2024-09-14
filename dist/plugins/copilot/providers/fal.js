import assert from 'node:assert';
import { config as falConfig, stream as falStream, } from '@fal-ai/serverless-client';
import { z } from 'zod';
import { CopilotPromptInvalid, CopilotProviderSideError, UserFriendlyError, } from '../../../fundamentals';
import { CopilotCapability, CopilotProviderType, } from '../types';
const FalImageSchema = z
    .object({
    url: z.string(),
    seed: z.number().nullable().optional(),
    content_type: z.string(),
    file_name: z.string().nullable().optional(),
    file_size: z.number().nullable().optional(),
    width: z.number(),
    height: z.number(),
})
    .optional();
const FalResponseSchema = z.object({
    detail: z
        .union([
        z.array(z.object({ type: z.string(), msg: z.string() })),
        z.string(),
    ])
        .optional(),
    images: z.array(FalImageSchema).nullable().optional(),
    image: FalImageSchema.nullable().optional(),
    output: z.string().nullable().optional(),
});
const FalStreamOutputSchema = z.object({
    type: z.literal('output'),
    output: FalResponseSchema,
});
export class FalProvider {
    static { this.type = CopilotProviderType.FAL; }
    static { this.capabilities = [
        CopilotCapability.TextToImage,
        CopilotCapability.ImageToImage,
        CopilotCapability.ImageToText,
    ]; }
    constructor(config) {
        this.config = config;
        this.availableModels = [
            // text to image
            'fast-turbo-diffusion',
            // image to image
            'lcm-sd15-i2i',
            'clarity-upscaler',
            'face-to-sticker',
            'imageutils/rembg',
            'fast-sdxl/image-to-image',
            'workflowutils/teed',
            'lora/image-to-image',
            // image to text
            'llava-next',
        ];
        assert(FalProvider.assetsConfig(config));
        falConfig({ credentials: this.config.apiKey });
    }
    static assetsConfig(config) {
        return !!config.apiKey;
    }
    get type() {
        return FalProvider.type;
    }
    getCapabilities() {
        return FalProvider.capabilities;
    }
    async isModelAvailable(model) {
        return this.availableModels.includes(model);
    }
    extractArray(value) {
        if (Array.isArray(value))
            return value;
        return value ? [value] : [];
    }
    extractPrompt(message, options = {}) {
        if (!message)
            throw new CopilotPromptInvalid('Prompt is empty');
        const { content, attachments, params } = message;
        // prompt attachments require at least one
        if (!content && (!Array.isArray(attachments) || !attachments.length)) {
            throw new CopilotPromptInvalid('Prompt or Attachments is empty');
        }
        if (Array.isArray(attachments) && attachments.length > 1) {
            throw new CopilotPromptInvalid('Only one attachment is allowed');
        }
        const lora = [
            ...this.extractArray(params?.lora),
            ...this.extractArray(options.loras),
        ].filter((v) => !!v && typeof v === 'object' && typeof v.path === 'string');
        const controlnets = this.extractArray(params?.controlnets).filter((v) => !!v && typeof v === 'object' && typeof v.image_url === 'string');
        return {
            model_name: options.modelName || undefined,
            image_url: attachments?.[0],
            prompt: content.trim(),
            loras: lora.length ? lora : undefined,
            controlnets: controlnets.length ? controlnets : undefined,
        };
    }
    extractFalError(resp, message) {
        if (Array.isArray(resp.detail) && resp.detail.length) {
            const error = resp.detail[0].msg;
            return new CopilotProviderSideError({
                provider: this.type,
                kind: resp.detail[0].type,
                message: message ? `${message}: ${error}` : error,
            });
        }
        else if (typeof resp.detail === 'string') {
            const error = resp.detail;
            return new CopilotProviderSideError({
                provider: this.type,
                kind: resp.detail,
                message: message ? `${message}: ${error}` : error,
            });
        }
        return new CopilotProviderSideError({
            provider: this.type,
            kind: 'unknown',
            message: 'No content generated',
        });
    }
    handleError(e) {
        if (e instanceof UserFriendlyError) {
            // pass through user friendly errors
            return e;
        }
        else {
            const error = new CopilotProviderSideError({
                provider: this.type,
                kind: 'unexpected_response',
                message: e?.message || 'Unexpected fal response',
            });
            return error;
        }
    }
    parseSchema(schema, data) {
        const result = schema.safeParse(data);
        if (result.success)
            return result.data;
        const errors = JSON.stringify(result.error.errors);
        throw new CopilotProviderSideError({
            provider: this.type,
            kind: 'unexpected_response',
            message: `Unexpected fal response: ${errors}`,
        });
    }
    async generateText(messages, model = 'llava-next', options = {}) {
        if (!this.availableModels.includes(model)) {
            throw new CopilotPromptInvalid(`Invalid model: ${model}`);
        }
        // by default, image prompt assumes there is only one message
        const prompt = this.extractPrompt(messages.pop());
        try {
            const response = await fetch(`https://fal.run/fal-ai/${model}`, {
                method: 'POST',
                headers: {
                    Authorization: `key ${this.config.apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...prompt,
                    sync_mode: true,
                    enable_safety_checks: false,
                }),
                signal: options.signal,
            });
            const data = this.parseSchema(FalResponseSchema, await response.json());
            if (!data.output) {
                throw this.extractFalError(data, 'Failed to generate text');
            }
            return data.output;
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    async *generateTextStream(messages, model = 'llava-next', options = {}) {
        const result = await this.generateText(messages, model, options);
        for await (const content of result) {
            if (content) {
                yield content;
                if (options.signal?.aborted) {
                    break;
                }
            }
        }
    }
    async buildResponse(messages, model = this.availableModels[0], options = {}) {
        // by default, image prompt assumes there is only one message
        const prompt = this.extractPrompt(messages.pop(), options);
        if (model.startsWith('workflows/')) {
            const stream = await falStream(model, { input: prompt });
            return this.parseSchema(FalStreamOutputSchema, await stream.done())
                .output;
        }
        else {
            const response = await fetch(`https://fal.run/fal-ai/${model}`, {
                method: 'POST',
                headers: {
                    Authorization: `key ${this.config.apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...prompt,
                    sync_mode: true,
                    seed: options.seed || 42,
                    enable_safety_checks: false,
                }),
                signal: options.signal,
            });
            return this.parseSchema(FalResponseSchema, await response.json());
        }
    }
    // ====== image to image ======
    async generateImages(messages, model = this.availableModels[0], options = {}) {
        if (!this.availableModels.includes(model)) {
            throw new CopilotPromptInvalid(`Invalid model: ${model}`);
        }
        try {
            const data = await this.buildResponse(messages, model, options);
            if (!data.images?.length && !data.image?.url) {
                throw this.extractFalError(data, 'Failed to generate images');
            }
            if (data.image?.url) {
                return [data.image.url];
            }
            return (data.images
                ?.filter((image) => !!image)
                .map(image => image.url) || []);
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    async *generateImagesStream(messages, model = this.availableModels[0], options = {}) {
        const ret = await this.generateImages(messages, model, options);
        for (const url of ret) {
            yield url;
        }
    }
}
//# sourceMappingURL=fal.js.map