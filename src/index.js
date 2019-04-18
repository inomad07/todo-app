import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import './css/style.css';
import App from './components/app'
import { actionCreators } from './actions'
import configureStore from './store'

const store = configureStore();
store.dispatch(actionCreators.getAll());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
