import { Logger } from '@nestjs/common';
import { NodeExecuteState } from './executor';
import { WorkflowNodeType } from './types';
export var GraphExecutorState;
(function (GraphExecutorState) {
    GraphExecutorState["EnterNode"] = "EnterNode";
    GraphExecutorState["EmitContent"] = "EmitContent";
    GraphExecutorState["EmitAttachment"] = "EmitAttachment";
    GraphExecutorState["ExitNode"] = "ExitNode";
})(GraphExecutorState || (GraphExecutorState = {}));
export class WorkflowGraphExecutor {
    constructor(workflow) {
        this.logger = new Logger(WorkflowGraphExecutor.name);
        const startNode = workflow.get('start');
        if (!startNode) {
            throw new Error(`No start node found in graph`);
        }
        this.rootNode = startNode;
    }
    async *runGraph(params, options) {
        let currentNode = this.rootNode;
        const lastParams = { ...params };
        while (currentNode) {
            let result = '';
            let nextNode;
            for await (const ret of currentNode.next(lastParams, options)) {
                if (ret.type === NodeExecuteState.StartRun) {
                    yield { status: GraphExecutorState.EnterNode, node: currentNode };
                }
                else if (ret.type === NodeExecuteState.EndRun) {
                    yield { status: GraphExecutorState.ExitNode, node: currentNode };
                    nextNode = ret.nextNode;
                    break;
                }
                else if (ret.type === NodeExecuteState.Params) {
                    Object.assign(lastParams, ret.params);
                    if (currentNode.config.nodeType === WorkflowNodeType.Basic) {
                        const { type, promptName } = currentNode.config;
                        this.logger.verbose(`[${currentNode.name}][${type}][${promptName}]: update params - '${JSON.stringify(ret.params)}'`);
                    }
                }
                else if (ret.type === NodeExecuteState.Content) {
                    if (!currentNode.hasEdges) {
                        // pass through content as a stream response if node is end node
                        yield {
                            status: GraphExecutorState.EmitContent,
                            content: ret.content,
                        };
                    }
                    else {
                        result += ret.content;
                    }
                }
                else if (ret.type === NodeExecuteState.Attachment &&
                    !currentNode.hasEdges) {
                    // pass through content as a stream response if node is end node
                    yield {
                        status: GraphExecutorState.EmitAttachment,
                        attachment: ret.attachment,
                    };
                }
            }
            if (currentNode.config.nodeType === WorkflowNodeType.Basic && result) {
                const { type, promptName } = currentNode.config;
                this.logger.verbose(`[${currentNode.name}][${type}][${promptName}]: update content - '${lastParams.content}' -> '${result}'`);
            }
            currentNode = nextNode;
            if (result && lastParams.content !== result) {
                lastParams.content = result;
            }
        }
    }
}
//# sourceMappingURL=workflow.js.map