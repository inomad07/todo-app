import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import './css/style.css';
import App from './containers/app'
import {store} from './helpers/store'


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
