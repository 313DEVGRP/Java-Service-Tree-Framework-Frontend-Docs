import type { Request, Response } from 'express';
import { EventEmitter, MutexService } from '../../fundamentals';
import { AuthService } from '../auth';
import { ServerService } from '../config';
import { UserService } from '../user/service';
interface CreateUserInput {
    email: string;
    password: string;
}
export declare class CustomSetupController {
    private readonly user;
    private readonly auth;
    private readonly event;
    private readonly mutex;
    private readonly server;
    constructor(user: UserService, auth: AuthService, event: EventEmitter, mutex: MutexService, server: ServerService);
    createAdmin(req: Request, res: Response, input: CreateUserInput): Promise<void>;
}
export {};
//# sourceMappingURL=controller.d.ts.map