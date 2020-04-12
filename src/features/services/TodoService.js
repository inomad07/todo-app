import axios from 'axios';
import config from '../../common/config/api.config';

const api = `${config.protocol}://${config.host}/api`;

function getAll() {
    return axios.get(`${api}/all`)
        .then((res) => res.data)
        .catch((err) => {
            console.log('Cannot fetch', err)
        })
}

function add(text) {
    return axios.post(`${api}`, { text, toggle: false })
        .then((res) => res.data)
        .catch((error) => {
            console.log(error)
        })
}

function toggle(id) {
    return axios.put(`${api}/${id}/toggle`)
        .then((res) => res.data)
        .catch((error) => {
            console.log('Cannot toggle', error)
        })
}

function update(id, text) {
    return axios.put(`${api}/${id}`, {text})
        .then((res) => res.data)
        .catch((error) => {
            console.log('Cannot update', error)
        })
}

function remove(id) {
    return axios.delete(`${api}/${id}`)
        .then((res) => res.data)
        .catch((error) => {
            console.log('Cannot remove', error)
        })
}


export default {
    getAll,
    add,
    toggle,
    update,
    remove
}