import App from './App'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { hydrate } from 'react-dom'

// Offline support service worker 
if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install();
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
