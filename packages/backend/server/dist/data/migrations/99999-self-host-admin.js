import { FeatureManagementService } from '../../core/features';
import { Config } from '../../fundamentals';
export class SelfHostAdmin1 {
    // do the migration
    static async up(db, ref) {
        const config = ref.get(Config, { strict: false });
        if (config.isSelfhosted) {
            const feature = ref.get(FeatureManagementService, { strict: false });
            const firstUser = await db.user.findFirst({
                orderBy: {
                    createdAt: 'asc',
                },
            });
            if (firstUser) {
                await feature.addAdmin(firstUser.id);
            }
        }
    }
    // revert the migration
    static async down(db) {
        await db.user.deleteMany({
            where: {
                email: process.env.AFFINE_ADMIN_EMAIL ?? 'admin@example.com',
            },
        });
    }
}
//# sourceMappingURL=99999-self-host-admin.js.map