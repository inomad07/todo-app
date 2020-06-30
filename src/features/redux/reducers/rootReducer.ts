import types from '../constants'
import { todoType as State, actionType as Action } from '../../types';

const initialData: State[] = [];

export const rootReducer = (state = initialData, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case types.LOAD_SUCCESS: {
            return payload || []
        }

        case types.ADD_SUCCESS: {
            return [
                ...state,
                payload
            ]
        }

        case types.TOGGLE_SUCCESS: {
            return state.map((todo: State) => {
                return todo._id === payload._id ? {...todo, toggle: !todo.toggle} : todo
            });
        }

        case types.UPDATE_SUCCESS: {
            return state.map((todo: State) => {
                return todo._id === payload._id ? {...todo, text: payload.text} : todo
            });
        }

        case types.REMOVE_SUCCESS: {
            return state.filter((todo: State) => todo._id !== payload.id)
        }

        default: return state
    }
};