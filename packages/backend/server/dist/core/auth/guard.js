var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, SetMetadata, UseGuards } from '@nestjs/common';
import { ModuleRef, Reflector } from '@nestjs/core';
import { AuthenticationRequired, Config, getRequestResponseFromContext, mapAnyError, parseCookies, } from '../../fundamentals';
import { WEBSOCKET_OPTIONS } from '../../fundamentals/websocket';
import { AuthService, parseAuthUserSeqNum } from './service';
function extractTokenFromHeader(authorization) {
    if (!/^Bearer\s/i.test(authorization)) {
        return;
    }
    return authorization.substring(7);
}
const PUBLIC_ENTRYPOINT_SYMBOL = Symbol('public');
let AuthGuard = class AuthGuard {
    constructor(ref, reflector) {
        this.ref = ref;
        this.reflector = reflector;
    }
    onModuleInit() {
        this.auth = this.ref.get(AuthService, { strict: false });
    }
    async canActivate(context) {
        const { req, res } = getRequestResponseFromContext(context);
        const userSession = await this.signIn(req);
        if (res && userSession && userSession.session.expiresAt) {
            await this.auth.refreshUserSessionIfNeeded(req, res, userSession.session);
        }
        // api is public
        const isPublic = this.reflector.getAllAndOverride(PUBLIC_ENTRYPOINT_SYMBOL, [context.getClass(), context.getHandler()]);
        if (isPublic) {
            return true;
        }
        if (!req.user) {
            throw new AuthenticationRequired();
        }
        return true;
    }
    async signIn(req) {
        if (req.user && req.session) {
            return {
                user: req.user,
                session: req.session,
            };
        }
        parseCookies(req);
        let sessionToken = req.cookies[AuthService.sessionCookieName];
        if (!sessionToken && req.headers.authorization) {
            sessionToken = extractTokenFromHeader(req.headers.authorization);
        }
        if (sessionToken) {
            const userSeq = parseAuthUserSeqNum(req.headers[AuthService.authUserSeqHeaderName]);
            const userSession = await this.auth.getUserSession(sessionToken, userSeq);
            if (userSession) {
                req.session = userSession.session;
                req.user = userSession.user;
            }
            return userSession;
        }
        return null;
    }
};
AuthGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ModuleRef,
        Reflector])
], AuthGuard);
export { AuthGuard };
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
export const Auth = () => {
    return UseGuards(AuthGuard);
};
// api is public accessible
export const Public = () => SetMetadata(PUBLIC_ENTRYPOINT_SYMBOL, true);
export const AuthWebsocketOptionsProvider = {
    provide: WEBSOCKET_OPTIONS,
    useFactory: (config, guard) => {
        return {
            ...config.websocket,
            allowRequest: async (req, pass) => {
                if (!config.websocket.requireAuthentication) {
                    return pass(null, true);
                }
                try {
                    const authentication = await guard.signIn(req);
                    if (authentication) {
                        return pass(null, true);
                    }
                    else {
                        return pass('unauthenticated', false);
                    }
                }
                catch (e) {
                    const error = mapAnyError(e);
                    error.log('Websocket');
                    return pass('unauthenticated', false);
                }
            },
        };
    },
    inject: [Config, AuthGuard],
};
//# sourceMappingURL=guard.js.map