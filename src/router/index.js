import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/pages/HomePage.vue';
import LoginPage from '@/components/pages/auth/LoginPage.vue';
import SignUpPage from '@/components/pages/auth/SignUpPage.vue';
import MyProfile from '@/components/pages/account/MyProfile.vue';

import UnderConstructionPage from '@/components/pages/UnderConstructionPage.vue';



const routes = [
  
  // Base Routes
  { 
    path: '/', 
    name: 'Home', 
    component: HomePage, 
    meta: { title: "Home" }
  },
  
  // Page under construction
  { 
    path: '/x', 
    name: 'UnderConstruction', 
    component: UnderConstructionPage, 
    meta: { title: "Under Construction" }
  },

  // Authentication Routes
  { path: '/u/login', 
    name: 'Login', 
    // component: LoginPage, 
    component: UnderConstructionPage, 
    meta: { title: "Login" } 
  },
  { path: '/u/signup', 
    name: 'Signup', 
    // component: SignUpPage, 
    component: UnderConstructionPage, 
    meta: { title: "SignUp" } 
  },


  // Profile Routes
  { path: '/u/profile', 
    name: 'MyProfile', 
    // component: MyProfile, 
    component: UnderConstructionPage, 
    meta: { title: "My Profile" } 
  },
  { path: '/u/settings', 
    name: 'MySettings', 
    component: MyProfile, // to change
    meta: { title: "My Settings" } 
  },



];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
