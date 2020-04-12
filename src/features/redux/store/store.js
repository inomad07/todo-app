import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import { helloSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();



const Store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(helloSaga);


export default Store;