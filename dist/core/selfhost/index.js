var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { join } from 'node:path';
import { Injectable, Module, } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { static as serveStatic } from 'express';
import { Config } from '../../fundamentals';
import { AuthModule } from '../auth';
import { ServerConfigModule, ServerService } from '../config';
import { UserModule } from '../user';
import { CustomSetupController } from './controller';
let SetupMiddleware = class SetupMiddleware {
    constructor(server) {
        this.server = server;
        this.use = (req, res, next) => {
            // never throw
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.server
                .initialized()
                .then(initialized => {
                // Redirect to setup page if not initialized
                if (!initialized && req.path !== '/admin/setup') {
                    res.redirect('/admin/setup');
                    return;
                }
                // redirect to admin page if initialized
                if (initialized && req.path === '/admin/setup') {
                    res.redirect('/admin');
                    return;
                }
                next();
            })
                .catch(() => {
                next();
            });
        };
    }
};
SetupMiddleware = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ServerService])
], SetupMiddleware);
export { SetupMiddleware };
let SelfhostModule = class SelfhostModule {
    constructor(config, adapterHost, check) {
        this.config = config;
        this.adapterHost = adapterHost;
        this.check = check;
    }
    onModuleInit() {
        const staticPath = join(this.config.projectRoot, 'static');
        // in command line mode
        if (!this.adapterHost.httpAdapter) {
            return;
        }
        const app = this.adapterHost.httpAdapter.getInstance();
        const basePath = this.config.server.path;
        app.get(basePath + '/admin/index.html', (_req, res) => {
            res.redirect(basePath + '/admin');
        });
        app.use(basePath + '/admin', serveStatic(join(staticPath, 'admin'), {
            redirect: false,
            index: false,
        }));
        app.get([basePath + '/admin', basePath + '/admin/*'], this.check.use, (_req, res) => {
            res.sendFile(join(staticPath, 'admin', 'index.html'));
        });
        app.get(basePath + '/index.html', (_req, res) => {
            res.redirect(basePath);
        });
        app.use(basePath, serveStatic(staticPath, {
            redirect: false,
            index: false,
        }));
        app.get('*', this.check.use, (_req, res) => {
            res.sendFile(join(staticPath, 'index.html'));
        });
    }
};
SelfhostModule = __decorate([
    Module({
        imports: [AuthModule, UserModule, ServerConfigModule],
        providers: [SetupMiddleware],
        controllers: [CustomSetupController],
    }),
    __metadata("design:paramtypes", [Config,
        HttpAdapterHost,
        SetupMiddleware])
], SelfhostModule);
export { SelfhostModule };
//# sourceMappingURL=index.js.map