export class RefreshUnnamedUser1721299086340 {
    // do the migration
    static async up(db) {
        await db.$executeRaw `
      UPDATE users
      SET name = split_part(email, '@', 1)
      WHERE name = 'Unnamed' AND position('@' in email) > 0;
    `;
    }
    // revert the migration
    static async down(_db) { }
}
//# sourceMappingURL=1721299086340-refresh-unnamed-user.js.map