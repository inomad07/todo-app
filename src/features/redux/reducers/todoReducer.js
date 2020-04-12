import types from '../constants'

// Initial state of the store
const initialState = [
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
];


let id = 3;

const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.ADD: {
            return [
                ...state,
                {
                    id: ++id,
                    text: payload,
                    done: false,
                }
            ];
        }

        case types.TOGGLE: {
            return state.map(todo => todo.id === payload ? {...todo, done: !todo.done} : todo);
        }

        case types.UPDATE: {
            return state.map(todo => todo.id === payload.id ? {...todo, text: payload.text} : todo);
        }

        case types.REMOVE: {
            return state.filter(todo => todo.id !== payload)
        }

        default: return state;
    }
};

export default todoReducer;