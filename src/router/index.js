import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/home/HomePage.vue';
import LoginPage from '@/components/auth/LoginPage.vue';
import SignupPage from '@/components/auth/SignupPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/auth/login', name: 'Login', component: LoginPage },
  { path: '/auth/signup', name: 'Signup', component: SignupPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
