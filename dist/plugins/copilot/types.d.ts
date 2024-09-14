import { type Tokenizer } from '@affine/server-native';
import { z } from 'zod';
import type { ChatPrompt } from './prompt';
export declare enum AvailableModels {
    Gpt4Omni = "gpt-4o",
    Gpt4OmniMini = "gpt-4o-mini",
    TextEmbedding3Large = "text-embedding-3-large",
    TextEmbedding3Small = "text-embedding-3-small",
    TextEmbeddingAda002 = "text-embedding-ada-002",
    TextModerationLatest = "text-moderation-latest",
    TextModerationStable = "text-moderation-stable",
    DallE3 = "dall-e-3"
}
export type AvailableModel = keyof typeof AvailableModels;
export declare function getTokenEncoder(model?: string | null): Tokenizer | null;
export declare const ChatMessageRole: ["system", "assistant", "user"];
export declare const PromptMessageSchema: z.ZodObject<z.objectUtil.extendShape<{
    content: z.ZodString;
    attachments: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    params: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodRecord<z.ZodString, z.ZodAny>]>>>>;
}, {
    role: z.ZodEnum<["system", "assistant", "user"]>;
}>, "strict", z.ZodTypeAny, {
    content: string;
    role: "user" | "system" | "assistant";
    attachments?: string[] | null | undefined;
    params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
}, {
    content: string;
    role: "user" | "system" | "assistant";
    attachments?: string[] | null | undefined;
    params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
}>;
export type PromptMessage = z.infer<typeof PromptMessageSchema>;
export type PromptParams = NonNullable<PromptMessage['params']>;
export declare const PromptConfigStrictSchema: z.ZodObject<{
    jsonMode: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    frequencyPenalty: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    presencePenalty: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    temperature: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    topP: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxTokens: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    modelName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    loras: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        scale: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        scale?: number | null | undefined;
    }, {
        path: string;
        scale?: number | null | undefined;
    }>, "many">>>;
}, "strip", z.ZodTypeAny, {
    maxTokens?: number | null | undefined;
    jsonMode?: boolean | null | undefined;
    frequencyPenalty?: number | null | undefined;
    presencePenalty?: number | null | undefined;
    temperature?: number | null | undefined;
    topP?: number | null | undefined;
    modelName?: string | null | undefined;
    loras?: {
        path: string;
        scale?: number | null | undefined;
    }[] | null | undefined;
}, {
    maxTokens?: number | null | undefined;
    jsonMode?: boolean | null | undefined;
    frequencyPenalty?: number | null | undefined;
    presencePenalty?: number | null | undefined;
    temperature?: number | null | undefined;
    topP?: number | null | undefined;
    modelName?: string | null | undefined;
    loras?: {
        path: string;
        scale?: number | null | undefined;
    }[] | null | undefined;
}>;
export declare const PromptConfigSchema: z.ZodOptional<z.ZodNullable<z.ZodObject<{
    jsonMode: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    frequencyPenalty: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    presencePenalty: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    temperature: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    topP: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxTokens: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    modelName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    loras: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        scale: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        scale?: number | null | undefined;
    }, {
        path: string;
        scale?: number | null | undefined;
    }>, "many">>>;
}, "strip", z.ZodTypeAny, {
    maxTokens?: number | null | undefined;
    jsonMode?: boolean | null | undefined;
    frequencyPenalty?: number | null | undefined;
    presencePenalty?: number | null | undefined;
    temperature?: number | null | undefined;
    topP?: number | null | undefined;
    modelName?: string | null | undefined;
    loras?: {
        path: string;
        scale?: number | null | undefined;
    }[] | null | undefined;
}, {
    maxTokens?: number | null | undefined;
    jsonMode?: boolean | null | undefined;
    frequencyPenalty?: number | null | undefined;
    presencePenalty?: number | null | undefined;
    temperature?: number | null | undefined;
    topP?: number | null | undefined;
    modelName?: string | null | undefined;
    loras?: {
        path: string;
        scale?: number | null | undefined;
    }[] | null | undefined;
}>>>;
export type PromptConfig = z.infer<typeof PromptConfigSchema>;
export declare const ChatMessageSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    content: z.ZodString;
    attachments: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    params: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodRecord<z.ZodString, z.ZodAny>]>>>>;
}, {
    role: z.ZodEnum<["system", "assistant", "user"]>;
}>, {
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodDate;
}>, "strict", z.ZodTypeAny, {
    content: string;
    role: "user" | "system" | "assistant";
    createdAt: Date;
    attachments?: string[] | null | undefined;
    params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
    id?: string | undefined;
}, {
    content: string;
    role: "user" | "system" | "assistant";
    createdAt: Date;
    attachments?: string[] | null | undefined;
    params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
    id?: string | undefined;
}>;
export type ChatMessage = z.infer<typeof ChatMessageSchema>;
export declare const SubmittedMessageSchema: z.ZodObject<z.objectUtil.extendShape<{
    content: z.ZodString;
    attachments: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    params: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodRecord<z.ZodString, z.ZodAny>]>>>>;
}, {
    sessionId: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
}>, "strict", z.ZodTypeAny, {
    sessionId: string;
    attachments?: string[] | null | undefined;
    content?: string | undefined;
    params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
}, {
    sessionId: string;
    attachments?: string[] | null | undefined;
    content?: string | undefined;
    params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
}>;
export type SubmittedMessage = z.infer<typeof SubmittedMessageSchema>;
export declare const ChatHistorySchema: z.ZodObject<{
    sessionId: z.ZodString;
    action: z.ZodOptional<z.ZodString>;
    tokens: z.ZodNumber;
    messages: z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        content: z.ZodString;
        attachments: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        params: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodRecord<z.ZodString, z.ZodAny>]>>>>;
    }, {
        role: z.ZodEnum<["system", "assistant", "user"]>;
    }>, "strict", z.ZodTypeAny, {
        content: string;
        role: "user" | "system" | "assistant";
        attachments?: string[] | null | undefined;
        params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
    }, {
        content: string;
        role: "user" | "system" | "assistant";
        attachments?: string[] | null | undefined;
        params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        content: z.ZodString;
        attachments: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        params: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodRecord<z.ZodString, z.ZodAny>]>>>>;
    }, {
        role: z.ZodEnum<["system", "assistant", "user"]>;
    }>, {
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodDate;
    }>, "strict", z.ZodTypeAny, {
        content: string;
        role: "user" | "system" | "assistant";
        createdAt: Date;
        attachments?: string[] | null | undefined;
        params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
        id?: string | undefined;
    }, {
        content: string;
        role: "user" | "system" | "assistant";
        createdAt: Date;
        attachments?: string[] | null | undefined;
        params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
        id?: string | undefined;
    }>]>, "many">;
    createdAt: z.ZodDate;
}, "strict", z.ZodTypeAny, {
    createdAt: Date;
    sessionId: string;
    messages: ({
        content: string;
        role: "user" | "system" | "assistant";
        attachments?: string[] | null | undefined;
        params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
    } | {
        content: string;
        role: "user" | "system" | "assistant";
        createdAt: Date;
        attachments?: string[] | null | undefined;
        params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
        id?: string | undefined;
    })[];
    tokens: number;
    action?: string | undefined;
}, {
    createdAt: Date;
    sessionId: string;
    messages: ({
        content: string;
        role: "user" | "system" | "assistant";
        attachments?: string[] | null | undefined;
        params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
    } | {
        content: string;
        role: "user" | "system" | "assistant";
        createdAt: Date;
        attachments?: string[] | null | undefined;
        params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
        id?: string | undefined;
    })[];
    tokens: number;
    action?: string | undefined;
}>;
export type ChatHistory = z.infer<typeof ChatHistorySchema>;
export interface ChatSessionOptions {
    userId: string;
    workspaceId: string;
    docId: string;
    promptName: string;
}
export interface ChatSessionForkOptions extends Omit<ChatSessionOptions, 'promptName'> {
    sessionId: string;
    latestMessageId: string;
}
export interface ChatSessionState extends Omit<ChatSessionOptions, 'promptName'> {
    sessionId: string;
    parentSessionId: string | null;
    prompt: ChatPrompt;
    messages: ChatMessage[];
}
export type ListHistoriesOptions = {
    action: boolean | undefined;
    fork: boolean | undefined;
    limit: number | undefined;
    skip: number | undefined;
    sessionOrder: 'asc' | 'desc' | undefined;
    messageOrder: 'asc' | 'desc' | undefined;
    sessionId: string | undefined;
};
export declare enum CopilotProviderType {
    FAL = "fal",
    OpenAI = "openai",
    Test = "test"
}
export declare enum CopilotCapability {
    TextToText = "text-to-text",
    TextToEmbedding = "text-to-embedding",
    TextToImage = "text-to-image",
    ImageToImage = "image-to-image",
    ImageToText = "image-to-text"
}
declare const CopilotChatOptionsSchema: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
    signal: z.ZodOptional<z.ZodType<AbortSignal, z.ZodTypeDef, AbortSignal>>;
    user: z.ZodOptional<z.ZodString>;
}, {
    jsonMode: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    frequencyPenalty: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    presencePenalty: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    temperature: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    topP: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxTokens: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    modelName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    loras: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        scale: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        scale?: number | null | undefined;
    }, {
        path: string;
        scale?: number | null | undefined;
    }>, "many">>>;
}>, "strip", z.ZodTypeAny, {
    maxTokens?: number | null | undefined;
    user?: string | undefined;
    signal?: AbortSignal | undefined;
    jsonMode?: boolean | null | undefined;
    frequencyPenalty?: number | null | undefined;
    presencePenalty?: number | null | undefined;
    temperature?: number | null | undefined;
    topP?: number | null | undefined;
    modelName?: string | null | undefined;
    loras?: {
        path: string;
        scale?: number | null | undefined;
    }[] | null | undefined;
}, {
    maxTokens?: number | null | undefined;
    user?: string | undefined;
    signal?: AbortSignal | undefined;
    jsonMode?: boolean | null | undefined;
    frequencyPenalty?: number | null | undefined;
    presencePenalty?: number | null | undefined;
    temperature?: number | null | undefined;
    topP?: number | null | undefined;
    modelName?: string | null | undefined;
    loras?: {
        path: string;
        scale?: number | null | undefined;
    }[] | null | undefined;
}>>;
export type CopilotChatOptions = z.infer<typeof CopilotChatOptionsSchema>;
declare const CopilotEmbeddingOptionsSchema: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
    signal: z.ZodOptional<z.ZodType<AbortSignal, z.ZodTypeDef, AbortSignal>>;
    user: z.ZodOptional<z.ZodString>;
}, {
    dimensions: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    dimensions: number;
    user?: string | undefined;
    signal?: AbortSignal | undefined;
}, {
    dimensions: number;
    user?: string | undefined;
    signal?: AbortSignal | undefined;
}>>;
export type CopilotEmbeddingOptions = z.infer<typeof CopilotEmbeddingOptionsSchema>;
declare const CopilotImageOptionsSchema: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    signal: z.ZodOptional<z.ZodType<AbortSignal, z.ZodTypeDef, AbortSignal>>;
    user: z.ZodOptional<z.ZodString>;
}, {
    jsonMode: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    frequencyPenalty: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    presencePenalty: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    temperature: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    topP: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxTokens: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    modelName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    loras: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        scale: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        scale?: number | null | undefined;
    }, {
        path: string;
        scale?: number | null | undefined;
    }>, "many">>>;
}>, {
    seed: z.ZodOptional<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    maxTokens?: number | null | undefined;
    user?: string | undefined;
    signal?: AbortSignal | undefined;
    jsonMode?: boolean | null | undefined;
    frequencyPenalty?: number | null | undefined;
    presencePenalty?: number | null | undefined;
    temperature?: number | null | undefined;
    topP?: number | null | undefined;
    modelName?: string | null | undefined;
    loras?: {
        path: string;
        scale?: number | null | undefined;
    }[] | null | undefined;
    seed?: number | undefined;
}, {
    maxTokens?: number | null | undefined;
    user?: string | undefined;
    signal?: AbortSignal | undefined;
    jsonMode?: boolean | null | undefined;
    frequencyPenalty?: number | null | undefined;
    presencePenalty?: number | null | undefined;
    temperature?: number | null | undefined;
    topP?: number | null | undefined;
    modelName?: string | null | undefined;
    loras?: {
        path: string;
        scale?: number | null | undefined;
    }[] | null | undefined;
    seed?: number | undefined;
}>>;
export type CopilotImageOptions = z.infer<typeof CopilotImageOptionsSchema>;
export interface CopilotProvider {
    readonly type: CopilotProviderType;
    getCapabilities(): CopilotCapability[];
    isModelAvailable(model: string): Promise<boolean>;
}
export interface CopilotTextToTextProvider extends CopilotProvider {
    generateText(messages: PromptMessage[], model?: string, options?: CopilotChatOptions): Promise<string>;
    generateTextStream(messages: PromptMessage[], model?: string, options?: CopilotChatOptions): AsyncIterable<string>;
}
export interface CopilotTextToEmbeddingProvider extends CopilotProvider {
    generateEmbedding(messages: string[] | string, model: string, options?: CopilotEmbeddingOptions): Promise<number[][]>;
}
export interface CopilotTextToImageProvider extends CopilotProvider {
    generateImages(messages: PromptMessage[], model: string, options?: CopilotImageOptions): Promise<Array<string>>;
    generateImagesStream(messages: PromptMessage[], model?: string, options?: CopilotImageOptions): AsyncIterable<string>;
}
export interface CopilotImageToTextProvider extends CopilotProvider {
    generateText(messages: PromptMessage[], model: string, options?: CopilotChatOptions): Promise<string>;
    generateTextStream(messages: PromptMessage[], model: string, options?: CopilotChatOptions): AsyncIterable<string>;
}
export interface CopilotImageToImageProvider extends CopilotProvider {
    generateImages(messages: PromptMessage[], model: string, options?: CopilotImageOptions): Promise<Array<string>>;
    generateImagesStream(messages: PromptMessage[], model?: string, options?: CopilotImageOptions): AsyncIterable<string>;
}
export type CapabilityToCopilotProvider = {
    [CopilotCapability.TextToText]: CopilotTextToTextProvider;
    [CopilotCapability.TextToEmbedding]: CopilotTextToEmbeddingProvider;
    [CopilotCapability.TextToImage]: CopilotTextToImageProvider;
    [CopilotCapability.ImageToText]: CopilotImageToTextProvider;
    [CopilotCapability.ImageToImage]: CopilotImageToImageProvider;
};
export type CopilotTextProvider = CopilotTextToTextProvider | CopilotImageToTextProvider;
export type CopilotImageProvider = CopilotTextToImageProvider | CopilotImageToImageProvider;
export type CopilotAllProvider = CopilotTextProvider | CopilotImageProvider | CopilotTextToEmbeddingProvider;
export {};
//# sourceMappingURL=types.d.ts.map