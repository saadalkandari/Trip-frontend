import axios from "axios";



export const baseURL = "http://192.168.8.101:8000/api";


const instance = axios.create({
  baseURL: baseURL,
});
export default instance;
