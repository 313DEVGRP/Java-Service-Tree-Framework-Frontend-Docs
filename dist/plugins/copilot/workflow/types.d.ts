import type { NodeExecutorType } from './executor';
import type { WorkflowNode } from './node';
export declare enum WorkflowNodeType {
    Basic = "basic",
    Decision = "decision",
    Nope = "nope"
}
export type WorkflowNodeData = {
    id: string;
    name: string;
} & ({
    nodeType: WorkflowNodeType.Basic;
    type: NodeExecutorType;
    promptName?: string;
    paramKey?: string;
    paramToucher?: (params: WorkflowParams) => WorkflowParams;
} | {
    nodeType: WorkflowNodeType.Decision;
    condition: ((nodeIds: string[], params: WorkflowNodeState) => string) | string;
} | {
    nodeType: WorkflowNodeType.Nope;
});
export type WorkflowGraphInstances = Map<string, WorkflowNode>;
export type WorkflowGraphDefinition = Array<WorkflowNodeData & {
    edges: string[];
}>;
export type WorkflowGraph = {
    name: string;
    modified?: boolean;
    graph: WorkflowGraphDefinition;
};
export type WorkflowGraphs = Array<WorkflowGraph>;
export type WorkflowParams = Record<string, string | string[] | Record<string, any>>;
export type WorkflowNodeState = Record<string, string>;
//# sourceMappingURL=types.d.ts.map