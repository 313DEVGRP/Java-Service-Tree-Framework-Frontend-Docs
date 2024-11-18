import { defineRuntimeConfig, defineStartupConfig, } from '../../fundamentals/config';
defineStartupConfig('doc', {
    manager: {
        enableUpdateAutoMerging: true,
        updatePollInterval: 3000,
        maxUpdatesPullCount: 500,
    },
    history: {
        interval: 1000 * 60 * 10 /* 10 mins */,
    },
});
defineRuntimeConfig('doc', {
    experimentalMergeWithYOcto: {
        desc: 'Use `y-octo` to merge updates at the same time when merging using Yjs.',
        default: false,
    },
});
//# sourceMappingURL=config.js.map