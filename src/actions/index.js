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

export const actionCreators = {
    add: (text) => dispatch => {
        return axios.post(`http://localhost:3001/api/tasks/`, {
                text: text,
                done: false
            })
            .then ( (todo) =>
                dispatch({
                    type: types.ADD,
                    payload: todo,
                    done: false
                })
            )
            .catch((error) => {
                console.log(error)
            })
    },
    remove: (index) => dispatch => {
        return axios.delete(`http://localhost:3001/api/tasks/${index}`)
            .then ((index) => {
                dispatch({
                    type: types.REMOVE,
                    payload: index,
                    done: false
                });
                console.log('Successfully deleted')
            })
            .catch((error) => {
                console.log('Cannot remove', error)
            })
    },
    select: index => dispatch => {
        return axios.put(`http://localhost:3001/api/tasks/${index}/changeState`)
            .then ((index) => {
                dispatch({
                    type: types.SELECT,
                    payload: index
                });
                console.log('Successfully switched')
            })
            .catch((error) => {
                console.log('Cannot switch', error)
            })
    },
    save: (_id, text)=> dispatch => {
        return axios.put(`http://localhost:3001/api/tasks/${_id}`)
            .then ((_id, text) => {
                dispatch({
                    type: types.SAVE,
                    payload: {_id, text}
                })
            })
            .catch ((error)=> {
                console.log('Cannot save changes', error)
            })
    }
};