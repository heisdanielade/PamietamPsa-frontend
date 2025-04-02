import api from "./api";
import { useUserStore } from '@/stores/tempUser';



export default {
  // Register user 
  async register(user) {
    const response = await api.post("/auth/signup", user);
    return response.data;
  },


  // Redirect to login page after registration & email verification
  async loginRedirect(router) {
    const userStore = useUserStore();
    const { email, password } = userStore;
    // Check if userEmail and userPassword are available
    if (!email || !password){
      router.push('/u/login');
    }
    const user = {
      email,
      password
    }
    const response = await api.post("/auth/login", user);
    const token = response.data.token;
    localStorage.setItem("token", token); // Save token for future requests
    router.push('/u/profile');
  },

  // Verify email after registration
  async verifyEmail(user) {
    const response = await api.post("/auth/verify-email", user);
    return response.data;
  },


  // Login user
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
