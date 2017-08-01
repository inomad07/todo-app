import axios from 'axios'
import types from '../constants'


export const getTodos = () => (dispatch) => {
    return axios.get('http://localhost:3001/api/tasks/all')
        .then((todos) => {
            dispatch({
                type: types.LIST,
                payload: todos.data
            })
        })
    };
