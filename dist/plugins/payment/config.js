import { defineRuntimeConfig, defineStartupConfig, } from '../../fundamentals/config';
defineStartupConfig('plugins.payment', {});
defineRuntimeConfig('plugins.payment', {
    showLifetimePrice: {
        desc: 'Whether enable lifetime price and allow user to pay for it.',
        default: false,
    },
});
//# sourceMappingURL=config.js.map