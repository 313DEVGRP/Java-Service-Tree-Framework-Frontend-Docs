import { ArgumentsHost, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { BaseWsExceptionFilter } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { UserFriendlyError } from '../error';
export declare function mapAnyError(error: any): UserFriendlyError;
export declare class GlobalExceptionFilter extends BaseExceptionFilter {
    logger: Logger;
    catch(exception: Error, host: ArgumentsHost): void;
}
export declare class GlobalWsExceptionFilter extends BaseWsExceptionFilter {
    handleError(client: Socket, exception: any): void;
}
export declare const GatewayErrorWrapper: (event: string) => MethodDecorator;
export declare function mapSseError(originalError: any): import("rxjs").Observable<{
    type: "error";
    data: {
        status: number;
        code: string;
        type: string;
        name: string;
        message: string;
        data: any;
    };
}>;
//# sourceMappingURL=exception.d.ts.map