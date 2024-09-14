import type { Prisma } from '@prisma/client';
import { ModuleConfig } from '../config';
interface PrismaStartupConfiguration extends Prisma.PrismaClientOptions {
    datasourceUrl: string;
}
declare module '../config' {
    interface AppConfig {
        database: ModuleConfig<PrismaStartupConfiguration>;
    }
}
export {};
//# sourceMappingURL=config.d.ts.map