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
                { ...todo, done: !todo.done } : todo)
            };
        }
        case types.SAVE:
            return {
                todos: todos.map(todo => todo.id === action.payload.id ?
                    { ...todo, text: action.payload }
                        : todo
                )
        };
        default:
            return state;
    }

};
