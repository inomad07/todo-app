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

const initialData = {
    todos: []
};

export const allState = (state = initialData, action) => {
    switch (action.type) {
        case types.FETCH:
        {
            return {
                todos: action.todos
            }
        }
        case types.ADD:
        {
            return [
                ...state.todos,
                Object.assign({}, action.todo)
            ];
        }
        case types.CROSS_OUT:
        {
            state;

            const stateObj = Object.assign({}, state, { todos: state.todos.map((todo) => {
                if (todo._id === action.todo._id) {
                    const todoObj = Object.assign({}, todo, {done: !todo.done});
                    return todoObj;
                }

                return todo;
            })});

            return stateObj;
        }
        //case types.REMOVE:
        //{
        //    return [
        //        ...state,
        //        todos.filter(todo => todo._id !== payload)
        //    ]
        //
        //
        //}
        //case types.SAVE:
        //{
        //    return {
        //        todos: todos.map(todo => todo._id === action.payload._id ? {...todo, text: action.payload.text} : todo)
        //    };
        //}
        default:
            return state;
    }

};