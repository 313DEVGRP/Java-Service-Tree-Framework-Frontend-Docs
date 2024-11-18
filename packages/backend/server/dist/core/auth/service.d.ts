import { OnApplicationBootstrap } from '@nestjs/common';
import type { User, UserSession } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import type { CookieOptions, Request, Response } from 'express';
import { Config, MailService } from '../../fundamentals';
import { FeatureManagementService } from '../features/management';
import { QuotaService } from '../quota/service';
import { UserService } from '../user/service';
import type { CurrentUser } from './current-user';
export declare function parseAuthUserSeqNum(value: any): number;
export declare function sessionUser(user: Pick<User, 'id' | 'email' | 'avatarUrl' | 'name' | 'emailVerifiedAt'> & {
    password?: string | null;
}): CurrentUser;
export declare class AuthService implements OnApplicationBootstrap {
    private readonly config;
    private readonly db;
    private readonly mailer;
    private readonly feature;
    private readonly quota;
    private readonly user;
    readonly cookieOptions: CookieOptions;
    static readonly sessionCookieName = "affine_session";
    static readonly authUserSeqHeaderName = "x-auth-user";
    constructor(config: Config, db: PrismaClient, mailer: MailService, feature: FeatureManagementService, quota: QuotaService, user: UserService);
    onApplicationBootstrap(): Promise<void>;
    canSignIn(email: string): Promise<any>;
    signUp(name: string, email: string, password: string): Promise<CurrentUser>;
    signIn(email: string, password: string): Promise<CurrentUser>;
    getUserSession(token: string, seq?: number): Promise<{
        user: CurrentUser;
        session: UserSession;
    } | null>;
    getUserList(token: string): Promise<CurrentUser[]>;
    signOut(token: string, seq?: number): Promise<any>;
    getSession(token: string): Promise<any>;
    refreshUserSessionIfNeeded(_req: Request, res: Response, session: UserSession, ttr?: number): Promise<boolean>;
    createUserSession(user: {
        id: string;
    }, existingSession?: string, ttl?: number): Promise<any>;
    revokeUserSessions(userId: string, sessionId?: string): Promise<any>;
    setCookie(_req: Request, res: Response, user: {
        id: string;
    }): Promise<void>;
    changePassword(id: string, newPassword: string): Promise<Omit<User, 'password'>>;
    changeEmail(id: string, newEmail: string): Promise<Omit<User, 'password'>>;
    setEmailVerified(id: string): Promise<any>;
    sendChangePasswordEmail(email: string, callbackUrl: string): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
    sendSetPasswordEmail(email: string, callbackUrl: string): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
    sendChangeEmail(email: string, callbackUrl: string): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
    sendVerifyChangeEmail(email: string, callbackUrl: string): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
    sendVerifyEmail(email: string, callbackUrl: string): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
    sendNotificationChangeEmail(email: string): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
    sendSignInEmail(email: string, link: string, signUp: boolean): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
    cleanExpiredSessions(): Promise<void>;
}
//# sourceMappingURL=service.d.ts.map