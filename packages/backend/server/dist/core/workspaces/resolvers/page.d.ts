import { PrismaClient } from '@prisma/client';
import { CurrentUser } from '../../auth';
import { PermissionService, PublicPageMode } from '../permission';
import { WorkspaceType } from '../types';
export declare class PagePermissionResolver {
    private readonly prisma;
    private readonly permission;
    constructor(prisma: PrismaClient, permission: PermissionService);
    /**
     * @deprecated
     */
    sharedPages(workspace: WorkspaceType): Promise<any>;
    publicPages(workspace: WorkspaceType): Promise<any>;
    publicPage(workspace: WorkspaceType, pageId: string): Promise<any>;
    /**
     * @deprecated
     */
    deprecatedSharePage(user: CurrentUser, workspaceId: string, pageId: string): Promise<boolean>;
    publishPage(user: CurrentUser, workspaceId: string, pageId: string, mode: PublicPageMode): Promise<any>;
    /**
     * @deprecated
     */
    deprecatedRevokePage(user: CurrentUser, workspaceId: string, pageId: string): Promise<boolean>;
    revokePublicPage(user: CurrentUser, workspaceId: string, pageId: string): Promise<any>;
}
//# sourceMappingURL=page.d.ts.map