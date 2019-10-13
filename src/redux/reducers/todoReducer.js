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
            done: true
        },
    ]
};


let id = 3;

const todoReducer = (state = initialState, action) => {
    const { todos } = state;
    const { type, payload } = action;

    switch (type) {
        case types.ADD: {
            return {
                todos: [
                    ...todos,
                    {
                        id: ++id,
                        text: payload,
                        done: false,
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
        case types.TOGGLE: {
            return {
                todos: todos.map(todo => todo.id === payload ? {...todo, done: !todo.done} : todo)
            };
        }
        case types.SAVE: {
            return {
                todos: todos.map(todo => todo.id === payload.id ? {...todo, text: payload.text} : todo)
            };
        }
        default:
            return state;
    }
};

export default todoReducer;