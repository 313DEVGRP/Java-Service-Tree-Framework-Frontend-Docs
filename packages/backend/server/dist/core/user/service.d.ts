import { Prisma, PrismaClient } from '@prisma/client';
import { Config, CryptoHelper, EventEmitter, type EventPayload } from '../../fundamentals';
type CreateUserInput = Omit<Prisma.UserCreateInput, 'name'> & {
    name?: string;
};
export declare class UserService {
    private readonly config;
    private readonly crypto;
    private readonly prisma;
    private readonly emitter;
    private readonly logger;
    defaultUserSelect: Prisma.UserSelect;
    constructor(config: Config, crypto: CryptoHelper, prisma: PrismaClient, emitter: EventEmitter);
    get userCreatingData(): {
        name: string;
        features: {
            create: {
                reason: string;
                activated: boolean;
                feature: {
                    connect: {
                        feature_version: {
                            feature: import("../quota").QuotaType;
                            version: number;
                        };
                    };
                };
            };
        };
    };
    createUser(data: CreateUserInput): Promise<any>;
    createUser_without_verification(data: CreateUserInput): Promise<any>;
    findUserById(id: string): Promise<any>;
    findUserByEmail(email: string): Promise<any>;
    /**
     * supposed to be used only for `Credential SignIn`
     */
    findUserWithHashedPasswordByEmail(email: string): Promise<any>;
    signIn(email: string, password: string): Promise<any>;
    fulfillUser(email: string, data: Partial<Pick<Prisma.UserCreateInput, 'emailVerifiedAt' | 'registered'>>): Promise<any>;
    updateUser(id: string, data: Omit<Partial<Prisma.UserCreateInput>, 'id'>, select?: Prisma.UserSelect): Promise<any>;
    deleteUser(id: string): Promise<void>;
    onUserUpdated(user: EventPayload<'user.deleted'>): Promise<void>;
    onUserDeleted(user: EventPayload<'user.deleted'>): Promise<void>;
}
export {};
//# sourceMappingURL=service.d.ts.map