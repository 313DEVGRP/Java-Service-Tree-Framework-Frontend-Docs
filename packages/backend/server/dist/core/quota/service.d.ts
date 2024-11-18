import { PrismaClient } from '@prisma/client';
import type { EventPayload } from '../../fundamentals';
import { PrismaTransaction } from '../../fundamentals';
import { FeatureManagementService } from '../features/management';
import { QuotaType } from './types';
export declare class QuotaService {
    private readonly prisma;
    private readonly feature;
    constructor(prisma: PrismaClient, feature: FeatureManagementService);
    getUserQuota(userId: string): Promise<any>;
    getUserQuotas(userId: string): Promise<any[]>;
    switchUserQuota(userId: string, quota: QuotaType, reason?: string, expiredAt?: Date): Promise<void>;
    hasQuota(userId: string, quota: QuotaType, tx?: PrismaTransaction): Promise<any>;
    onSubscriptionUpdated({ userId, plan, recurring, }: EventPayload<'user.subscription.activated'>): Promise<void>;
    onSubscriptionCanceled({ userId, plan, }: EventPayload<'user.subscription.canceled'>): Promise<void>;
}
//# sourceMappingURL=service.d.ts.map