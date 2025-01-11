import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/home/HomePage.vue';
import LoginPage from '@/components/auth/LoginPage.vue';
import SignupPage from '@/components/auth/SignupPage.vue';

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: HomePage, 
    meta: { title: "Home" }
  },
  { path: '/u/login', 
    name: 'Login', 
    component: LoginPage, 
    meta: { title: "Login" } 
  },
  { path: '/u/signup', 
    name: 'Signup', 
    component: SignupPage, 
    meta: { title: "SignUp" } 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
