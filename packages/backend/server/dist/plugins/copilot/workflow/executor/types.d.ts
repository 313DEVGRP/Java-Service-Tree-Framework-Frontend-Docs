import { CopilotChatOptions } from '../../types';
import type { WorkflowNode } from '../node';
import { WorkflowNodeData, WorkflowParams } from '../types';
export declare enum NodeExecutorType {
    ChatText = "ChatText",
    ChatImage = "ChatImage",
    CheckJson = "CheckJson",
    CheckHtml = "CheckHtml"
}
export declare enum NodeExecuteState {
    StartRun = 0,
    EndRun = 1,
    Params = 2,
    Content = 3,
    Attachment = 4
}
export type NodeExecuteResult = {
    type: NodeExecuteState.StartRun;
    nodeId: string;
} | {
    type: NodeExecuteState.EndRun;
    nextNode?: WorkflowNode;
} | {
    type: NodeExecuteState.Params;
    params: WorkflowParams;
} | {
    type: NodeExecuteState.Content;
    nodeId: string;
    content: string;
} | {
    type: NodeExecuteState.Attachment;
    nodeId: string;
    attachment: string;
};
export declare abstract class NodeExecutor {
    abstract get type(): NodeExecutorType;
    abstract next(data: WorkflowNodeData, params: WorkflowParams, options?: CopilotChatOptions): AsyncIterable<NodeExecuteResult>;
}
//# sourceMappingURL=types.d.ts.map