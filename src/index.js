import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import App from './containers/app'
import todoReducer from './redux/reducers'
import Store from "./redux/store";
import './css/style.css';

const store = Store(todoReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);