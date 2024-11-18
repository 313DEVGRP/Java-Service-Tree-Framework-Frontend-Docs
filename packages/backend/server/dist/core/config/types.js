var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { DeploymentType } from '../../fundamentals';
export var ServerFeature;
(function (ServerFeature) {
    ServerFeature["Copilot"] = "copilot";
    ServerFeature["Payment"] = "payment";
    ServerFeature["OAuth"] = "oauth";
})(ServerFeature || (ServerFeature = {}));
registerEnumType(ServerFeature, {
    name: 'ServerFeature',
});
registerEnumType(DeploymentType, {
    name: 'ServerDeploymentType',
});
let ServerConfigType = class ServerConfigType {
};
__decorate([
    Field({
        description: 'server identical name could be shown as badge on user interface',
    }),
    __metadata("design:type", String)
], ServerConfigType.prototype, "name", void 0);
__decorate([
    Field({ description: 'server version' }),
    __metadata("design:type", String)
], ServerConfigType.prototype, "version", void 0);
__decorate([
    Field({ description: 'server base url' }),
    __metadata("design:type", String)
], ServerConfigType.prototype, "baseUrl", void 0);
__decorate([
    Field(() => DeploymentType, { description: 'server type' }),
    __metadata("design:type", String)
], ServerConfigType.prototype, "type", void 0);
__decorate([
    Field({ description: 'server flavor', deprecationReason: 'use `features`' }),
    __metadata("design:type", String)
], ServerConfigType.prototype, "flavor", void 0);
__decorate([
    Field(() => [ServerFeature], { description: 'enabled server features' }),
    __metadata("design:type", Array)
], ServerConfigType.prototype, "features", void 0);
__decorate([
    Field({ description: 'enable telemetry' }),
    __metadata("design:type", Boolean)
], ServerConfigType.prototype, "enableTelemetry", void 0);
ServerConfigType = __decorate([
    ObjectType()
], ServerConfigType);
export { ServerConfigType };
//# sourceMappingURL=types.js.map