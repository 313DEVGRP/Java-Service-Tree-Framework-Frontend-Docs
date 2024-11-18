import { PrismaClient } from '@prisma/client';
import type { Request, Response } from 'express';
import { EventEmitter, MutexService } from '../../fundamentals';
import { AuthService } from '../auth';
import { UserService } from '../user/service';
interface CreateUserInput {
    email: string;
    password: string;
}
export declare class CustomSetupController {
    private readonly db;
    private readonly user;
    private readonly auth;
    private readonly event;
    private readonly mutex;
    constructor(db: PrismaClient, user: UserService, auth: AuthService, event: EventEmitter, mutex: MutexService);
    createAdmin(req: Request, res: Response, input: CreateUserInput): Promise<void>;
}
export {};
//# sourceMappingURL=controller.d.ts.map