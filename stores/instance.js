import axios from "axios";

export const baseUrl = "http://192.168.1.70";

export const instance = axios.create({
  baseURL: `${baseUrl}/api`,
});
