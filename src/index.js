import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './store.js';

ReactDOM.render(
    <StateProvider>
        <App />
    </StateProvider>,
    document.getElementById('root'));
