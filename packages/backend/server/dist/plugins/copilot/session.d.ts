import { PrismaClient } from '@prisma/client';
import { FeatureManagementService } from '../../core/features';
import { QuotaService } from '../../core/quota';
import { ChatMessageCache } from './message';
import { PromptService } from './prompt';
import { ChatHistory, ChatMessage, ChatSessionForkOptions, ChatSessionOptions, ChatSessionState, ListHistoriesOptions, PromptMessage, PromptParams, SubmittedMessage } from './types';
export declare class ChatSession implements AsyncDisposable {
    private readonly messageCache;
    private readonly state;
    private readonly dispose?;
    private readonly maxTokenSize;
    private stashMessageCount;
    constructor(messageCache: ChatMessageCache, state: ChatSessionState, dispose?: ((state: ChatSessionState) => Promise<void>) | undefined, maxTokenSize?: number);
    get model(): string;
    get config(): {
        sessionId: string;
        userId: string;
        workspaceId: string;
        docId: string;
        promptName: string;
        promptConfig: {
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
        } | null | undefined;
    };
    get stashMessages(): {
        content: string;
        role: "user" | "system" | "assistant";
        createdAt: Date;
        id?: string | undefined;
        params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
        attachments?: string[] | null | undefined;
    }[];
    push(message: ChatMessage): void;
    revertLatestMessage(): void;
    getMessageById(messageId: string): Promise<{
        sessionId: string;
        content?: string | undefined;
        params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
        attachments?: string[] | null | undefined;
    }>;
    pushByMessageId(messageId: string): Promise<void>;
    pop(): {
        content: string;
        role: "user" | "system" | "assistant";
        createdAt: Date;
        id?: string | undefined;
        params?: Record<string, string | Record<string, any> | string[]> | null | undefined;
        attachments?: string[] | null | undefined;
    } | undefined;
    private takeMessages;
    finish(params: PromptParams): PromptMessage[];
    save(): Promise<void>;
    [Symbol.asyncDispose](): Promise<void>;
}
export declare class ChatSessionService {
    private readonly db;
    private readonly feature;
    private readonly quota;
    private readonly messageCache;
    private readonly prompt;
    private readonly logger;
    constructor(db: PrismaClient, feature: FeatureManagementService, quota: QuotaService, messageCache: ChatMessageCache, prompt: PromptService);
    private setSession;
    private getSession;
    revertLatestMessage(sessionId: string): Promise<void>;
    private calculateTokenSize;
    private countUserMessages;
    listSessions(userId: string, workspaceId: string, options?: {
        docId?: string;
        action?: boolean;
    }): Promise<string[]>;
    listHistories(userId: string, workspaceId?: string, docId?: string, options?: ListHistoriesOptions, withPrompt?: boolean): Promise<ChatHistory[]>;
    getQuota(userId: string): Promise<{
        limit: number | undefined;
        used: number;
    }>;
    checkQuota(userId: string): Promise<void>;
    create(options: ChatSessionOptions): Promise<string>;
    fork(options: ChatSessionForkOptions): Promise<string>;
    cleanup(options: Omit<ChatSessionOptions, 'promptName'> & {
        sessionIds: string[];
    }): Promise<any>;
    createMessage(message: SubmittedMessage): Promise<string | undefined>;
    /**
     * usage:
     * ``` typescript
     * {
     *     // allocate a session, can be reused chat in about 12 hours with same session
     *     await using session = await session.get(sessionId);
     *     session.push(message);
     *     copilot.generateText(session.finish(), model);
     * }
     * // session will be disposed after the block
     * @param sessionId session id
     * @returns
     */
    get(sessionId: string): Promise<ChatSession | null>;
}
//# sourceMappingURL=session.d.ts.map