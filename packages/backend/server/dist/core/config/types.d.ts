import { DeploymentType } from '../../fundamentals';
export declare enum ServerFeature {
    Copilot = "copilot",
    Payment = "payment",
    OAuth = "oauth"
}
export declare class ServerConfigType {
    name: string;
    version: string;
    baseUrl: string;
    type: DeploymentType;
    /**
     * @deprecated
     */
    flavor: string;
    features: ServerFeature[];
    enableTelemetry: boolean;
}
//# sourceMappingURL=types.d.ts.map