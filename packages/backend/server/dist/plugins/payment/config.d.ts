import type { Stripe } from 'stripe';
import { ModuleConfig } from '../../fundamentals/config';
export interface PaymentStartupConfig {
    stripe?: {
        keys: {
            APIKey: string;
            webhookKey: string;
        };
    } & Stripe.StripeConfig;
}
export interface PaymentRuntimeConfig {
    showLifetimePrice: boolean;
}
declare module '../config' {
    interface PluginsConfig {
        payment: ModuleConfig<PaymentStartupConfig, PaymentRuntimeConfig>;
    }
}
//# sourceMappingURL=config.d.ts.map