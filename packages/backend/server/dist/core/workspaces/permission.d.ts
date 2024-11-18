import { PrismaClient } from '@prisma/client';
import { Permission } from './types';
export declare enum PublicPageMode {
    Page = 0,
    Edgeless = 1
}
export declare class PermissionService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    get(ws: string, user: string): Promise<Permission>;
    /**
     * check whether a workspace exists and has any one can access it
     * @param workspaceId workspace id
     * @returns
     */
    hasWorkspace(workspaceId: string): Promise<any>;
    getOwnedWorkspaces(userId: string): Promise<any>;
    getWorkspaceOwner(workspaceId: string): Promise<any>;
    tryGetWorkspaceOwner(workspaceId: string): Promise<any>;
    /**
     * check if a doc binary is accessible by a user
     */
    isPublicAccessible(ws: string, id: string, user?: string): Promise<boolean>;
    /**
     * Returns whether a given user is a member of a workspace and has the given or higher permission.
     */
    isWorkspaceMember(ws: string, user: string, permission: Permission): Promise<boolean>;
    /**
     * only check permission if the workspace is a cloud workspace
     * @param workspaceId workspace id
     * @param userId user id, check if is a public workspace if not provided
     * @param permission default is read
     */
    checkCloudWorkspace(workspaceId: string, userId?: string, permission?: Permission): Promise<void>;
    checkWorkspace(ws: string, user?: string, permission?: Permission): Promise<void>;
    tryCheckWorkspace(ws: string, user?: string, permission?: Permission): Promise<boolean>;
    grant(ws: string, user: string, permission?: Permission): Promise<string>;
    getWorkspaceInvitation(invitationId: string, workspaceId: string): Promise<any>;
    acceptWorkspaceInvitation(invitationId: string, workspaceId: string): Promise<boolean>;
    revokeWorkspace(ws: string, user: string): Promise<boolean>;
    /**
     * only check permission if the workspace is a cloud workspace
     * @param workspaceId workspace id
     * @param pageId page id aka doc id
     * @param userId user id, check if is a public page if not provided
     * @param permission default is read
     */
    checkCloudPagePermission(workspaceId: string, pageId: string, userId?: string, permission?: Permission): Promise<void>;
    checkPagePermission(ws: string, page: string, user?: string, permission?: Permission): Promise<void>;
    tryCheckPage(ws: string, page: string, user?: string, permission?: Permission): Promise<boolean>;
    isPublicPage(ws: string, page: string): Promise<any>;
    publishPage(ws: string, page: string, mode?: PublicPageMode): Promise<any>;
    revokePublicPage(ws: string, page: string): Promise<any>;
    grantPage(ws: string, page: string, user: string, permission?: Permission): Promise<any>;
    revokePage(ws: string, page: string, user: string): Promise<boolean>;
}
//# sourceMappingURL=permission.d.ts.map