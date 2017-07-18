import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//import App from './App';
//import './index.css';


import App from './containers/app'


//import registerServiceWorker from './registerServiceWorker';
import { reducer } from './reducers/todoListRedux'

const store = createStore(reducer);


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App store={store} />, document.getElementById('root'));
//registerServiceWorker();
