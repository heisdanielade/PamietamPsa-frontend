<script setup>
import authService from "@/services/auth";

// handle log out
const handleLogout = () => {
  authService.logout();
};
</script>



<template>
  <!-- Sidebar for larger screens -->
  <div v-scroll-reveal
    class="sidebar relative not-shown p-5 flex flex-col items-center bg-zinc-900 text-white rounded-3xl shadow-xl">
    <!-- Logo / App Icon -->
    <router-link to="/" class="absolute top-5">
      <img src="/src/assets/images/logos/3d-logo.png" alt="App Logo" class="w-9 h-9" />
    </router-link>

    <!-- Nav Links -->
    <nav class="mt-[4.5rem] flex flex-col space-y-7 text-zinc-300">
      <!-- Dashboard -->
      <router-link to="/u/profile" class="group relative">
        <i class="ri-dashboard-line text-2xl hover:text-purple-500"></i>
        <span
          class="absolute left-12 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-zinc-800 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Dashboard
        </span>
      </router-link>

      <!-- Pets -->
      <router-link to="/u/pets" class="group relative">
        <i class="fa-solid fa-cat text-xl hover:text-purple-500"></i>
        <span
          class="absolute left-12 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-zinc-800 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          My Pets
        </span>
      </router-link>

      <!-- Reminders -->
      <router-link to="/u/reminders" class="group relative">
        <i class="ri-notification-2-line text-2xl hover:text-purple-500"></i>
        <span
          class="absolute left-12 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-zinc-800 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Reminders
        </span>
      </router-link>

      <!-- Settings -->
      <router-link to="/u/settings" class="group relative">
        <i class="ri-settings-3-line text-2xl hover:text-purple-500"></i>
        <span
          class="absolute left-12 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-zinc-800 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Settings
        </span>
      </router-link to="/x">

      <!-- Sign Out -->
      <span @click="handleLogout()" class="group relative mb-2 custom-cursor">
        <i class="ri-logout-box-r-line text-2xl text-purple-400 hover:text-purple-500 transition-all"></i>
        <span
          class="absolute left-12 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-zinc-800 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Sign Out
        </span>
      </span>
    </nav>

    <!-- Spacer -->
    <!-- <div class="flex-grow"></div> -->
  </div>





</template>