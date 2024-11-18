import { PrismaClient, RuntimeConfig, RuntimeConfigType } from '@prisma/client';
import { Config, URLHelper } from '../../fundamentals';
import { FeatureType } from '../features';
import { AvailableUserFeatureConfig } from '../features/resolver';
import { ServerFlags } from './config';
import { ServerConfigType } from './types';
export declare class PasswordLimitsType {
    minLength: number;
    maxLength: number;
}
export declare class CredentialsRequirementType {
    password: PasswordLimitsType;
}
export declare class ServerRuntimeConfigType implements Partial<RuntimeConfig> {
    id: string;
    module: string;
    key: string;
    description: string;
    value: any;
    type: RuntimeConfigType;
    updatedAt: Date;
}
export declare class ServerFlagsType implements ServerFlags {
    earlyAccessControl: boolean;
    syncClientVersionCheck: boolean;
}
export declare class ServerConfigResolver {
    private readonly config;
    private readonly url;
    private readonly db;
    constructor(config: Config, url: URLHelper, db: PrismaClient);
    serverConfig(): ServerConfigType;
    credentialsRequirement(): Promise<{
        password: {
            minLength: number;
            maxLength: number;
        };
    }>;
    flags(): Promise<ServerFlagsType>;
    initialized(): Promise<boolean>;
}
export declare class ServerFeatureConfigResolver extends AvailableUserFeatureConfig {
    constructor(config: Config);
    availableUserFeatures(): Promise<FeatureType[]>;
}
interface ServerServeConfig {
    https: boolean;
    host: string;
    port: number;
    externalUrl: string;
}
interface ServerMailerConfig {
    host?: string | null;
    port?: number | null;
    secure?: boolean | null;
    service?: string | null;
    sender?: string | null;
}
interface ServerDatabaseConfig {
    host: string;
    port: number;
    user?: string | null;
    database: string;
}
export declare class ServerRuntimeConfigResolver {
    private readonly config;
    constructor(config: Config);
    serverRuntimeConfig(): Promise<ServerRuntimeConfigType[]>;
    updateRuntimeConfig(id: string, value: any): Promise<ServerRuntimeConfigType>;
    updateRuntimeConfigs(updates: any): Promise<ServerRuntimeConfigType[]>;
}
export declare class ServerServiceConfigResolver {
    private readonly config;
    constructor(config: Config);
    serverServiceConfigs(): ({
        name: string;
        config: ServerServeConfig;
    } | {
        name: string;
        config: ServerMailerConfig;
    } | {
        name: string;
        config: ServerDatabaseConfig;
    })[];
    serve(): ServerServeConfig;
    mail(): ServerMailerConfig;
    database(): ServerDatabaseConfig;
}
export {};
//# sourceMappingURL=resolver.d.ts.map