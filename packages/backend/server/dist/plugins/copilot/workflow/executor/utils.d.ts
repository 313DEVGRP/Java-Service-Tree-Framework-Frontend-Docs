import { OnModuleInit } from '@nestjs/common';
import { NodeExecutor, type NodeExecutorType } from './types';
export declare function getWorkflowExecutor(type: NodeExecutorType): NodeExecutor;
export declare abstract class AutoRegisteredWorkflowExecutor extends NodeExecutor implements OnModuleInit {
    onModuleInit(): void;
    register(): void;
}
//# sourceMappingURL=utils.d.ts.map