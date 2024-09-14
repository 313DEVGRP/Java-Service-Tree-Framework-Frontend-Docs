import { CopilotChatOptions } from '../types';
import type { NodeExecuteResult } from './executor';
import type { WorkflowGraph, WorkflowNodeData, WorkflowNodeState } from './types';
export declare class WorkflowNode {
    private readonly data;
    private readonly logger;
    private readonly edges;
    private readonly parents;
    private readonly executor;
    private readonly condition;
    constructor(graph: WorkflowGraph, data: WorkflowNodeData);
    get id(): string;
    get name(): string;
    get config(): WorkflowNodeData;
    get parent(): WorkflowNode[];
    get hasEdges(): boolean;
    private set parent(value);
    addEdge(node: WorkflowNode): number;
    private evaluateCondition;
    next(params: WorkflowNodeState, options?: CopilotChatOptions): AsyncIterable<NodeExecuteResult>;
}
//# sourceMappingURL=node.d.ts.map