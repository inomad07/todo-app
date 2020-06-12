import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import Store from './features/redux/store';

render (
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
);