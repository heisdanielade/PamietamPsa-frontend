import axios from "axios";

// const DEV_API_URL = "http://localhost:8080/v1";
const API_URL = "https://api-pamietampsa.up.railway.app/v1";


const api = axios.create({
  baseURL: DEV_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


// Add a request interceptor to attach the token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
