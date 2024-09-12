import axios from "axios";

const api = axios.create({
    baseURL: 'https://conceitos-node-2-0.onrender.com'
})

export default api