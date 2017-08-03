import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import './css/style.css';
import App from './containers/app'
import { actionCreators } from './actions'
import configureStore from './helpers/configureStore'

const store = configureStore();
store.dispatch(actionCreators.fetch());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
