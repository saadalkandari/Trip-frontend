import axios from "axios";

export const baseURL = "http://192.168.100.201:8000/api";
const instance = axios.create({
  baseURL: baseURL,
});
export default instance;
