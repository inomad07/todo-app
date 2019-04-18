import axios from 'axios';
import config from '../config/api.config';
import { actionCreators } from '../actions'

const api = `${config.protocol}://${config.host}/api`;

class TodoService {
    static getAll() {
        return (dispatch) => {
            return axios.get(`${api}/all`)
                .then((res) => {
                    dispatch(actionCreators.getAll(res.data));
                })
                .catch((error) => {
                    console.log('Cannot fetch', error)
                })
        }
    }
}

export default TodoService;
