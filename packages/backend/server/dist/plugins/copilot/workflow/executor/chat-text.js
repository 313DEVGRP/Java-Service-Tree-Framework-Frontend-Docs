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
import { PromptService } from '../../prompt';
import { CopilotProviderService } from '../../providers';
import { WorkflowNodeType } from '../types';
import { NodeExecuteState, NodeExecutorType } from './types';
import { AutoRegisteredWorkflowExecutor } from './utils';
let CopilotChatTextExecutor = class CopilotChatTextExecutor extends AutoRegisteredWorkflowExecutor {
    constructor(promptService, providerService) {
        super();
        this.promptService = promptService;
        this.providerService = providerService;
    }
    async initExecutor(data) {
        if (data.nodeType !== WorkflowNodeType.Basic) {
            throw new Error(`Executor ${this.type} not support ${data.nodeType} node`);
        }
        if (!data.promptName) {
            throw new Error(`Prompt name not found when running workflow node ${data.name}`);
        }
        const prompt = await this.promptService.get(data.promptName);
        if (!prompt) {
            throw new Error(`Prompt ${data.promptName} not found when running workflow node ${data.name}`);
        }
        const provider = await this.providerService.getProviderByModel(prompt.model);
        if (provider && 'generateText' in provider) {
            return [data, prompt, provider];
        }
        throw new Error(`Provider not found for model ${prompt.model} when running workflow node ${data.name}`);
    }
    get type() {
        return NodeExecutorType.ChatText;
    }
    async *next(data, params, options) {
        const [{ paramKey, paramToucher, id }, prompt, provider] = await this.initExecutor(data);
        const finalMessage = prompt.finish(params);
        const config = { ...prompt.config, ...options };
        if (paramKey) {
            // update params with custom key
            const result = {
                [paramKey]: await provider.generateText(finalMessage, prompt.model, config),
            };
            yield {
                type: NodeExecuteState.Params,
                params: paramToucher?.(result) ?? result,
            };
        }
        else {
            for await (const content of provider.generateTextStream(finalMessage, prompt.model, config)) {
                yield { type: NodeExecuteState.Content, nodeId: id, content };
            }
        }
    }
};
CopilotChatTextExecutor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PromptService,
        CopilotProviderService])
], CopilotChatTextExecutor);
export { CopilotChatTextExecutor };
//# sourceMappingURL=chat-text.js.map