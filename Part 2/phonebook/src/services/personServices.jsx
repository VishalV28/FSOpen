import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const create = (newObj) => {
    return axios.post(baseUrl, newObj).then(response => response.data)
}

const update = (id, newObj) => {
    return axios.put(`${baseUrl}/${id}`, newObj).then(response => response.data)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data).catch(error => window.alert("There was an error"))
}

export default {getAll, create, update, remove}