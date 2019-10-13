import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from './components/App'
import { actionCreators } from './redux/actions'
import configureStore from './redux/store'

const store = configureStore();
store.dispatch(actionCreators.getAll());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
