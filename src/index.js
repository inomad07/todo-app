import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
//import App from './App';
//import './index.css';

import App from './containers/app'

import { allState } from './reducers/todoListRedux'
const store = createStore(allState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
