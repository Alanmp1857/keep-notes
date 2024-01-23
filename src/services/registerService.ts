import axios from 'axios';
import Users from '../models/users';

const addUsers = (newUser: Users) => {
    return axios.post("http://localhost:4000/users", newUser);
}

const getAllUsers = () => {
    return axios.get("http://localhost:4000/users");
}

export { addUsers, getAllUsers }