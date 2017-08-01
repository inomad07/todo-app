import types from '../constants'

// Initial state of the store
//const initialState = {
//    todos: [
//        {
//            id: 1,
//            text: 'Hello World!',
//            done: false
//        },
//        {
//            id: 2,
//            text: 'Hola Mundo!',
//            done: false
//        },
//        {
//            id: 3,
//            text: 'Привет Мир!',
//            done: true
//        },
//    ]
//};


const initialState = {
    todos : []
};

export const allState = (state = initialState, action) => {
    const { todos } = state;
    const { type, payload } = action;

    switch (type) {

        case types.ADD: {
            return {
                todos: [
                    ...state.todos,
                    {
                        text: action.payload,
                        done: false,
                    }
                ]
            };
        }
        case types.REMOVE: {
            return {
                ...state,
                todos: todos.filter(todo => todo._id !== payload)
            };
        }
        case types.CROSS_OUT: {
            return {
                todos: todos.map(todo => todo._id === action.payload ? { ...todo, done: !todo.done } : todo)
            };
        }
        case types.SAVE: {
            return {
                todos: todos.map(todo => todo._id === action.payload._id ? { ...todo, text: action.payload.text } : todo)
            };
        }
        //case types.LIST: {
        //    return {
        //        ...state,
        //        todos: action.payload
        //    };
        //}
        default:
            return state;
    }

};
