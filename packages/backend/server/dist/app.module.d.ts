import { DynamicModule } from '@nestjs/common';
import { AFFiNEConfig } from './fundamentals/config';
import { ErrorModule } from './fundamentals/error';
import { EventModule } from './fundamentals/event';
import { MetricsModule } from './fundamentals/metrics';
export declare const FunctionalityModules: (DynamicModule | typeof EventModule | typeof MetricsModule | typeof ErrorModule)[];
export declare class AppModuleBuilder {
    private readonly config;
    private readonly modules;
    constructor(config: AFFiNEConfig);
    use(...modules: AFFiNEModule[]): this;
    useIf(predicator: (config: AFFiNEConfig) => boolean, ...modules: AFFiNEModule[]): this;
    compile(): {
        new (): {};
    };
}
export declare const AppModule: {
    new (): {};
};
//# sourceMappingURL=app.module.d.ts.map