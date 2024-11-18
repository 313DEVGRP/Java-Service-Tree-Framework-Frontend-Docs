import type { CanActivate, ExecutionContext, FactoryProvider, OnModuleInit } from '@nestjs/common';
import { ModuleRef, Reflector } from '@nestjs/core';
import type { Request } from 'express';
import { CurrentUser, UserSession } from './current-user';
declare const PUBLIC_ENTRYPOINT_SYMBOL: unique symbol;
export declare class AuthGuard implements CanActivate, OnModuleInit {
    private readonly ref;
    private readonly reflector;
    private auth;
    constructor(ref: ModuleRef, reflector: Reflector);
    onModuleInit(): void;
    canActivate(context: ExecutionContext): Promise<boolean>;
    signIn(req: Request): Promise<{
        user: CurrentUser;
        session: UserSession;
    } | null>;
}
/**
 * This guard is used to protect routes/queries/mutations that require a user to be logged in.
 *
 * The `@CurrentUser()` parameter decorator used in a `Auth` guarded queries would always give us the user because the `Auth` guard will
 * fast throw if user is not logged in.
 *
 * @example
 *
 * ```typescript
 * \@Auth()
 * \@Query(() => UserType)
 * user(@CurrentUser() user: CurrentUser) {
 *   return user;
 * }
 * ```
 */
export declare const Auth: () => MethodDecorator & ClassDecorator;
export declare const Public: () => import("@nestjs/common").CustomDecorator<typeof PUBLIC_ENTRYPOINT_SYMBOL>;
export declare const AuthWebsocketOptionsProvider: FactoryProvider;
export {};
//# sourceMappingURL=guard.d.ts.map