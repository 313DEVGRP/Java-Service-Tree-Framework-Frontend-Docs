import { PrismaClient } from '@prisma/client';
import { WorkspaceType } from '../workspaces/types';
import { FeatureConfigType } from './feature';
import { FeatureType } from './types';
export declare class FeatureService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    getFeature<F extends FeatureType>(feature: F): Promise<FeatureConfigType<F> | undefined>;
    addUserFeature(userId: string, feature: FeatureType, reason: string, expiredAt?: Date | string): Promise<any>;
    removeUserFeature(userId: string, feature: FeatureType): Promise<any>;
    ensureNotLastAdmin(userId: string): Promise<void>;
    /**
     * get user's features, will included inactivated features
     * @param userId user id
     * @returns list of features
     */
    getUserFeatures(userId: string): Promise<any[]>;
    getActivatedUserFeatures(userId: string): Promise<any[]>;
    listFeatureUsers(feature: FeatureType): Promise<any>;
    hasUserFeature(userId: string, feature: FeatureType): Promise<any>;
    addWorkspaceFeature(workspaceId: string, feature: FeatureType, reason: string, expiredAt?: Date | string): Promise<any>;
    removeWorkspaceFeature(workspaceId: string, feature: FeatureType): Promise<any>;
    /**
     * get workspace's features, will included inactivated features
     * @param workspaceId workspace id
     * @returns list of features
     */
    getWorkspaceFeatures(workspaceId: string): Promise<any[]>;
    listFeatureWorkspaces(feature: FeatureType): Promise<WorkspaceType[]>;
    hasWorkspaceFeature(workspaceId: string, feature: FeatureType): Promise<any>;
}
//# sourceMappingURL=service.d.ts.map