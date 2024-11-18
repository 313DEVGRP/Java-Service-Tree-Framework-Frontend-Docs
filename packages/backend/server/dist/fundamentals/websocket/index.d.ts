import './config';
import { FactoryProvider, INestApplicationContext } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server } from 'socket.io';
export declare const SocketIoAdapterImpl: unique symbol;
export declare class SocketIoAdapter extends IoAdapter {
    protected readonly app: INestApplicationContext;
    constructor(app: INestApplicationContext);
    createIOServer(port: number, options?: any): Server;
}
export declare const WEBSOCKET_OPTIONS: unique symbol;
export declare const websocketOptionsProvider: FactoryProvider;
export declare class WebSocketModule {
}
//# sourceMappingURL=index.d.ts.map