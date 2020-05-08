import axios from 'axios'
import config from '../../common/config/api.config'
import { todoType } from '../types'

const api = `${config.protocol}://${config.host}/api`

function getAll() {
    return axios.get(`${api}/all`)
        .then((res) => res.data)
        .catch((err) => {
            console.log('Cannot fetch', err)
        })
}

function add(text: string) {
    return axios.post(`${api}`, { text, toggle: false })
        .then((res) => res.data)
        .catch((error) => {
            console.log(error)
        })
}

function toggle(todo: todoType) {
    return axios.put(`${api}/${todo._id}/toggle`)
        .then((res) => res.data)
        .catch((error) => {
            console.log('Cannot toggle', error)
        })
}

function update(todo: todoType) {
    return axios.put(`${api}/${todo.id}`, { text: todo.text })
        .then((res) => res.data)
        .catch((error) => {
            console.log('Cannot update', error)
        })
}

function remove(todo: todoType) {
    return axios.delete(`${api}/${todo._id}`)
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
