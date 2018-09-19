import types from '../constants'

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
                    Object.assign({}, action.todo.body)
                ]
            }
        }
        case types.CROSS_OUT:
        {
            const stateObj = Object.assign({}, state, { todos: state.todos.map((todo) => {
                if (todo._id === action.todo._id) {
                    const todoObj = Object.assign({}, todo, { toggle: !todo.toggle });
                    return todoObj;
                }
                return todo;
            })});

            return stateObj;
        }
        case types.SAVE:
        {
            const todos = state.todos.map((todo) => {
                if (todo._id === action.todo.body._id) {
                    const todoOb = Object.assign({}, todo, { text: action.todo.body.text });
                    return todoOb
                }
                return todo;
            });
           const stateOb = Object.assign({}, state, { todos: todos });
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