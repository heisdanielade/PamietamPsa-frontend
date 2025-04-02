import { defineStore } from 'pinia';

export const useUserStore = defineStore('tempUser', {
  state: () => ({
    email: "",
    password: "",
  }),

  actions: {
    setUser(email, password) {
      this.email = email;
      this.password = password;
    },
    clearUser() {
      this.email = "";
      this.password = "";
    }
  },

  persist: {
    // Persist only the `email` state
    paths: ['email'],  // `password` will NOT be persisted
    storage: sessionStorage, // Store in localStorage
  }
});
