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
    listNames(): Promise<string[]>;
    list(): Promise<{
        name: string;
        config: import(".prisma/client").Prisma.JsonValue;
        messages: {
            content: string;
            role: import(".prisma/client").$Enums.AiPromptRole;
            params: import(".prisma/client").Prisma.JsonValue;
        }[];
        action: string | null;
        model: string;
    }[]>;
    /**
     * get prompt messages by prompt name
     * @param name prompt name
     * @returns prompt messages
     */
    get(name: string): Promise<ChatPrompt | null>;
    set(name: string, model: string, messages: PromptMessage[], config?: PromptConfig | null): Promise<number>;
    update(name: string, messages: PromptMessage[], modifyByApi?: boolean, config?: PromptConfig): Promise<number>;
    delete(name: string): Promise<number>;
}
//# sourceMappingURL=service.d.ts.map