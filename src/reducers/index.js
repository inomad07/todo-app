import { combineReducers } from 'redux';
import {allState} from './allState'

export default combineReducers({
    todoList: allState
});