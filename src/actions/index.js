import types from '../constants'
import axios from 'axios'

// Helper functions to dispatch actions, optionally with payloads

//export const actionCreators = {
//    add: item => {
//        return {
//            type: types.ADD,
//            payload: item
//        };
//    },
//    remove: index => {
//        return {
//            type: types.REMOVE,
//            payload: index
//        };
//    },
//    select: index => {
//        return {
//            type: types.SELECT,
//            payload: index
//        };
//    },
//    save: (_id, text)=> {
//        return {
//            type: types.SAVE,
//            payload: {_id, text}
//        }
//    },
//    read: index => {
//        return {
//            type: types.LIST,
//            payload: index
//        }
//
//    }
//
//};
const apiUrl = 'http://localhost:3001/api/tasks/all';

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

export const actionCreators = {
    fetch: (todos) => {
        return (dispatch) => {
            return axios.get(apiUrl)
                .then((todos) => {
                    console.log('todos', todos.data);
                    dispatch(fetchTodosSuccess(todos.data));
                })
                .catch((error) => {
                    console.log('Cannot fetch', error)
                })
        }
    },
    add: (text) => {
        return (dispatch) => {
            return axios.post(`http://localhost:3001/api/tasks/`, {
                    text: text,
                    done: false
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
            return axios.put(`http://localhost:3001/api/tasks/${index}/changeState`)
                .then((todo) => {
                    dispatch(changeState(todo.data));
                    console.log('Successfully switched')
                })
                .catch((error) => {
                    console.log('Cannot switch', error)
                })
        }
    },
    //remove: (index) => dispatch => {
    //    axios.delete(`http://localhost:3001/api/tasks/${index}`)
    //        .then((index) => {
    //            dispatch(
    //                {
    //                    type: types.REMOVE,
    //                    payload: index,
    //                    done: false
    //                }
    //            );
    //            console.log('Successfully deleted')
    //        })
    //        .catch((error) => {
    //            console.log('Cannot remove', error)
    //        })
    //},

    //save: (_id, text)=> dispatch => {
    //    axios.put(`http://localhost:3001/api/tasks/${_id}`)
    //        .then((_id, text) => {
    //            dispatch(
    //                {
    //                    type: types.SAVE,
    //                    payload: {_id, text}
    //                }
    //            )
    //        })
    //        .catch((error)=> {
    //            console.log('Cannot save changes', error)
    //        })
    //}
};