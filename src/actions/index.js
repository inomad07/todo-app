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
    getAll: (data) => {
        return {
            type: types.FETCH,
            todos: data
        }
    },
    fetch: () => {
        return (dispatch) => {
            return axios.get(`${apiUrl}/all`)
                .then((res) => {
                    dispatch(fetchTodosSuccess(res.data));
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
                .then((res) =>
                    dispatch(createTodo(res.data))
                )
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    crossOut: index => {
        return (dispatch) => {
            return axios.put(`${apiUrl}/${index}/toggle`)
                .then((res) => {
                    dispatch(changeState(res.data));
                    console.log('Successfully toggled')
                })
                .catch((error) => {
                    console.log('Cannot toggle', error)
                })
        }
    },
    save: (id, text) => {
        return (dispatch) => {
            return axios.put(`${apiUrl}/${id}`, { text })
                .then((res) => {
                    dispatch(updateTodo(res.data));
                    console.log('Successfully updated')
                })
                .catch((error)=> {
                    console.log('Cannot update', error)
                })
        }
    },
    remove: (id) => dispatch => {
        axios.delete(`${apiUrl}/${id}`)
            .then((res) => {
                dispatch(removeTodo(id));
                console.log('Successfully deleted')
            })
            .catch((error) => {
                console.log('Cannot remove', error)
            })
    }

};