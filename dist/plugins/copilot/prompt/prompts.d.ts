import { AiPrompt, PrismaClient } from '@prisma/client';
import { PromptConfig, PromptMessage } from '../types';
type Prompt = Omit<AiPrompt, 'id' | 'createdAt' | 'updatedAt' | 'modified' | 'action' | 'config'> & {
    action?: string;
    messages: PromptMessage[];
    config?: PromptConfig;
};
export declare const prompts: Prompt[];
export declare function refreshPrompts(db: PrismaClient): Promise<void>;
export {};
//# sourceMappingURL=prompts.d.ts.map