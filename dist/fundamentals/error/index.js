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
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Logger, Module } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Config } from '../config/provider';
import { generateUserFriendlyErrors } from './def';
import { ActionForbidden, ErrorDataUnionType, ErrorNames } from './errors.gen';
let ErrorResolver = class ErrorResolver {
    // only exists for type registering
    error(_name) {
        throw new ActionForbidden();
    }
};
__decorate([
    Query(() => ErrorDataUnionType),
    __param(0, Args({ name: 'name', type: () => ErrorNames })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ErrorResolver.prototype, "error", null);
ErrorResolver = __decorate([
    Resolver(() => ErrorDataUnionType)
], ErrorResolver);
let ErrorModule = class ErrorModule {
    constructor(config) {
        this.config = config;
        this.logger = new Logger('ErrorModule');
    }
    onModuleInit() {
        if (!this.config.node.dev) {
            return;
        }
        this.logger.log('Generating UserFriendlyError classes');
        const def = generateUserFriendlyErrors();
        writeFileSync(join(fileURLToPath(import.meta.url), '../errors.gen.ts'), def);
    }
};
ErrorModule = __decorate([
    Module({
        providers: [ErrorResolver],
    }),
    __metadata("design:paramtypes", [Config])
], ErrorModule);
export { ErrorModule };
export { UserFriendlyError } from './def';
export * from './errors.gen';
export * from './payment-required';
export * from './too-many-requests';
//# sourceMappingURL=index.js.map