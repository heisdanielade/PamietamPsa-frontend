import api from "./api";
import { useUserStore } from '@/stores/tempUser';



export default {
  // Register user 
  async register(user) {
    try {
      const response = await api.post("/auth/signup", user);
      return response.data;
    } catch (error) {
      throw error;
    }
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
    const token = response.data.data.token;
    localStorage.setItem("token", token); // Save token for future requests
    router.push('/u/profile');
  },

  // Verify email after registration
  async verifyEmail(user) {
    try {
      // Add a delay for UX
      await new Promise(resolve => setTimeout(resolve, 1250));

      const response = await api.post("/auth/verify-email", user);
      return response.data;
    } catch (error) {
      throw error
    }
  },


  // Login user
  async login(user) {
    // Add a delay for UX
    await new Promise(resolve => setTimeout(resolve, 1250));

    const response = await api.post("/auth/login", user);
    const token = response.data.data.token;
    if (token) {
      localStorage.setItem("token", token); // Save token for future requests
    }
    return response.data;
  },


  async logout(router) {
    // Add a delay for UX
    await new Promise(resolve => setTimeout(resolve, 750));

    localStorage.removeItem("token");
    window.location.href = "/";
  },
};
