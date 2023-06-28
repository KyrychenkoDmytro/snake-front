import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL2,
});

export default instance;