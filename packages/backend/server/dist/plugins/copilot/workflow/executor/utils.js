import { Logger } from '@nestjs/common';
import { NodeExecutor } from './types';
const WORKFLOW_EXECUTOR = new Map();
function registerWorkflowExecutor(e) {
    const existing = WORKFLOW_EXECUTOR.get(e.type);
    if (existing && existing === e)
        return false;
    WORKFLOW_EXECUTOR.set(e.type, e);
    return true;
}
export function getWorkflowExecutor(type) {
    const executor = WORKFLOW_EXECUTOR.get(type);
    if (!executor) {
        throw new Error(`Executor ${type} not defined`);
    }
    return executor;
}
export class AutoRegisteredWorkflowExecutor extends NodeExecutor {
    onModuleInit() {
        this.register();
    }
    register() {
        if (registerWorkflowExecutor(this)) {
            new Logger(`CopilotWorkflowExecutor:${this.type}`).log('Workflow executor registered.');
        }
    }
}
//# sourceMappingURL=utils.js.map