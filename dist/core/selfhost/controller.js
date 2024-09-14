var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __addDisposableResource = (this && this.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources = (this && this.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { ActionForbidden, EventEmitter, InternalServerError, MutexService, PasswordRequired, } from '../../fundamentals';
import { AuthService, Public } from '../auth';
import { ServerService } from '../config';
import { UserService } from '../user/service';
let CustomSetupController = class CustomSetupController {
    constructor(user, auth, event, mutex, server) {
        this.user = user;
        this.auth = auth;
        this.event = event;
        this.mutex = mutex;
        this.server = server;
    }
    async createAdmin(req, res, input) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            if (!input.password) {
                throw new PasswordRequired();
            }
            const lock = __addDisposableResource(env_1, await this.mutex.lock('createFirstAdmin'), true);
            if (!lock) {
                throw new InternalServerError();
            }
            if (await this.server.initialized()) {
                throw new ActionForbidden('First user already created');
            }
            const user = await this.user.createUser({
                email: input.email,
                password: input.password,
                registered: true,
            });
            try {
                await this.event.emitAsync('user.admin.created', user);
                await this.auth.setCookie(req, res, user);
                res.send({ id: user.id, email: user.email, name: user.name });
            }
            catch (e) {
                await this.user.deleteUser(user.id);
                throw e;
            }
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            const result_1 = __disposeResources(env_1);
            if (result_1)
                await result_1;
        }
    }
};
__decorate([
    Public(),
    Post('/create-admin-user'),
    __param(0, Req()),
    __param(1, Res()),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CustomSetupController.prototype, "createAdmin", null);
CustomSetupController = __decorate([
    Controller('/api/setup'),
    __metadata("design:paramtypes", [UserService,
        AuthService,
        EventEmitter,
        MutexService,
        ServerService])
], CustomSetupController);
export { CustomSetupController };
//# sourceMappingURL=controller.js.map