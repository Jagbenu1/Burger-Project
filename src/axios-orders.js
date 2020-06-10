import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-236f7.firebaseio.com/'
});

export default instance;