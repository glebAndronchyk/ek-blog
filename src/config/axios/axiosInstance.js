import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3040'
})

export default axiosInstance;
