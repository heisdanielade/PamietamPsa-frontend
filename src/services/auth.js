import api from "./api";

export default {
  async register(user) {
    const response = await api.post("/auth/signup", user);
    
    console.log(response.data); // Test

    return response.data;
  },

  async login(user) {
    const response = await api.post("/auth/login", user);
    const token = response.data.token;
    
    if (token) {
      localStorage.setItem("token", token); // Save token for future requests
    }

    return response.data;
  },

  logout() {
    localStorage.removeItem("token"); // Remove token on logout
  },
};
