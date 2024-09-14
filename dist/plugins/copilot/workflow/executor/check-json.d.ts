import { WorkflowNodeData, WorkflowParams } from '../types';
import { NodeExecuteResult, NodeExecutorType } from './types';
import { AutoRegisteredWorkflowExecutor } from './utils';
export declare class CopilotCheckJsonExecutor extends AutoRegisteredWorkflowExecutor {
    constructor();
    private initExecutor;
    get type(): NodeExecutorType;
    private checkJson;
    next(data: WorkflowNodeData, params: WorkflowParams): AsyncIterable<NodeExecuteResult>;
}
//# sourceMappingURL=check-json.d.ts.map