import { CopilotChatOptions } from '../types';
import { WorkflowNode } from './node';
import type { WorkflowGraph } from './types';
import { type GraphExecutorStatus } from './workflow';
export declare class CopilotWorkflowService {
    private readonly logger;
    initWorkflow(graph: WorkflowGraph): Map<string, WorkflowNode>;
    private getWorkflow;
    runGraph(params: Record<string, string>, graphName: string, options?: CopilotChatOptions): AsyncIterable<GraphExecutorStatus>;
}
//# sourceMappingURL=service.d.ts.map