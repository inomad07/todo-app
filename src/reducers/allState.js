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


let id = 3;
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
                todos: [
                    ...state.todos,
                    {
                        id: ++id,
                        text: action.payload,
                        done: false,
                        ...todos
                    }
                ]
            };
        }
        case types.REMOVE: {
            return {
                ...state,
                todos: todos.filter(todo => todo.id !== payload)
            };
        }
        case types.SELECT: {
            return {
                todos: todos.map(todo => todo.id === action.payload ?
                {...todo, done: !todo.done} : todo)
            }
        }
        case types.EDIT: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }

};
