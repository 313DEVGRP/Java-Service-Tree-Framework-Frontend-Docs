import { QuotaType } from '../../core/quota/types';
export class OldUserFeature1702620653283 {
    // do the migration
    static async up(db) {
        await db.$transaction(async (tx) => {
            const latestFreePlan = await tx.feature.findFirstOrThrow({
                where: { feature: QuotaType.FreePlanV1 },
                orderBy: { version: 'desc' },
                select: { id: true },
            });
            // find all users that don't have any features
            const userIds = await db.user.findMany({
                where: { NOT: { features: { some: { NOT: { id: { gt: 0 } } } } } },
                select: { id: true },
            });
            await tx.userFeature.createMany({
                data: userIds.map(({ id: userId }) => ({
                    userId,
                    featureId: latestFreePlan.id,
                    reason: 'old user feature migration',
                    activated: true,
                })),
            });
        });
    }
    // revert the migration
    // WARN: this will drop all user features
    static async down(db) {
        await db.userFeature.deleteMany({});
    }
}
//# sourceMappingURL=1702620653283-old-user-feature.js.map