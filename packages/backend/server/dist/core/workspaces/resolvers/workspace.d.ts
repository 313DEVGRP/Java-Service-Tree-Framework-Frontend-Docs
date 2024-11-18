import { PrismaClient } from '@prisma/client';
import type { FileUpload } from '../../../fundamentals';
import { EventEmitter, MailService, MutexService } from '../../../fundamentals';
import { CurrentUser } from '../../auth';
import { QuotaManagementService, QuotaQueryType } from '../../quota';
import { WorkspaceBlobStorage } from '../../storage';
import { UserService } from '../../user';
import { PermissionService } from '../permission';
import { Permission, UpdateWorkspaceInput, WorkspaceType } from '../types';
/**
 * Workspace resolver
 * Public apis rate limit: 10 req/m
 * Other rate limit: 120 req/m
 */
export declare class WorkspaceResolver {
    private readonly mailer;
    private readonly prisma;
    private readonly permissions;
    private readonly quota;
    private readonly users;
    private readonly event;
    private readonly blobStorage;
    private readonly mutex;
    private readonly logger;
    constructor(mailer: MailService, prisma: PrismaClient, permissions: PermissionService, quota: QuotaManagementService, users: UserService, event: EventEmitter, blobStorage: WorkspaceBlobStorage, mutex: MutexService);
    permission(user: CurrentUser, workspace: WorkspaceType): Promise<unknown>;
    memberCount(workspace: WorkspaceType): any;
    owner(workspace: WorkspaceType): Promise<any>;
    members(workspace: WorkspaceType, skip?: number, take?: number): Promise<any>;
    workspaceQuota(workspace: WorkspaceType): Promise<QuotaQueryType & {
        businessBlobLimit: number;
        unlimited: boolean;
    }>;
    isOwner(user: CurrentUser, workspaceId: string): Promise<boolean>;
    workspaces(user: CurrentUser): Promise<any>;
    workspace(user: CurrentUser, id: string): Promise<any>;
    createWorkspace(user: CurrentUser, init: FileUpload | null): Promise<any>;
    updateWorkspace(user: CurrentUser, { id, ...updates }: UpdateWorkspaceInput): Promise<any>;
    deleteWorkspace(user: CurrentUser, id: string): Promise<boolean>;
    invite(user: CurrentUser, workspaceId: string, email: string, permission: Permission, sendInviteMail: boolean): Promise<any>;
    getInviteInfo(inviteId: string): Promise<{
        workspace: {
            name: any;
            avatar: string;
            id: any;
        };
        user: any;
        invitee: any;
    }>;
    revoke(user: CurrentUser, workspaceId: string, userId: string): Promise<boolean>;
    acceptInviteById(workspaceId: string, inviteId: string, sendAcceptMail: boolean): Promise<boolean>;
    leaveWorkspace(user: CurrentUser, workspaceId: string, workspaceName: string, sendLeaveMail: boolean): Promise<boolean>;
}
//# sourceMappingURL=workspace.d.ts.map