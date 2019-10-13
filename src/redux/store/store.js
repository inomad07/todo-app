import { createStore } from 'redux';


const Store = (initialState) => {
    return createStore(
        initialState
    );
};

export default Store;