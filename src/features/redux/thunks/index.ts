import { Dispatch } from 'redux'
import TodoService from '../../services'
import { todoType } from '../../types'
import {
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
} from '../actions'


const load = () => async (dispatch: Dispatch) => {
    dispatch(loadTodos());

    try {
        const response = await TodoService.getAll();
        dispatch(loadTodosSuccess(response.todo));
    } catch (error) {
        dispatch(loadTodosFailure(error));
    }
};

const add = (todo: string) => async (dispatch: Dispatch) => {
    dispatch(addTodo(todo));

    try {
        const response = await TodoService.add(todo);
        dispatch(addTodoSuccess(response.todo));
    } catch (error) {
        dispatch(addTodoFailure(error));
    }
};

const toggle = (todo: todoType) => async (dispatch: Dispatch) => {
    dispatch(toggleTodo(todo));

    try {
        const response = await TodoService.toggle(todo);
        dispatch(toggleTodoSuccess(response.todo));
    } catch (error) {
        dispatch(toggleTodoFailure(error));
    }
};

const update = (todo: todoType) => async (dispatch: Dispatch) => {
    dispatch(updateTodo(todo));

    try {
        const response = await TodoService.update(todo);
        dispatch(updateTodoSuccess(response.todo));
    } catch (error) {
        dispatch(updateTodoFailure(error));
    }
};

const remove = (todo: todoType) => async (dispatch: Dispatch) => {
    dispatch(removeTodo(todo));

    try {
        const response = await TodoService.remove(todo);
        dispatch(removeTodoSuccess(response));
    } catch (error) {
        dispatch(removeTodoFailure(error));
    }
};


export {
    load,
    add,
    toggle,
    update,
    remove
}
