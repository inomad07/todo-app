import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import App from './containers/app'
import todoReducer from './redux/reducers'
import Store from "./redux/store";
import './css/style.css';
import * as serviceWorker from './registerServiceWorker';

const store = Store(todoReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();