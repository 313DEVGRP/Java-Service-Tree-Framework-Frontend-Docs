import { ServerFeature } from './types';
export const ENABLED_FEATURES = new Set();
export function ADD_ENABLED_FEATURES(feature) {
    ENABLED_FEATURES.add(feature);
}
export { ServerFeature };
//# sourceMappingURL=server-feature.js.map