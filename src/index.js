import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from './components/App'
import { actionCreators } from './redux/actions'
import Store from './redux/store'

const store = Store();
store.dispatch(actionCreators.getAll());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
