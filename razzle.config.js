const path = require('path')
const OfflinePlugin = require('offline-plugin')

module.exports = {
    modify: (config, { target, dev }, webpack) => {

        if (!dev && target === 'web') {
            config.plugins.push(new OfflinePlugin({
                relativePaths: false,
                publicPath: config.output.publicPath,
                caches: 'all',
                safeToUseOptionalCaches: true,
                AppCache: false,
                ServiceWorker: {
                    output: './sw.js',
                    navigateFallbackURL: '/'
                }
            }))
        }

        return config;
    },
};