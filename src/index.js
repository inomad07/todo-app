import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import './css/style.css';
import App from './containers/app'
import todoReducer from './redux/reducers'
import Store from "./redux/store";

const store = Store(todoReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
