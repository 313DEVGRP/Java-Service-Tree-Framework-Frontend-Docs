import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Logger } from '@nestjs/common';
import Piscina from 'piscina';
import { getWorkflowExecutor, NodeExecuteState } from './executor';
import { WorkflowNodeType } from './types';
export class WorkflowNode {
    constructor(graph, data) {
        this.data = data;
        this.logger = new Logger(WorkflowNode.name);
        this.edges = [];
        this.parents = [];
        this.executor = null;
        this.condition = null;
        if (data.nodeType === WorkflowNodeType.Basic) {
            this.executor = getWorkflowExecutor(data.type);
        }
        else if (data.nodeType === WorkflowNodeType.Decision) {
            // prepare decision condition, reused in each run
            const iife = `return (${data.condition})(nodeIds, params)`;
            // only eval the condition in worker if graph has been modified
            if (graph.modified) {
                const worker = new Piscina({
                    filename: path.resolve(dirname(fileURLToPath(import.meta.url)), 'worker.mjs'),
                    minThreads: 2,
                    // empty envs from parent process
                    env: {},
                    argv: [],
                    execArgv: [],
                });
                this.condition = (params) => worker.run({
                    iife,
                    nodeIds: this.edges.map(node => node.id),
                    params,
                });
            }
            else {
                const func = typeof data.condition === 'function'
                    ? data.condition
                    : new Function('nodeIds', 'params', iife);
                this.condition = (params) => func(this.edges.map(node => node.id), params);
            }
        }
    }
    get id() {
        return this.data.id;
    }
    get name() {
        return this.data.name;
    }
    get config() {
        return Object.assign({}, this.data);
    }
    get parent() {
        return this.parents;
    }
    // if is the end of the workflow, pass through the content to stream response
    get hasEdges() {
        return !!this.edges.length;
    }
    set parent(node) {
        if (!this.parents.includes(node)) {
            this.parents.push(node);
        }
    }
    addEdge(node) {
        if (this.data.nodeType === WorkflowNodeType.Basic) {
            if (this.edges.length > 0) {
                throw new Error(`Basic block can only have one edge`);
            }
        }
        else if (this.data.nodeType === WorkflowNodeType.Decision &&
            !this.data.condition) {
            throw new Error(`Decision block must have a condition`);
        }
        else if (this.data.nodeType === WorkflowNodeType.Nope) {
            throw new Error(`Nope block cannot have edges`);
        }
        node.parent = this;
        this.edges.push(node);
        return this.edges.length;
    }
    async evaluateCondition(params) {
        // early return if no edges
        if (this.edges.length === 0)
            return undefined;
        try {
            const result = await this.condition?.(params);
            if (typeof result === 'string')
                return result;
            // choose default edge if condition falsy
            return this.edges[0].id;
        }
        catch (e) {
            this.logger.error(`Failed to evaluate condition for node ${this.name}: ${e}`);
            throw e;
        }
    }
    async *next(params, options) {
        yield { type: NodeExecuteState.StartRun, nodeId: this.id };
        // choose next node in graph
        let nextNode = this.edges[0];
        if (this.data.nodeType === WorkflowNodeType.Decision) {
            const nextNodeId = await this.evaluateCondition(params);
            // return empty to choose default edge
            if (nextNodeId) {
                nextNode = this.edges.find(node => node.id === nextNodeId);
                if (!nextNode) {
                    throw new Error(`No edge found for condition ${this.data.condition}`);
                }
            }
        }
        else if (this.data.nodeType === WorkflowNodeType.Basic) {
            if (!this.executor) {
                throw new Error(`Node ${this.name} not initialized`);
            }
            yield* this.executor.next(this.data, params, options);
        }
        else {
            yield {
                type: NodeExecuteState.Content,
                nodeId: this.id,
                content: params.content,
            };
        }
        yield { type: NodeExecuteState.EndRun, nextNode };
    }
}
//# sourceMappingURL=node.js.map