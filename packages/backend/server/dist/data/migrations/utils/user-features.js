import { Features } from '../../../core/features';
// upgrade features from lower version to higher version
export async function upsertFeature(db, feature) {
    const hasEqualOrGreaterVersion = (await db.feature.count({
        where: {
            feature: feature.feature,
            version: {
                gte: feature.version,
            },
        },
    })) > 0;
    // will not update exists version
    if (!hasEqualOrGreaterVersion) {
        await db.feature.create({
            data: {
                feature: feature.feature,
                type: feature.type,
                version: feature.version,
                configs: feature.configs,
            },
        });
    }
}
export async function upsertLatestFeatureVersion(db, type) {
    const feature = Features.filter(f => f.feature === type);
    feature.sort((a, b) => b.version - a.version);
    const latestFeature = feature[0];
    await upsertFeature(db, latestFeature);
}
//# sourceMappingURL=user-features.js.map