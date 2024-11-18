var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CopilotWorkflowService_1;
import { Injectable, Logger } from '@nestjs/common';
import { WorkflowGraphList } from './graph';
import { WorkflowNode } from './node';
import { WorkflowGraphExecutor } from './workflow';
let CopilotWorkflowService = CopilotWorkflowService_1 = class CopilotWorkflowService {
    constructor() {
        this.logger = new Logger(CopilotWorkflowService_1.name);
    }
    initWorkflow(graph) {
        const workflow = new Map();
        for (const nodeData of graph.graph) {
            const { edges: _, ...data } = nodeData;
            const node = new WorkflowNode(graph, data);
            workflow.set(node.id, node);
        }
        // add edges
        for (const nodeData of graph.graph) {
            const node = workflow.get(nodeData.id);
            if (!node) {
                this.logger.error(`Failed to init workflow ${name}: node ${nodeData.id} not found`);
                throw new Error(`Node ${nodeData.id} not found`);
            }
            for (const edgeId of nodeData.edges) {
                const edge = workflow.get(edgeId);
                if (!edge) {
                    this.logger.error(`Failed to init workflow ${name}: edge ${edgeId} not found in node ${nodeData.id}`);
                    throw new Error(`Edge ${edgeId} not found`);
                }
                node.addEdge(edge);
            }
        }
        return workflow;
    }
    // TODO(@darkskygit): get workflow from database
    async getWorkflow(graphName) {
        const graph = WorkflowGraphList.find(g => g.name === graphName);
        if (!graph) {
            throw new Error(`Graph ${graphName} not found`);
        }
        return this.initWorkflow(graph);
    }
    async *runGraph(params, graphName, options) {
        const workflowGraph = await this.getWorkflow(graphName);
        const executor = new WorkflowGraphExecutor(workflowGraph);
        for await (const result of executor.runGraph(params, options)) {
            yield result;
        }
    }
};
CopilotWorkflowService = CopilotWorkflowService_1 = __decorate([
    Injectable()
], CopilotWorkflowService);
export { CopilotWorkflowService };
//# sourceMappingURL=service.js.map