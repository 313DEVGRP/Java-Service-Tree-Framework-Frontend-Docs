import type { User, UserSubscription } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { CurrentUser } from '../../core/auth';
import { Config, URLHelper } from '../../fundamentals';
import { SubscriptionService } from './service';
import { SubscriptionPlan, SubscriptionRecurring, SubscriptionStatus } from './types';
declare class SubscriptionPrice {
    type: 'fixed';
    plan: SubscriptionPlan;
    currency: string;
    amount?: number | null;
    yearlyAmount?: number | null;
    lifetimeAmount?: number | null;
}
export declare class UserSubscriptionType implements Partial<UserSubscription> {
    stripeSubscriptionId: string | null;
    plan: SubscriptionPlan;
    recurring: SubscriptionRecurring;
    status: SubscriptionStatus;
    start: Date;
    end: Date | null;
    trialStart?: Date | null;
    trialEnd?: Date | null;
    nextBillAt?: Date | null;
    canceledAt?: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
declare class CreateCheckoutSessionInput {
    recurring: SubscriptionRecurring;
    plan: SubscriptionPlan;
    coupon: string | null;
    successCallbackLink: string;
    idempotencyKey: string;
}
export declare class SubscriptionResolver {
    private readonly service;
    private readonly url;
    constructor(service: SubscriptionService, url: URLHelper);
    prices(user?: CurrentUser): Promise<SubscriptionPrice[]>;
    createCheckoutSession(user: CurrentUser, input: CreateCheckoutSessionInput): Promise<string>;
    createCustomerPortal(user: CurrentUser): Promise<string>;
    cancelSubscription(user: CurrentUser, plan: SubscriptionPlan, idempotencyKey: string): Promise<UserSubscription>;
    resumeSubscription(user: CurrentUser, plan: SubscriptionPlan, idempotencyKey: string): Promise<UserSubscription>;
    updateSubscriptionRecurring(user: CurrentUser, recurring: SubscriptionRecurring, plan: SubscriptionPlan, idempotencyKey: string): Promise<UserSubscription>;
}
export declare class UserSubscriptionResolver {
    private readonly config;
    private readonly db;
    constructor(config: Config, db: PrismaClient);
    subscription(ctx: {
        isAdminQuery: boolean;
    }, me: User, user: User, plan: SubscriptionPlan): Promise<any>;
    subscriptions(me: User, user: User): Promise<UserSubscription[]>;
    invoices(me: User, user: User, take: number, skip?: number): Promise<any>;
}
export {};
//# sourceMappingURL=resolver.d.ts.map