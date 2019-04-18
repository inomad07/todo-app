import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import './css/style.css';
import App from './components/app'
import { actionCreators } from './actions'
import TodoService from './services'
import configureStore from './store'

const store = configureStore();
store.dispatch(actionCreators.fetch());
store.dispatch(TodoService.getAll());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
