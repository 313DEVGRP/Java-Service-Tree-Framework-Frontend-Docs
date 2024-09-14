var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Args, Mutation, Parent, registerEnumType, ResolveField, Resolver, } from '@nestjs/graphql';
import { difference } from 'lodash-es';
import { Config } from '../../fundamentals';
import { Admin } from '../common';
import { UserType } from '../user/types';
import { EarlyAccessType, FeatureManagementService } from './management';
import { FeatureService } from './service';
import { FeatureType } from './types';
registerEnumType(EarlyAccessType, {
    name: 'EarlyAccessType',
});
let FeatureManagementResolver = class FeatureManagementResolver {
    constructor(feature) {
        this.feature = feature;
    }
    async userFeatures(user) {
        return this.feature.getActivatedUserFeatures(user.id);
    }
};
__decorate([
    ResolveField(() => [FeatureType], {
        name: 'features',
        description: 'Enabled features of a user',
    }),
    __param(0, Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserType]),
    __metadata("design:returntype", Promise)
], FeatureManagementResolver.prototype, "userFeatures", null);
FeatureManagementResolver = __decorate([
    Resolver(() => UserType),
    __metadata("design:paramtypes", [FeatureManagementService])
], FeatureManagementResolver);
export { FeatureManagementResolver };
export class AvailableUserFeatureConfig {
    constructor(config) {
        this.config = config;
    }
    async availableUserFeatures() {
        return this.config.isSelfhosted
            ? [FeatureType.Admin]
            : [FeatureType.EarlyAccess, FeatureType.AIEarlyAccess, FeatureType.Admin];
    }
}
let AdminFeatureManagementResolver = class AdminFeatureManagementResolver extends AvailableUserFeatureConfig {
    constructor(config, feature) {
        super(config);
        this.feature = feature;
    }
    async updateUserFeatures(id, features) {
        const configurableFeatures = await this.availableUserFeatures();
        const removed = difference(configurableFeatures, features);
        await Promise.all(features.map(feature => this.feature.addUserFeature(id, feature, 'admin panel')));
        await Promise.all(removed.map(feature => this.feature.removeUserFeature(id, feature)));
        return features;
    }
};
__decorate([
    Mutation(() => [FeatureType], {
        description: 'update user enabled feature',
    }),
    __param(0, Args('id')),
    __param(1, Args({ name: 'features', type: () => [FeatureType] })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], AdminFeatureManagementResolver.prototype, "updateUserFeatures", null);
AdminFeatureManagementResolver = __decorate([
    Admin(),
    Resolver(() => Boolean),
    __metadata("design:paramtypes", [Config,
        FeatureService])
], AdminFeatureManagementResolver);
export { AdminFeatureManagementResolver };
//# sourceMappingURL=resolver.js.map