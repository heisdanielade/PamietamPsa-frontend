import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/auth'; // Backend URL

export default {
  async register(user) {
    return axios.post(`${API_URL}/signup`, user);
  },

  async verifyEmail(credentials) {
    return axios.post(`${API_URL}/verify`, credentials);
  },

  async login(credentials) {
    return axios.post(`${API_URL}/login`, credentials);
  },


  async getUserProfile(token) {
    return axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
};
