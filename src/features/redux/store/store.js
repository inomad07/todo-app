import { createStore } from 'redux';


const Store = (rootReducer) => {
    return createStore(
        rootReducer
    );
};

export default Store;