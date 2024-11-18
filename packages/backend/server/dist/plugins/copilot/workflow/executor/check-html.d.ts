import { WorkflowNodeData, WorkflowParams } from '../types';
import { NodeExecuteResult, NodeExecutorType } from './types';
import { AutoRegisteredWorkflowExecutor } from './utils';
export declare class CopilotCheckHtmlExecutor extends AutoRegisteredWorkflowExecutor {
    private readonly html;
    private initExecutor;
    get type(): NodeExecutorType;
    private checkHtml;
    next(data: WorkflowNodeData, params: WorkflowParams): AsyncIterable<NodeExecuteResult>;
}
//# sourceMappingURL=check-html.d.ts.map