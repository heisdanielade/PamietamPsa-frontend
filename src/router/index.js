import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/pages/HomePage.vue';

import LoginPage from '@/components/pages/auth/LoginPage.vue';
import SignUpPage from '@/components/pages/auth/SignUpPage.vue';
import VerifyEmailPage from '@/components/pages/auth/VerifyEmailPage.vue';

import MyProfile from '@/components/pages/account/MyProfile.vue';

import UnderConstructionPage from '@/components/pages/UnderConstructionPage.vue';

import TermsPage from '@/components/pages/legal/TermsPage.vue';
import PolicyPage from '@/components/pages/legal/PolicyPage.vue';



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
    component: LoginPage, 
    // component: UnderConstructionPage, 
    meta: { title: "Log in" } 
  },
  { path: '/u/signup', 
    name: 'Signup', 
    component: SignUpPage, 
    // component: UnderConstructionPage, 
    meta: { title: "Sign up" } 
  },
  { path: '/u/verify-email', 
    name: 'VerifyEmail', 
    component: VerifyEmailPage, 
    meta: { title: "Verify Email" } 
  },


  // Legal Info Routes
  { path: '/legal/terms', 
    name: 'Terms', 
    component: TermsPage,
    meta: { title: "Terms & Conditions" } 
  },
  { path: '/legal/policy', 
    name: 'Policy', 
    component: PolicyPage,
    meta: { title: "Privacy Policy" } 
  },


  // Profile Routes
  { path: '/u/profile', 
    name: 'MyProfile', 
    component: MyProfile, 
    // component: UnderConstructionPage, 
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
