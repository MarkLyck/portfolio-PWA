import app from './server';
import http from 'http';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Abril+ Fatface']
    }
});

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000, error => {
    if (error) {
        console.log(error);
    }

    console.log('🚀 started');
});

if (module.hot) {
    console.log('✅  Server-side HMR Enabled!');

    module.hot.accept('./server', () => {
        console.log('🔁  HMR Reloading `./server`...');
        server.removeListener('request', currentApp);
        const newApp = require('./server').default;
        server.on('request', newApp);
        currentApp = newApp;
    });
}
