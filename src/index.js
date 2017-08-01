import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './css/style.css';
import App from './containers/app'
//import {store} from './helpers/store'
import {allState} from './reducers/allState'
//import thunkMiddleware from 'redux-thunk'

const store = createStore(
    allState, applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
