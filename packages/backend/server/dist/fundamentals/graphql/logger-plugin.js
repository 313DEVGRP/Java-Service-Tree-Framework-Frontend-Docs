var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Plugin } from '@nestjs/apollo';
import { metrics } from '../metrics/metrics';
import { mapAnyError } from '../nestjs';
let GQLLoggerPlugin = class GQLLoggerPlugin {
    requestDidStart(ctx) {
        const res = ctx.contextValue.req.res;
        const operation = ctx.request.operationName;
        metrics.gql.counter('query_counter').add(1, { operation });
        const start = Date.now();
        function endTimer() {
            return Date.now() - start;
        }
        return Promise.resolve({
            willSendResponse: () => {
                const time = endTimer();
                res.setHeader('Server-Timing', `gql;dur=${time};desc="GraphQL"`);
                metrics.gql.histogram('query_duration').record(time, { operation });
                return Promise.resolve();
            },
            didEncounterErrors: ctx => {
                ctx.errors.forEach(gqlErr => {
                    const error = mapAnyError(gqlErr.originalError ? gqlErr.originalError : gqlErr);
                    error.log('GraphQL');
                    metrics.gql
                        .counter('query_error_counter')
                        .add(1, { operation, code: error.status });
                });
                return Promise.resolve();
            },
        });
    }
};
GQLLoggerPlugin = __decorate([
    Plugin()
], GQLLoggerPlugin);
export { GQLLoggerPlugin };
//# sourceMappingURL=logger-plugin.js.map