import { PromptService } from '../../prompt';
import { CopilotProviderService } from '../../providers';
import { CopilotChatOptions } from '../../types';
import { WorkflowNodeData } from '../types';
import { NodeExecuteResult, NodeExecutorType } from './types';
import { AutoRegisteredWorkflowExecutor } from './utils';
export declare class CopilotChatTextExecutor extends AutoRegisteredWorkflowExecutor {
    private readonly promptService;
    private readonly providerService;
    constructor(promptService: PromptService, providerService: CopilotProviderService);
    private initExecutor;
    get type(): NodeExecutorType;
    next(data: WorkflowNodeData, params: Record<string, string>, options?: CopilotChatOptions): AsyncIterable<NodeExecuteResult>;
}
//# sourceMappingURL=chat-text.d.ts.map