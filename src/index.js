import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './css/style.css';
import App from './containers/app'
import {allState} from './reducers/allState'


const store = createStore(allState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
