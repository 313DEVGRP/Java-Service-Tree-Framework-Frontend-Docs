import { NodeExecutorType } from '../executor';
import { WorkflowNodeType } from '../types';
export const sketch = {
    name: 'image-sketch',
    graph: [
        {
            id: 'start',
            name: 'Start: extract edge',
            nodeType: WorkflowNodeType.Basic,
            type: NodeExecutorType.ChatImage,
            promptName: 'debug:action:fal-teed',
            paramKey: 'controlnets',
            paramToucher: params => {
                if (Array.isArray(params.controlnets)) {
                    const controlnets = params.controlnets.map(image_url => ({
                        path: 'diffusers/controlnet-canny-sdxl-1.0',
                        image_url,
                        start_percentage: 0.1,
                        end_percentage: 0.6,
                    }));
                    return { controlnets };
                }
                else {
                    return {};
                }
            },
            edges: ['step2'],
        },
        {
            id: 'step2',
            name: 'Step 2: generate tags',
            nodeType: WorkflowNodeType.Basic,
            type: NodeExecutorType.ChatText,
            promptName: 'workflow:image-sketch:step2',
            paramKey: 'tags',
            edges: ['step3'],
        },
        {
            id: 'step3',
            name: 'Step3: generate image',
            nodeType: WorkflowNodeType.Basic,
            type: NodeExecutorType.ChatImage,
            promptName: 'workflow:image-sketch:step3',
            edges: [],
        },
    ],
};
export const clay = {
    name: 'image-clay',
    graph: [
        {
            id: 'start',
            name: 'Start: extract edge',
            nodeType: WorkflowNodeType.Basic,
            type: NodeExecutorType.ChatImage,
            promptName: 'debug:action:fal-teed',
            paramKey: 'controlnets',
            paramToucher: params => {
                if (Array.isArray(params.controlnets)) {
                    const controlnets = params.controlnets.map(image_url => ({
                        path: 'diffusers/controlnet-canny-sdxl-1.0',
                        image_url,
                        start_percentage: 0.1,
                        end_percentage: 0.6,
                    }));
                    return { controlnets };
                }
                else {
                    return {};
                }
            },
            edges: ['step2'],
        },
        {
            id: 'step2',
            name: 'Step 2: generate tags',
            nodeType: WorkflowNodeType.Basic,
            type: NodeExecutorType.ChatText,
            promptName: 'workflow:image-clay:step2',
            paramKey: 'tags',
            edges: ['step3'],
        },
        {
            id: 'step3',
            name: 'Step3: generate image',
            nodeType: WorkflowNodeType.Basic,
            type: NodeExecutorType.ChatImage,
            promptName: 'workflow:image-clay:step3',
            edges: [],
        },
    ],
};
export const anime = {
    name: 'image-anime',
    graph: [
        {
            id: 'start',
            name: 'Start: extract edge',
            nodeType: WorkflowNodeType.Basic,
            type: NodeExecutorType.ChatImage,
            promptName: 'debug:action:fal-teed',
            paramKey: 'controlnets',
            paramToucher: params => {
                if (Array.isArray(params.controlnets)) {
                    const controlnets = params.controlnets.map(image_url => ({
                        path: 'diffusers/controlnet-canny-sdxl-1.0',
                        image_url,
                        start_percentage: 0.1,
                        end_percentage: 0.6,
                    }));
                    return { controlnets };
                }
                else {
                    return {};
                }
            },
            edges: ['step2'],
        },
        {
            id: 'step2',
            name: 'Step 2: generate tags',
            nodeType: WorkflowNodeType.Basic,
            type: NodeExecutorType.ChatText,
            promptName: 'workflow:image-anime:step2',
            paramKey: 'tags',
            edges: ['step3'],
        },
        {
            id: 'step3',
            name: 'Step3: generate image',
            nodeType: WorkflowNodeType.Basic,
            type: NodeExecutorType.ChatImage,
            promptName: 'workflow:image-anime:step3',
            edges: [],
        },
    ],
};
export const pixel = {
    name: 'image-pixel',
    graph: [
        {
            id: 'start',
            name: 'Start: extract edge',
            nodeType: WorkflowNodeType.Basic,
            type: NodeExecutorType.ChatImage,
            promptName: 'debug:action:fal-teed',
            paramKey: 'controlnets',
            paramToucher: params => {
                if (Array.isArray(params.controlnets)) {
                    const controlnets = params.controlnets.map(image_url => ({
                        path: 'diffusers/controlnet-canny-sdxl-1.0',
                        image_url,
                        start_percentage: 0.1,
                        end_percentage: 0.6,
                    }));
                    return { controlnets };
                }
                else {
                    return {};
                }
            },
            edges: ['step2'],
        },
        {
            id: 'step2',
            name: 'Step 2: generate tags',
            nodeType: WorkflowNodeType.Basic,
            type: NodeExecutorType.ChatText,
            promptName: 'workflow:image-pixel:step2',
            paramKey: 'tags',
            edges: ['step3'],
        },
        {
            id: 'step3',
            name: 'Step3: generate image',
            nodeType: WorkflowNodeType.Basic,
            type: NodeExecutorType.ChatImage,
            promptName: 'workflow:image-pixel:step3',
            edges: [],
        },
    ],
};
//# sourceMappingURL=image-filter.js.map