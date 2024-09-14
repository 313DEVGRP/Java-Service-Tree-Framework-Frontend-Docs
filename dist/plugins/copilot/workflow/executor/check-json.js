var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { WorkflowNodeType } from '../types';
import { NodeExecuteState, NodeExecutorType } from './types';
import { AutoRegisteredWorkflowExecutor } from './utils';
let CopilotCheckJsonExecutor = class CopilotCheckJsonExecutor extends AutoRegisteredWorkflowExecutor {
    constructor() {
        super();
    }
    async initExecutor(data) {
        if (data.nodeType !== WorkflowNodeType.Basic) {
            throw new Error(`Executor ${this.type} not support ${data.nodeType} node`);
        }
        return data;
    }
    get type() {
        return NodeExecutorType.CheckJson;
    }
    checkJson(content) {
        try {
            if (content && typeof content === 'string') {
                JSON.parse(content);
                return true;
            }
            return false;
        }
        catch (e) {
            return false;
        }
    }
    async *next(data, params) {
        const { paramKey, id } = await this.initExecutor(data);
        const ret = String(this.checkJson(params.content));
        if (paramKey) {
            yield { type: NodeExecuteState.Params, params: { [paramKey]: ret } };
        }
        else {
            yield { type: NodeExecuteState.Content, nodeId: id, content: ret };
        }
    }
};
CopilotCheckJsonExecutor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], CopilotCheckJsonExecutor);
export { CopilotCheckJsonExecutor };
//# sourceMappingURL=check-json.js.map