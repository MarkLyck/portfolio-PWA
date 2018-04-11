// const path = require('path')
// const OfflinePlugin = require('offline-plugin')

// module.exports = {
//     modify: (config, { target, dev }, webpack) => {

//         console.log(config.optimize)
//         if (!dev && target === 'web') {
//             config.plugins.push(new OfflinePlugin({
//                 relativePaths: false,
//                 publicPath: '/',
//                 caches: 'all',
//                 externals: [ '/' ],
//                 ServiceWorker: {
//                     output: './sw.js',
//                     navigateFallbackURL: '/'
//                 }
//             }))
//         }

//         return config;
//     },
// };