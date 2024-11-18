import { ConnectedAccount, PrismaClient } from '@prisma/client';
import type { Request, Response } from 'express';
import { AuthService } from '../../core/auth';
import { UserService } from '../../core/user';
import { URLHelper } from '../../fundamentals';
import { OAuthProviderName } from './config';
import { OAuthAccount, Tokens } from './providers/def';
import { OAuthProviderFactory } from './register';
import { OAuthService } from './service';
export declare class OAuthController {
    private readonly auth;
    private readonly oauth;
    private readonly user;
    private readonly providerFactory;
    private readonly url;
    private readonly db;
    constructor(auth: AuthService, oauth: OAuthService, user: UserService, providerFactory: OAuthProviderFactory, url: URLHelper, db: PrismaClient);
    login(res: Response, unknownProviderName: string, redirectUri?: string): Promise<void>;
    callback(req: Request, res: Response, code?: string, stateStr?: string): Promise<void>;
    private loginFromOauth;
    updateConnectedAccount(connectedUser: ConnectedAccount, tokens: Tokens): any;
    createUserWithConnectedAccount(provider: OAuthProviderName, externalAccount: OAuthAccount, tokens: Tokens): Promise<any>;
    private connectAccountFromOauth;
}
//# sourceMappingURL=controller.d.ts.map