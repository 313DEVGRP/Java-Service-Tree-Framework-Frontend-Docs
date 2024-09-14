import { GatewayMetadata } from '@nestjs/websockets';
import { ModuleConfig } from '../config';
declare module '../config' {
    interface AppConfig {
        websocket: ModuleConfig<GatewayMetadata & {
            requireAuthentication?: boolean;
        }>;
    }
}
//# sourceMappingURL=config.d.ts.map