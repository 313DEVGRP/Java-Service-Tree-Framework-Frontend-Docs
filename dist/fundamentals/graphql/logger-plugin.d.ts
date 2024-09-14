import { ApolloServerPlugin, GraphQLRequestContext, GraphQLRequestListener } from '@apollo/server';
export interface RequestContext {
    req: Express.Request & {
        res: Express.Response;
    };
}
export declare class GQLLoggerPlugin implements ApolloServerPlugin {
    requestDidStart(ctx: GraphQLRequestContext<RequestContext>): Promise<GraphQLRequestListener<GraphQLRequestContext<RequestContext>>>;
}
//# sourceMappingURL=logger-plugin.d.ts.map