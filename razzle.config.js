const path = require('path')
// const OfflinePlugin = require('offline-plugin')

module.exports = {
    modify: (config, { target, dev }, webpack) => {

        // add alias
        config.resolve.alias.components = path.resolve(__dirname, 'src/components')

        // configuration for offline plugin (if it gets made compatible with webpack 4.5)
        // if (!dev && target === 'web') {
        //     config.plugins.push(new OfflinePlugin({
        //         relativePaths: false,
        //         publicPath: '/',
        //         caches: 'all',
        //         externals: [ '/' ],
        //         ServiceWorker: {
        //             output: './sw.js',
        //             navigateFallbackURL: '/'
        //         }
        //     }))
        // }

        return config;
    },
};