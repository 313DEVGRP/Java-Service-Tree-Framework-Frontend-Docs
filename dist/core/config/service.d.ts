import { PrismaClient } from '@prisma/client';
export declare class ServerService {
    private readonly db;
    private _initialized;
    constructor(db: PrismaClient);
    initialized(): Promise<boolean>;
}
//# sourceMappingURL=service.d.ts.map