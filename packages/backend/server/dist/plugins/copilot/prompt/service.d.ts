import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PromptConfig, PromptMessage } from '../types';
import { ChatPrompt } from './chat-prompt';
export declare class PromptService implements OnModuleInit {
    private readonly db;
    private readonly cache;
    constructor(db: PrismaClient);
    onModuleInit(): Promise<void>;
    /**
     * list prompt names
     * @returns prompt names
     */
    listNames(): Promise<any>;
    list(): Promise<any>;
    /**
     * get prompt messages by prompt name
     * @param name prompt name
     * @returns prompt messages
     */
    get(name: string): Promise<ChatPrompt | null>;
    set(name: string, model: string, messages: PromptMessage[], config?: PromptConfig | null): Promise<any>;
    update(name: string, messages: PromptMessage[], config?: PromptConfig): Promise<any>;
    delete(name: string): Promise<any>;
}
//# sourceMappingURL=service.d.ts.map