import types from '../constants'

// Initial state of the store
const initialState = {
    todos: [
        {
            id: 1,
            text: 'Hello World!',
            done: false
        },
        {
            id: 2,
            text: 'Hola Mundo!',
            done: false
        },
        {
            id: 3,
            text: 'Привет Мир!',
            done: false
        },
    ]
};


// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const allState = (state = initialState, action) => {
    const { todos } = state;
    const { type, payload } = action;

    switch (type) {
        case types.ADD: {
            return {
                ...state,
                todos: [payload, ...todos]
            };
        }
        case types.REMOVE: {
            return {
                ...state,
                todos: todos.filter((todo, i) => i !== payload)
            };
        }
        case types.SELECT: {
            return {
                ...state,
            };
        }
        case types.EDIT: {
            return {

            };
        }
        default:
            return state;
    }

};
