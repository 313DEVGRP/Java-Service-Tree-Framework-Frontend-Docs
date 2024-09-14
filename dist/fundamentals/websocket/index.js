var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import './config';
import { Module, } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Config } from '../config';
export const SocketIoAdapterImpl = Symbol('SocketIoAdapterImpl');
export class SocketIoAdapter extends IoAdapter {
    constructor(app) {
        super(app);
        this.app = app;
    }
    createIOServer(port, options) {
        const config = this.app.get(WEBSOCKET_OPTIONS);
        return super.createIOServer(port, { ...config, ...options });
    }
}
const SocketIoAdapterImplProvider = {
    provide: SocketIoAdapterImpl,
    useValue: SocketIoAdapter,
};
export const WEBSOCKET_OPTIONS = Symbol('WEBSOCKET_OPTIONS');
export const websocketOptionsProvider = {
    provide: WEBSOCKET_OPTIONS,
    useFactory: (config) => {
        return config.websocket;
    },
    inject: [Config],
};
let WebSocketModule = class WebSocketModule {
};
WebSocketModule = __decorate([
    Module({
        providers: [SocketIoAdapterImplProvider, websocketOptionsProvider],
        exports: [SocketIoAdapterImplProvider, websocketOptionsProvider],
    })
], WebSocketModule);
export { WebSocketModule };
//# sourceMappingURL=index.js.map