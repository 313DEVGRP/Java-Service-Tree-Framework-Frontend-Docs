import { CopilotChatOptions } from '../types';
import { WorkflowNode } from './node';
import type { WorkflowGraphInstances } from './types';
export declare enum GraphExecutorState {
    EnterNode = "EnterNode",
    EmitContent = "EmitContent",
    EmitAttachment = "EmitAttachment",
    ExitNode = "ExitNode"
}
export type GraphExecutorStatus = {
    status: GraphExecutorState;
} & ({
    status: GraphExecutorState.EnterNode;
    node: WorkflowNode;
} | {
    status: GraphExecutorState.EmitContent;
    content: string;
} | {
    status: GraphExecutorState.EmitAttachment;
    attachment: string;
} | {
    status: GraphExecutorState.ExitNode;
    node: WorkflowNode;
});
export declare class WorkflowGraphExecutor {
    private readonly logger;
    private readonly rootNode;
    constructor(workflow: WorkflowGraphInstances);
    runGraph(params: Record<string, string>, options?: CopilotChatOptions): AsyncIterable<GraphExecutorStatus>;
}
//# sourceMappingURL=workflow.d.ts.map