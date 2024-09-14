import { NestMiddleware, OnModuleInit } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import type { Request, Response } from 'express';
import { Config } from '../../fundamentals';
import { ServerService } from '../config';
export declare class SetupMiddleware implements NestMiddleware {
    private readonly server;
    constructor(server: ServerService);
    use: (req: Request, res: Response, next: (error?: Error | any) => void) => void;
}
export declare class SelfhostModule implements OnModuleInit {
    private readonly config;
    private readonly adapterHost;
    private readonly check;
    constructor(config: Config, adapterHost: HttpAdapterHost, check: SetupMiddleware);
    onModuleInit(): void;
}
//# sourceMappingURL=index.d.ts.map