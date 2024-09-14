import { defineStartupConfig } from '../config';
defineStartupConfig('websocket', {
    // see: https://socket.io/docs/v4/server-options/#maxhttpbuffersize
    transports: ['websocket'],
    maxHttpBufferSize: 1e8, // 100 MB
    requireAuthentication: true,
});
//# sourceMappingURL=config.js.map