import { type Tokenizer } from '@affine/server-native';
import { AiPrompt } from '@prisma/client';
import { PromptConfig, PromptMessage, PromptParams } from '../types';
export declare class ChatPrompt {
    readonly name: string;
    readonly action: string | undefined;
    readonly model: string;
    readonly config: PromptConfig | undefined;
    private readonly messages;
    private readonly logger;
    readonly encoder: Tokenizer | null;
    private readonly promptTokenSize;
    private readonly templateParamKeys;
    private readonly templateParams;
    static createFromPrompt(options: Omit<AiPrompt, 'id' | 'createdAt' | 'config'> & {
        messages: PromptMessage[];
        config: PromptConfig | undefined;
    }): ChatPrompt;
    constructor(name: string, action: string | undefined, model: string, config: PromptConfig | undefined, messages: PromptMessage[]);
    /**
     * get prompt token size
     */
    get tokens(): number;
    /**
     * get prompt param keys in template
     */
    get paramKeys(): string[];
    /**
     * get prompt params
     */
    get params(): {
        [x: string]: string | Record<string, any> | string[];
    };
    encode(message: string): number;
    private checkParams;
    /**
     * render prompt messages with params
     * @param params record of params, e.g. { name: 'Alice' }
     * @returns e.g. [{ role: 'system', content: 'Hello, {{name}}' }] => [{ role: 'system', content: 'Hello, Alice' }]
     */
    finish(params: PromptParams, sessionId?: string): PromptMessage[];
}
//# sourceMappingURL=chat-prompt.d.ts.map