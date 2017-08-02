import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import './css/style.css';
import App from './containers/app'
//import {allState} from './reducers/allState'
import {actionCreators} from './actions'
import configureStore from './helpers/configureStore'
//const store = createStore(
//    allState, applyMiddleware(thunk)
//);

const store = configureStore();
store.dispatch(actionCreators.fetch());
console.log('store', store);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
