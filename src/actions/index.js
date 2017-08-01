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

//export const fetchTodos = () => dispatch => {
//    axios.get('http://localhost:3001/api/tasks/all')
//        .then((todos) => {
//            dispatch(setTodos(todos))
//        });
//};

export const add = (item) => dispatch => {
    axios.post('http://localhost:3001/api/tasks/', {
            type: types.ADD,
            payload: item
    })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        });
};





//export const add = item => {
//    return {
//        type: types.ADD,
//        payload: item
//    };
//};

export const remove = index => {
    return {
        type: types.REMOVE,
        payload: index
    };
};

export const select = index => {
    return {
        type: types.SELECT,
        payload: index
    };
};

export const save = (_id, text)=> {
    return {
        type: types.SAVE,
        payload: {_id, text}
    }
};