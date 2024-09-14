import { Logger, OnModuleInit } from '@nestjs/common';
import { Config } from '../config/provider';
export declare class ErrorModule implements OnModuleInit {
    private readonly config;
    logger: Logger;
    constructor(config: Config);
    onModuleInit(): void;
}
export { UserFriendlyError } from './def';
export * from './errors.gen';
export * from './payment-required';
export * from './too-many-requests';
//# sourceMappingURL=index.d.ts.map