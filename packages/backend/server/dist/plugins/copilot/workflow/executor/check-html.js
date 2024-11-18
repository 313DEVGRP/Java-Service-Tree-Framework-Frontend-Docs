var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
import { XMLValidator } from 'fast-xml-parser';
import { HtmlValidate } from 'html-validate/node';
import { WorkflowNodeType } from '../types';
import { NodeExecuteState, NodeExecutorType } from './types';
import { AutoRegisteredWorkflowExecutor } from './utils';
let CopilotCheckHtmlExecutor = class CopilotCheckHtmlExecutor extends AutoRegisteredWorkflowExecutor {
    constructor() {
        super(...arguments);
        this.html = new HtmlValidate();
    }
    async initExecutor(data) {
        if (data.nodeType !== WorkflowNodeType.Basic) {
            throw new Error(`Executor ${this.type} not support ${data.nodeType} node`);
        }
        return data;
    }
    get type() {
        return NodeExecutorType.CheckHtml;
    }
    async checkHtml(content, strict) {
        try {
            if (content && typeof content === 'string') {
                const ret = XMLValidator.validate(content);
                if (ret === true) {
                    if (strict) {
                        const report = await this.html.validateString(content, {
                            extends: ['html-validate:standard'],
                        });
                        return report.valid;
                    }
                    return true;
                }
            }
            return false;
        }
        catch (e) {
            return false;
        }
    }
    async *next(data, params) {
        const { paramKey, id } = await this.initExecutor(data);
        const ret = String(await this.checkHtml(params.content, !!params.strict));
        if (paramKey) {
            yield { type: NodeExecuteState.Params, params: { [paramKey]: ret } };
        }
        else {
            yield { type: NodeExecuteState.Content, nodeId: id, content: ret };
        }
    }
};
CopilotCheckHtmlExecutor = __decorate([
    Injectable()
], CopilotCheckHtmlExecutor);
export { CopilotCheckHtmlExecutor };
//# sourceMappingURL=check-html.js.map