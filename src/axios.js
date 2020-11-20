import axios from "axios";


const baseUrl= "http://localhost:5000/"

const axiosInstances = axios.create({
    baseURL: baseUrl
})

export default axiosInstances;