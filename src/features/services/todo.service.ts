import axios from 'axios';
import config from '../../common/config/api.config';
import { Todo } from '../types';

const api = `${config.protocol}://${config.host}/api`;

function getAll() {
	return axios.get(`${api}/all`);
}

function add(todo: Todo) {
	return axios.post(`${api}`, todo);
}

function toggle(id: Todo) {
	return axios.put(`${api}/${id}/toggle`);
}

function update(todo: Todo) {
	return axios.put(`${api}/${todo.id}`, {text: todo.text});
}

function remove(id: Todo) {
	return axios.delete(`${api}/${id}`);
}

export default {
	getAll,
	add,
	toggle,
	update,
	remove
};
