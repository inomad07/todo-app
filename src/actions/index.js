import types from '../constants'
import axios from 'axios'

// Helper functions to dispatch actions, optionally with payloads

const apiUrl = 'http://localhost:3001/api';

export const fetchTodosSuccess = (todos) => {
    return {
        type: types.FETCH,
        todos
    }
};

export const createTodo = (todo) => {
    return {
        type: types.ADD,
        todo
    }
};

export const changeState = (todo) => {
    return {
        type: types.CROSS_OUT,
        todo
    }
};

export const updateTodo = (todo) => {
    return {
        type: types.SAVE,
        todo
    }
};

export const removeTodo = (todoId) => {
    return {
        type: types.REMOVE,
        todoId
    }
};

export const actionCreators = {
    fetch: (todos) => {
        return (dispatch) => {
            return axios.get(`${apiUrl}/all`)
                .then((todos) => {
                    dispatch(fetchTodosSuccess(todos.data));
                })
                .catch((error) => {
                    console.log('Cannot fetch', error)
                })
        }
    },
    add: (text) => {
        return (dispatch) => {
            return axios.post(`${apiUrl}`, {
                    text: text,
                    toggle: false
                })
                .then((todo) =>
                    dispatch(createTodo(todo.data))
                )
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    crossOut: index => {
        return (dispatch) => {
            return axios.put(`${apiUrl}/${index}/toggle`)
                .then((todo) => {
                    dispatch(changeState(todo.data));
                    console.log('Successfully switched')
                })
                .catch((error) => {
                    console.log('Cannot switch', error)
                })
        }
    },
    save: (todoId, text) => {
        return (dispatch) => {
            return axios.put(`${apiUrl}/${todoId}`, { text })
                .then((todo) => {
                    dispatch(updateTodo(todo.data));
                    console.log('Successfully updated')
                })
                .catch((error)=> {
                    console.log('Cannot update', error)
                })
        }
    },

    remove: (index) => dispatch => {
        axios.delete(`${apiUrl}/${index}`)
            .then((msg) => {
                dispatch(removeTodo(index));
                console.log('Successfully deleted')
            })
            .catch((error) => {
                console.log('Cannot remove', error)
            })
    }

};