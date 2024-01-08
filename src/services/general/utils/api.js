import axios from "axios";
import { getTokenCookie } from "./cookie";

const API_URL = "https://tcc-odontologia-back.onrender.com/api/patients";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = getTokenCookie();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
});

export default api;