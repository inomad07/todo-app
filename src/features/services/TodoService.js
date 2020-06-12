import axios from 'axios';
import config from '../../common/config/api.config';

const api = `${config.protocol}://${config.host}/api`;

function getAll() {
    return axios.get(`${api}/all`)
}

function add(todo) {
    return axios.post(`${api}`, todo)
}

function toggle(id) {
    return axios.put(`${api}/${id}/toggle`)
}

function update({id, text}) {
    return axios.put(`${api}/${id}`, {text})
}

function remove(id) {
    return axios.delete(`${api}/${id}`)
}


export default {
    getAll,
    add,
    toggle,
    update,
    remove
}