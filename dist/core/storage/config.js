import { defineStartupConfig } from '../../fundamentals/config';
defineStartupConfig('storages', {
    avatar: {
        provider: 'fs',
        bucket: 'avatars',
        publicLinkFactory: key => `/api/avatars/${key}`,
        keyInPublicLink: link => link.split('/').pop(),
    },
    blob: {
        provider: 'fs',
        bucket: 'blobs',
    },
});
//# sourceMappingURL=config.js.map