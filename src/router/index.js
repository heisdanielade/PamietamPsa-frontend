import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/pages/HomePage.vue';
import LoginPage from '@/components/pages/LoginPage.vue';
import SignupPage from '@/components/pages/SignupPage.vue';

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
