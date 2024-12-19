import axios from 'axios';

export const postUser = async (values) => {
    const addUser = await axios.post('http://localhost:4000/user/signup', { ...values });
};

export const updateUser = async (id, values) => {
    const updateUser = await axios.put(`http://localhost:4000/user/updateUser/${id}`, { ...values });
};

export const fetchAccount = async () => {
    const token = localStorage.getItem('token');
    // console.log('this is the token looking for:', token);
    const { data } = await axios.get('http://localhost:4000/user/myaccount');
    return data;
};

export const fetchAllUsers = async () => {
    const { data } = await axios.get('http://localhost:4000/user/allUsers');
    return data;
};
