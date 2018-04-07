const path = require('path')
const OfflinePlugin = require('offline-plugin')

module.exports = {
    modify: (config, { target, dev }, webpack) => {

        if (!dev && target === 'web') {
            config.plugins.push(new OfflinePlugin({
                relativePaths: false,
                publicPath: config.output.publicPath,
                caches: {
                    main: [':rest:'],
                    // All chunks marked as `additional`, loaded after main section
                    // and do not prevent SW to install. Change to `optional` if
                    // do not want them to be preloaded at all (cached only when first loaded)
                    additional: ['*.chunk.js'],
                },
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