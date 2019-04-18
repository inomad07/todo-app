import types from '../constants'
import TodoService from '../services'
// Helper functions to dispatch actions, optionally with payloads

export const getTodoList = (todos) => {
    return {
        type: types.GET_ALL,
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
        type: types.TOGGLE,
        todo
    }
};

export const updateTodo = (todo) => {
    return {
        type: types.UPDATE,
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
    getAll: () => {
        return (dispatch) => {
            return TodoService.getAll()
                .then((res) => {
                    dispatch(getTodoList(res.data));
                })
                .catch((error) => {
                    console.log('Cannot fetch', error)
                })
        }
    },
    add: (text) => {
        return (dispatch) => {
            return TodoService.add(text)
                .then((res) =>
                    dispatch(createTodo(res.data))
                )
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    toggle: (id) => {
        return (dispatch) => {
            return TodoService.toggle(id)
                .then((res) => {
                    dispatch(changeState(res.data));
                })
                .catch((error) => {
                    console.log('Cannot toggle', error)
                })
        }
    },
    update: (id, text) => {
        return (dispatch) => {
            return TodoService.update(id, text)
                .then((res) => {
                    dispatch(updateTodo(res.data));
                })
                .catch((error)=> {
                    console.log('Cannot update', error)
                })
        }
    },
    remove: (id) => {
        return dispatch => {
            return TodoService.remove(id)
                .then((res) => {
                    dispatch(removeTodo(res));
                })
                .catch((error) => {
                    console.log('Cannot remove', error)
                })
        }
    }

};