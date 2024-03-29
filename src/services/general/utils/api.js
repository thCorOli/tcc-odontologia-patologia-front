import axios from "axios";
import { getTokenCookie } from "./cookie";

const API_URL_LOCAL ="http://127.0.0.1:3001/api/"; 
const API_URL = "https://back-hurryup-iw94.onrender.com/api/";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = getTokenCookie();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"]="application/json";
  }
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
});

export default api;