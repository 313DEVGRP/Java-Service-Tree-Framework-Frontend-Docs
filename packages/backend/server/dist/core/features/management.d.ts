import { Logger } from '@nestjs/common';
import { Config, type EventPayload } from '../../fundamentals';
import { UserService } from '../user/service';
import { FeatureService } from './service';
import { FeatureType } from './types';
export declare enum EarlyAccessType {
    App = "app",
    AI = "ai"
}
export declare class FeatureManagementService {
    private readonly feature;
    private readonly user;
    private readonly config;
    protected logger: Logger;
    constructor(feature: FeatureService, user: UserService, config: Config);
    isStaff(email: string): boolean;
    isAdmin(userId: string): Promise<any>;
    addAdmin(userId: string): Promise<any>;
    addEarlyAccess(userId: string, type?: EarlyAccessType): Promise<any>;
    removeEarlyAccess(userId: string, type?: EarlyAccessType): Promise<any>;
    listEarlyAccess(type?: EarlyAccessType): Promise<any>;
    isEarlyAccessUser(userId: string, type?: EarlyAccessType): Promise<any>;
    canEarlyAccess(email: string, type?: EarlyAccessType): Promise<any>;
    addCopilot(userId: string, reason?: string): Promise<any>;
    removeCopilot(userId: string): Promise<any>;
    isCopilotUser(userId: string): Promise<any>;
    getActivatedUserFeatures(userId: string): Promise<FeatureType[]>;
    addWorkspaceFeatures(workspaceId: string, feature: FeatureType, reason?: string): Promise<any>;
    getWorkspaceFeatures(workspaceId: string): Promise<any[]>;
    hasWorkspaceFeature(workspaceId: string, feature: FeatureType): Promise<any>;
    removeWorkspaceFeature(workspaceId: string, feature: FeatureType): Promise<boolean>;
    listFeatureWorkspaces(feature: FeatureType): Promise<import("../workspaces").WorkspaceType[]>;
    onAdminUserCreated({ id }: EventPayload<'user.admin.created'>): Promise<void>;
}
//# sourceMappingURL=management.d.ts.map