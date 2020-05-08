import types from '../constants'
import { todoType as Todo } from '../../types'

const loadTodos = () => {
    return {
        type: types.LOAD
    }
};

const loadTodosSuccess = (data: []) => {
    return {
        type: types.LOAD_SUCCESS,
        payload: data
    }
};

const loadTodosFailure = (data: any) => {
    return {
        type: types.LOAD_FAILURE,
        payload: data
    }
};

const addTodo = (todo: string) => {
    return {
        type: types.ADD,
        payload: todo
    }
};

const addTodoSuccess = (todo: Todo) => {
    return {
        type: types.ADD_SUCCESS,
        payload: todo
    }
};

const addTodoFailure = (data: any) => {
    return {
        type: types.ADD_FAILURE,
        payload: data
    }
};

const toggleTodo = (todo: Todo) => {
    return {
        type: types.TOGGLE,
        payload: todo
    }
};

const toggleTodoSuccess = (todo: Todo) => {
    return {
        type: types.TOGGLE_SUCCESS,
        payload: todo
    }
};

const toggleTodoFailure = (data: any) => {
    return {
        type: types.TOGGLE_FAILURE,
        payload: data
    }
};

const updateTodo = (todo: Todo) => {
    return {
        type: types.UPDATE,
        payload: {id: todo.id, text: todo.text}
    }
};

const updateTodoSuccess = (todo: Todo) => {
    return {
        type: types.UPDATE_SUCCESS,
        payload: todo
    }
};

const updateTodoFailure = (data: any) => {
    return {
        type: types.UPDATE_FAILURE,
        payload: data
    }
};

const removeTodo = (data: Todo) => {
    return {
        type: types.REMOVE,
        payload: data
    }
};

const removeTodoSuccess = (data: Todo) => {
    return {
        type: types.REMOVE_SUCCESS,
        payload: data
    }
};

const removeTodoFailure = (data: any) => {
    return {
        type: types.REMOVE_FAILURE,
        payload: data
    }
};


export {
    loadTodos,
    loadTodosSuccess,
    loadTodosFailure,

    addTodo,
    addTodoSuccess,
    addTodoFailure,

    toggleTodo,
    toggleTodoSuccess,
    toggleTodoFailure,

    updateTodo,
    updateTodoSuccess,
    updateTodoFailure,

    removeTodo,
    removeTodoSuccess,
    removeTodoFailure
};