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
var _a;
import { Args, Field, GraphQLISODateTime, Mutation, ObjectType, Query, registerEnumType, ResolveField, Resolver, } from '@nestjs/graphql';
import { PrismaClient, RuntimeConfigType } from '@prisma/client';
import { GraphQLJSON, GraphQLJSONObject } from 'graphql-scalars';
import { Config, URLHelper } from '../../fundamentals';
import { Public } from '../auth';
import { Admin } from '../common';
import { FeatureType } from '../features';
import { AvailableUserFeatureConfig } from '../features/resolver';
import { ENABLED_FEATURES } from './server-feature';
import { ServerConfigType } from './types';
let PasswordLimitsType = class PasswordLimitsType {
};
__decorate([
    Field(),
    __metadata("design:type", Number)
], PasswordLimitsType.prototype, "minLength", void 0);
__decorate([
    Field(),
    __metadata("design:type", Number)
], PasswordLimitsType.prototype, "maxLength", void 0);
PasswordLimitsType = __decorate([
    ObjectType()
], PasswordLimitsType);
export { PasswordLimitsType };
let CredentialsRequirementType = class CredentialsRequirementType {
};
__decorate([
    Field(),
    __metadata("design:type", PasswordLimitsType)
], CredentialsRequirementType.prototype, "password", void 0);
CredentialsRequirementType = __decorate([
    ObjectType()
], CredentialsRequirementType);
export { CredentialsRequirementType };
registerEnumType(RuntimeConfigType, {
    name: 'RuntimeConfigType',
});
let ServerRuntimeConfigType = class ServerRuntimeConfigType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], ServerRuntimeConfigType.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], ServerRuntimeConfigType.prototype, "module", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], ServerRuntimeConfigType.prototype, "key", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], ServerRuntimeConfigType.prototype, "description", void 0);
__decorate([
    Field(() => GraphQLJSON),
    __metadata("design:type", Object)
], ServerRuntimeConfigType.prototype, "value", void 0);
__decorate([
    Field(() => RuntimeConfigType),
    __metadata("design:type", typeof (_a = typeof RuntimeConfigType !== "undefined" && RuntimeConfigType) === "function" ? _a : Object)
], ServerRuntimeConfigType.prototype, "type", void 0);
__decorate([
    Field(() => GraphQLISODateTime),
    __metadata("design:type", Date)
], ServerRuntimeConfigType.prototype, "updatedAt", void 0);
ServerRuntimeConfigType = __decorate([
    ObjectType()
], ServerRuntimeConfigType);
export { ServerRuntimeConfigType };
let ServerFlagsType = class ServerFlagsType {
};
__decorate([
    Field(),
    __metadata("design:type", Boolean)
], ServerFlagsType.prototype, "earlyAccessControl", void 0);
__decorate([
    Field(),
    __metadata("design:type", Boolean)
], ServerFlagsType.prototype, "syncClientVersionCheck", void 0);
ServerFlagsType = __decorate([
    ObjectType()
], ServerFlagsType);
export { ServerFlagsType };
let ServerConfigResolver = class ServerConfigResolver {
    constructor(config, url, db) {
        this.config = config;
        this.url = url;
        this.db = db;
    }
    serverConfig() {
        return {
            name: this.config.serverName,
            version: this.config.version,
            baseUrl: this.url.home,
            type: this.config.type,
            // BACKWARD COMPATIBILITY
            // the old flavors contains `selfhosted` but it actually not flavor but deployment type
            // this field should be removed after frontend feature flags implemented
            flavor: this.config.type,
            features: Array.from(ENABLED_FEATURES),
            enableTelemetry: this.config.metrics.telemetry.enabled,
        };
    }
    async credentialsRequirement() {
        const config = await this.config.runtime.fetchAll({
            'auth/password.max': true,
            'auth/password.min': true,
        });
        return {
            password: {
                minLength: config['auth/password.min'],
                maxLength: config['auth/password.max'],
            },
        };
    }
    async flags() {
        const records = await this.config.runtime.list('flags');
        return records.reduce((flags, record) => {
            flags[record.key] = record.value;
            return flags;
        }, {});
    }
    async initialized() {
        return (await this.db.user.count()) > 0;
    }
};
__decorate([
    Public(),
    Query(() => ServerConfigType, {
        description: 'server config',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ServerConfigType)
], ServerConfigResolver.prototype, "serverConfig", null);
__decorate([
    ResolveField(() => CredentialsRequirementType, {
        description: 'credentials requirement',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServerConfigResolver.prototype, "credentialsRequirement", null);
__decorate([
    ResolveField(() => ServerFlagsType, {
        description: 'server flags',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServerConfigResolver.prototype, "flags", null);
__decorate([
    ResolveField(() => Boolean, {
        description: 'whether server has been initialized',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServerConfigResolver.prototype, "initialized", null);
ServerConfigResolver = __decorate([
    Resolver(() => ServerConfigType),
    __metadata("design:paramtypes", [Config,
        URLHelper, Object])
], ServerConfigResolver);
export { ServerConfigResolver };
let ServerFeatureConfigResolver = class ServerFeatureConfigResolver extends AvailableUserFeatureConfig {
    constructor(config) {
        super(config);
    }
    availableUserFeatures() {
        return super.availableUserFeatures();
    }
};
__decorate([
    ResolveField(() => [FeatureType], {
        description: 'Features for user that can be configured',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServerFeatureConfigResolver.prototype, "availableUserFeatures", null);
ServerFeatureConfigResolver = __decorate([
    Resolver(() => ServerConfigType),
    __metadata("design:paramtypes", [Config])
], ServerFeatureConfigResolver);
export { ServerFeatureConfigResolver };
let ServerServiceConfig = class ServerServiceConfig {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], ServerServiceConfig.prototype, "name", void 0);
__decorate([
    Field(() => GraphQLJSONObject),
    __metadata("design:type", Object)
], ServerServiceConfig.prototype, "config", void 0);
ServerServiceConfig = __decorate([
    ObjectType()
], ServerServiceConfig);
let ServerRuntimeConfigResolver = class ServerRuntimeConfigResolver {
    constructor(config) {
        this.config = config;
    }
    serverRuntimeConfig() {
        return this.config.runtime.list();
    }
    async updateRuntimeConfig(id, value) {
        return await this.config.runtime.set(id, value);
    }
    async updateRuntimeConfigs(updates) {
        const keys = Object.keys(updates);
        const results = await Promise.all(keys.map(key => this.config.runtime.set(key, updates[key])));
        return results;
    }
};
__decorate([
    Query(() => [ServerRuntimeConfigType], {
        description: 'get all server runtime configurable settings',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServerRuntimeConfigResolver.prototype, "serverRuntimeConfig", null);
__decorate([
    Mutation(() => ServerRuntimeConfigType, {
        description: 'update server runtime configurable setting',
    }),
    __param(0, Args('id')),
    __param(1, Args({ type: () => GraphQLJSON, name: 'value' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ServerRuntimeConfigResolver.prototype, "updateRuntimeConfig", null);
__decorate([
    Mutation(() => [ServerRuntimeConfigType], {
        description: 'update multiple server runtime configurable settings',
    }),
    __param(0, Args({ type: () => GraphQLJSONObject, name: 'updates' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServerRuntimeConfigResolver.prototype, "updateRuntimeConfigs", null);
ServerRuntimeConfigResolver = __decorate([
    Admin(),
    Resolver(() => ServerRuntimeConfigType),
    __metadata("design:paramtypes", [Config])
], ServerRuntimeConfigResolver);
export { ServerRuntimeConfigResolver };
let ServerServiceConfigResolver = class ServerServiceConfigResolver {
    constructor(config) {
        this.config = config;
    }
    serverServiceConfigs() {
        return [
            {
                name: 'server',
                config: this.serve(),
            },
            {
                name: 'mailer',
                config: this.mail(),
            },
            {
                name: 'database',
                config: this.database(),
            },
        ];
    }
    serve() {
        return this.config.server;
    }
    mail() {
        const sender = typeof this.config.mailer.from === 'string'
            ? this.config.mailer.from
            : this.config.mailer.from?.address;
        return {
            host: this.config.mailer.host,
            port: this.config.mailer.port,
            secure: this.config.mailer.secure,
            service: this.config.mailer.service,
            sender,
        };
    }
    database() {
        const url = new URL(this.config.database.datasourceUrl);
        return {
            host: url.hostname,
            port: Number(url.port),
            user: url.username,
            database: url.pathname.slice(1) ?? url.username,
        };
    }
};
__decorate([
    Query(() => [ServerServiceConfig]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServerServiceConfigResolver.prototype, "serverServiceConfigs", null);
ServerServiceConfigResolver = __decorate([
    Admin(),
    Resolver(() => ServerServiceConfig),
    __metadata("design:paramtypes", [Config])
], ServerServiceConfigResolver);
export { ServerServiceConfigResolver };
//# sourceMappingURL=resolver.js.map