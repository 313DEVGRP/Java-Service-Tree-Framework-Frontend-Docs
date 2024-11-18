import type { ArgumentsHost, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';
export declare function getRequestResponseFromHost(host: ArgumentsHost): {
    req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    res: import("express-serve-static-core").Response<any, Record<string, any>, number> | undefined;
} | {
    req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    res?: undefined;
};
export declare function getRequestFromHost(host: ArgumentsHost): Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare function getRequestResponseFromContext(ctx: ExecutionContext): {
    req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    res: import("express-serve-static-core").Response<any, Record<string, any>, number> | undefined;
} | {
    req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    res?: undefined;
};
/**
 * simple patch for request not protected by `cookie-parser`
 * only take effect if `req.cookies` is not defined
 */
export declare function parseCookies(req: Request): void;
//# sourceMappingURL=request.d.ts.map