import types from '../constants';
import { Todo } from '../../types';
// Helper functions to dispatch actions, optionally with payloads

const loadTodos = () => {
	return {
		type: types.LOAD
	};
};

const loadTodosSuccess = (data: []) => {
	return {
		type: types.LOAD_SUCCESS,
		payload: data
	};
};

const loadTodosFailure = (data: unknown) => {
	return {
		type: types.LOAD_FAILURE,
		payload: data
	};
};

const add = (todo: Todo) => {
	return {
		type: types.ADD,
		payload: todo
	};
};

const addTodoSuccess = (todo: Todo) => {
	return {
		type: types.ADD_SUCCESS,
		payload: todo
	};
};

const addTodoFailure = (data: unknown) => {
	return {
		type: types.ADD_FAILURE,
		payload: data
	};
};

const toggle = (todo: Todo) => {
	return {
		type: types.TOGGLE,
		payload: todo
	};
};

const toggleTodoSuccess = (todo: Todo) => {
	return {
		type: types.TOGGLE_SUCCESS,
		payload: todo
	};
};

const toggleTodoFailure = (data: unknown) => {
	return {
		type: types.TOGGLE_FAILURE,
		payload: data
	};
};

const update = (todo: Todo) => {
	return {
		type: types.UPDATE,
		payload: {id: todo.id, text: todo.text}
	};
};

const updateTodoSuccess = (todo: Todo) => {
	return {
		type: types.UPDATE_SUCCESS,
		payload: todo
	};
};

const updateTodoFailure = (data: unknown) => {
	return {
		type: types.UPDATE_FAILURE,
		payload: data
	};
};

const remove = (data: Todo) => {
	return {
		type: types.REMOVE,
		payload: data
	};
};

const removeTodoSuccess = (data: Todo) => {
	return {
		type: types.REMOVE_SUCCESS,
		payload: data
	};
};

const removeTodoFailure = (data: unknown) => {
	return {
		type: types.REMOVE_FAILURE,
		payload: data
	};
};


export {
	loadTodos,
	loadTodosSuccess,
	loadTodosFailure,

	add,
	addTodoSuccess,
	addTodoFailure,

	toggle,
	toggleTodoSuccess,
	toggleTodoFailure,

	update,
	updateTodoSuccess,
	updateTodoFailure,

	remove,
	removeTodoSuccess,
	removeTodoFailure
};