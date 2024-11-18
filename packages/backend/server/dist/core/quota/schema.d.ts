import { FeatureKind } from '../features/types';
import { Quota, QuotaType } from './types';
export declare const Quotas: Quota[];
export declare function getLatestQuota(type: QuotaType): {
    feature: string;
    type: FeatureKind.Quota;
    version: number;
    configs?: unknown;
} & {
    feature: QuotaType;
    configs: {
        name: string;
        blobLimit: number;
        storageQuota: number;
        historyPeriod: number;
        memberLimit: number;
        businessBlobLimit?: number | null | undefined;
        copilotActionLimit?: number | null | undefined;
    };
};
export declare const FreePlan: {
    feature: string;
    type: FeatureKind.Quota;
    version: number;
    configs?: unknown;
} & {
    feature: QuotaType;
    configs: {
        name: string;
        blobLimit: number;
        storageQuota: number;
        historyPeriod: number;
        memberLimit: number;
        businessBlobLimit?: number | null | undefined;
        copilotActionLimit?: number | null | undefined;
    };
};
export declare const ProPlan: {
    feature: string;
    type: FeatureKind.Quota;
    version: number;
    configs?: unknown;
} & {
    feature: QuotaType;
    configs: {
        name: string;
        blobLimit: number;
        storageQuota: number;
        historyPeriod: number;
        memberLimit: number;
        businessBlobLimit?: number | null | undefined;
        copilotActionLimit?: number | null | undefined;
    };
};
export declare const LifetimeProPlan: {
    feature: string;
    type: FeatureKind.Quota;
    version: number;
    configs?: unknown;
} & {
    feature: QuotaType;
    configs: {
        name: string;
        blobLimit: number;
        storageQuota: number;
        historyPeriod: number;
        memberLimit: number;
        businessBlobLimit?: number | null | undefined;
        copilotActionLimit?: number | null | undefined;
    };
};
export declare const Quota_FreePlanV1_1: {
    feature: QuotaType;
    version: number;
};
export declare const Quota_ProPlanV1: {
    feature: QuotaType;
    version: number;
};
//# sourceMappingURL=schema.d.ts.map