import types from '../constants'

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
    add: item => {
        return {
            type: types.ADD,
            payload: item
        };
    },
    remove: index => {
        return {
            type: types.REMOVE,
            payload: index
        };
    },
    toggle: index => {
        return {
            type: types.TOGGLE,
            payload: index
        };
    },
    save: (id, text)=> {
        return {
            type: types.SAVE,
            payload: {id, text}
        }
    }

};