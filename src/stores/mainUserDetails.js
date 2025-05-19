import { defineStore } from 'pinia';

export const useMainUserStore = defineStore('mainUser', {
  state: () => ({
    isLoaded: false,
    name: '',
    email: '',
    initial: '',
    role: '',
    enabled: false,
    token: localStorage.getItem('token') || null,
  }),

  actions: {
    setUserDetails(user) {
      this.isLoaded = true;
      this.name = user.name;
      this.email = user.email;
      this.initial = (user.initial).toUpperCase();
      this.role = user.role;
      this.enabled = user.enabled || false;
      this.token = localStorage.getItem('token')
    },

    clearUserDetails() {
      this.isLoaded = false,
      this.name = '';
      this.email = '';
      this.initial = '';
      this.role = '';
      this.enabled = false;
      this.token = '';
    }
  },
  
  persist: {
    paths: ['name', 'email', 'role', 'enabled', 'token'],
    storage: localStorage,
  }
});
