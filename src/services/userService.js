
import axios from '../axios'

const handleLoginApi = (email, password) => {
    return axios.post("/api/login", { email, password });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
}

const createNewUser = (data) => {
    return axios.post('/api/create-new-user', data);
}

const deleteUser = (idUser) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: idUser
        }
    });
}

const editUser = (data) => {

    return axios.put('/api/edit-user', data);
}
export { handleLoginApi, getAllUsers, createNewUser, deleteUser, editUser }