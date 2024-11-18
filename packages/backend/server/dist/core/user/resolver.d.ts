import { PrismaClient } from '@prisma/client';
import { type FileUpload } from '../../fundamentals';
import { CurrentUser } from '../auth/current-user';
import { AvatarStorage } from '../storage';
import { UserService } from './service';
import { DeleteAccount, ManageUserInput, UpdateUserInput, UserOrLimitedUser, UserType } from './types';
export declare class UserResolver {
    private readonly prisma;
    private readonly storage;
    private readonly users;
    constructor(prisma: PrismaClient, storage: AvatarStorage, users: UserService);
    user(email: string, currentUser?: CurrentUser): Promise<typeof UserOrLimitedUser | null>;
    invoiceCount(user: CurrentUser): Promise<any>;
    uploadAvatar(user: CurrentUser, avatar: FileUpload): Promise<any>;
    updateUserProfile(user: CurrentUser, input: UpdateUserInput): Promise<UserType>;
    removeAvatar(user: CurrentUser): Promise<{
        success: boolean;
    }>;
    deleteAccount(user: CurrentUser): Promise<DeleteAccount>;
}
declare class ListUserInput {
    skip: number;
    first: number;
}
declare class CreateUserInput {
    email: string;
    name: string | null;
}
export declare class UserManagementResolver {
    private readonly db;
    private readonly user;
    constructor(db: PrismaClient, user: UserService);
    usersCount(): Promise<number>;
    users(input: ListUserInput): Promise<UserType[]>;
    getUser(id: string): Promise<CurrentUser | null>;
    getUserByEmail(email: string): Promise<CurrentUser | null>;
    createUser(input: CreateUserInput): Promise<CurrentUser | null>;
    deleteUser(user: CurrentUser, id: string): Promise<DeleteAccount>;
    updateUser(id: string, input: ManageUserInput): Promise<UserType>;
}
export {};
//# sourceMappingURL=resolver.d.ts.map