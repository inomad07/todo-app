import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import { helloSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(helloSaga);

export default function Store(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );
}







