import axios from "axios";
import config from "../../common/config/api.config";

const api = `${config.protocol}://${config.host}/api`;

function getAll() {
	return axios
		.get(`${api}/all`)
		.then((res) => res.data)
		.catch((err) => {
			console.log("Cannot fetch", err);
		});
}

function add(text: string) {
	return axios
		.post(`${api}`, { text, toggle: false })
		.then((res) => res.data)
		.catch((error) => {
			console.log(error);
		});
}

function toggle(id: string) {
	return axios
		.put(`${api}/${id}/toggle`)
		.then((res) => res.data)
		.catch((error) => {
			console.log("Cannot toggle", error);
		});
}

function update(id: string, text: string) {
	return axios
		.put(`${api}/${id}`, { text: text })
		.then((res) => res.data)
		.catch((error) => {
			console.log("Cannot update", error);
		});
}

function remove(id: string) {
	return axios
		.delete(`${api}/${id}`)
		.then((res) => res.data)
		.catch((error) => {
			console.log("Cannot remove", error);
		});
}

export default {
	getAll,
	add,
	toggle,
	update,
	remove,
};
