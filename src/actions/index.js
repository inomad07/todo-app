import types from '../constants'

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
    add: todo => {
        return {
            type: types.ADD,
            payload: todo
        };
    },
    remove: todo => {
        return {
            type: types.REMOVE,
            payload: todo
        };
    },
    toggle: todo => {
        return {
            type: types.TOGGLE,
            payload: todo
        };
    },
    save: (id, text)=> {
        return {
            type: types.SAVE,
            payload: {id, text}
        }
    }

};