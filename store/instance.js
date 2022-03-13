import axios from "axios";

export const baseURL = "http://192.168.1.64:8000/api";

const instance = axios.create({
  baseURL: baseURL,
});
export default instance;
