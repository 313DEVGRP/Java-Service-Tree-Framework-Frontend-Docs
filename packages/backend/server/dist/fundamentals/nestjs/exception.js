var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Catch, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { ThrottlerException } from '@nestjs/throttler';
import { BaseWsExceptionFilter } from '@nestjs/websockets';
import { of } from 'rxjs';
import { InternalServerError, TooManyRequest, UserFriendlyError, } from '../error';
import { metrics } from '../metrics';
export function mapAnyError(error) {
    if (error instanceof UserFriendlyError) {
        return error;
    }
    else if (error instanceof ThrottlerException) {
        return new TooManyRequest();
    }
    else {
        const e = new InternalServerError();
        e.cause = error;
        return e;
    }
}
let GlobalExceptionFilter = class GlobalExceptionFilter extends BaseExceptionFilter {
    constructor() {
        super(...arguments);
        this.logger = new Logger('GlobalExceptionFilter');
    }
    catch(exception, host) {
        const error = mapAnyError(exception);
        // with useGlobalFilters, the context is always HTTP
        if (host.getType() === 'graphql') {
            // let Graphql LoggerPlugin handle it
            // see '../graphql/logger-plugin.ts'
            throw error;
        }
        else {
            error.log('HTTP');
            metrics.controllers.counter('error').add(1, { status: error.status });
            const res = host.switchToHttp().getResponse();
            res.status(error.status).send(error.toJSON());
            return;
        }
    }
};
GlobalExceptionFilter = __decorate([
    Catch()
], GlobalExceptionFilter);
export { GlobalExceptionFilter };
export class GlobalWsExceptionFilter extends BaseWsExceptionFilter {
    // @ts-expect-error satisfies the override
    handleError(client, exception) {
        const error = mapAnyError(exception);
        error.log('Websocket');
        metrics.socketio
            .counter('unhandled_error')
            .add(1, { status: error.status });
        client.emit('error', {
            error: toWebsocketError(error),
        });
    }
}
/**
 * Only exists for websocket error body backward compatibility
 *
 * relay on `code` field instead of `name`
 *
 * @TODO(@forehalo): remove
 */
function toWebsocketError(error) {
    // should be `error.toJSON()` after backward compatibility removed
    return {
        status: error.status,
        code: error.name.toUpperCase(),
        type: error.type.toUpperCase(),
        name: error.name.toUpperCase(),
        message: error.message,
        data: error.data,
    };
}
export const GatewayErrorWrapper = (event) => {
    // @ts-expect-error allow
    return (_target, _key, desc) => {
        const originalMethod = desc.value;
        if (!originalMethod) {
            return desc;
        }
        desc.value = async function (...args) {
            try {
                return await originalMethod.apply(this, args);
            }
            catch (error) {
                const mappedError = mapAnyError(error);
                mappedError.log('Websocket');
                metrics.socketio
                    .counter('error')
                    .add(1, { event, status: mappedError.status });
                return {
                    error: toWebsocketError(mappedError),
                };
            }
        };
        return desc;
    };
};
export function mapSseError(originalError) {
    const error = mapAnyError(originalError);
    error.log('Sse');
    metrics.sse.counter('error').add(1, { status: error.status });
    return of({
        type: 'error',
        data: error.toJSON(),
    });
}
//# sourceMappingURL=exception.js.map