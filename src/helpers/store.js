import { createStore } from 'redux';
import { allState } from '../reducers/allState'
const events = [];
const defaultState = {
    events
};


export const store = createStore(allState, defaultState);