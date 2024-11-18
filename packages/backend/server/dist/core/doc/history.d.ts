import { PrismaClient } from '@prisma/client';
import type { EventPayload } from '../../fundamentals';
import { Config } from '../../fundamentals';
import { QuotaService } from '../quota';
export declare class DocHistoryManager {
    private readonly config;
    private readonly db;
    private readonly quota;
    private readonly logger;
    constructor(config: Config, db: PrismaClient, quota: QuotaService);
    onWorkspaceDeleted(workspaceId: EventPayload<'workspace.deleted'>): any;
    onSnapshotDeleted({ workspaceId, id }: EventPayload<'snapshot.deleted'>): any;
    onDocUpdated({ workspaceId, id, previous }: EventPayload<'snapshot.updated'>, forceCreate?: boolean): Promise<void>;
    list(workspaceId: string, id: string, before?: Date, take?: number): Promise<any>;
    count(workspaceId: string, id: string): Promise<any>;
    get(workspaceId: string, id: string, timestamp: Date): Promise<any>;
    last(workspaceId: string, id: string): Promise<any>;
    recover(workspaceId: string, id: string, timestamp: Date): Promise<any>;
    getExpiredDateFromNow(workspaceId: string): Promise<any>;
    cleanupExpiredHistory(): Promise<void>;
}
//# sourceMappingURL=history.d.ts.map