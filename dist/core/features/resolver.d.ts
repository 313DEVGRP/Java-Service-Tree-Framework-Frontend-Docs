import { Config } from '../../fundamentals';
import { UserType } from '../user/types';
import { FeatureManagementService } from './management';
import { FeatureService } from './service';
import { FeatureType } from './types';
export declare class FeatureManagementResolver {
    private readonly feature;
    constructor(feature: FeatureManagementService);
    userFeatures(user: UserType): Promise<FeatureType[]>;
}
export declare class AvailableUserFeatureConfig {
    private readonly config;
    constructor(config: Config);
    availableUserFeatures(): Promise<FeatureType[]>;
}
export declare class AdminFeatureManagementResolver extends AvailableUserFeatureConfig {
    private readonly feature;
    constructor(config: Config, feature: FeatureService);
    updateUserFeatures(id: string, features: FeatureType[]): Promise<FeatureType[]>;
}
//# sourceMappingURL=resolver.d.ts.map