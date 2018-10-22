import App from './App'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { hydrate } from 'react-dom'
import WebFont from 'webfontloader';

if (typeof window !== 'undefined') {
    WebFont.load({
        google: {
            families: ['Abril Fatface']
        }
    });
}

hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept()
}
