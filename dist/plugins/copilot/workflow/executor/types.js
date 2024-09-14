export var NodeExecutorType;
(function (NodeExecutorType) {
    NodeExecutorType["ChatText"] = "ChatText";
    NodeExecutorType["ChatImage"] = "ChatImage";
    NodeExecutorType["CheckJson"] = "CheckJson";
    NodeExecutorType["CheckHtml"] = "CheckHtml";
})(NodeExecutorType || (NodeExecutorType = {}));
export var NodeExecuteState;
(function (NodeExecuteState) {
    NodeExecuteState[NodeExecuteState["StartRun"] = 0] = "StartRun";
    NodeExecuteState[NodeExecuteState["EndRun"] = 1] = "EndRun";
    NodeExecuteState[NodeExecuteState["Params"] = 2] = "Params";
    NodeExecuteState[NodeExecuteState["Content"] = 3] = "Content";
    NodeExecuteState[NodeExecuteState["Attachment"] = 4] = "Attachment";
})(NodeExecuteState || (NodeExecuteState = {}));
export class NodeExecutor {
}
//# sourceMappingURL=types.js.map