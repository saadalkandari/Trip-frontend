import axios from "axios";

export const baseURL = "http://172.20.10.2:8000/api";
const instance = axios.create({
  baseURL: baseURL,
});
export default instance;
