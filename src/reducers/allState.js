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
            return {
                todos: [
                    ...state.todos,
                    Object.assign({}, action.todo)
                ]
            }
        }
        case types.CROSS_OUT:
        {
            const stateObj = Object.assign({}, state, { todos: state.todos.map((todo) => {
                if (todo._id === action.todo._id) {
                    const todoObj = Object.assign({}, todo, { done: !todo.done });
                    return todoObj;
                }
                return todo;
            })});

            return stateObj;
        }
        case types.SAVE:
        {
            var todos = state.todos.map((todo) => {
                if (todo._id === action.todo.id) {
                    const todoOb = Object.assign({}, todo, { text: action.todo.text });
                    console.log(action.todo.id);
                    return todoOb
                }
                return todo;
            });
            const stateOb = Object.assign({}, state, { todos: todos });
            console.log('stateOb:', stateOb);
            return stateOb;
        }
        case types.REMOVE:
        {
           return {
               todos: state.todos.filter((todo) => todo._id !== action.todoId)
           }
        }
        default:
            return state;
    }

};