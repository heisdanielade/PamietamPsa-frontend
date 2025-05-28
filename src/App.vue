<script setup>
import { ref, onBeforeMount, provide } from 'vue';
import userService from "@/services/user";
import { useMainUserStore } from '@/stores/mainUserDetails';
import { isTokenValid } from "@/utils/auth";
import RequestToast from "@/components/reusable/RequestToast.vue";
import Loader from "@/components/reusable/Loader.vue";


const toastRef = ref(null);
provide('toast', toastRef); // Make toast globally available
const isLoading = ref(true);

const userStore = useMainUserStore();

const getUserDetails = async () => {
  const token = localStorage.getItem('token');
  const isValid = token && isTokenValid(token)
  if (isValid) {
    try {
      const userDetails = await userService.userDetails();

      userStore.setUserDetails(userDetails.data);
    } catch (error) {
      console.error("(e) Error retrieving logged in user details", error);
    } finally {
      await new Promise(resolve => setTimeout(resolve, 850)); 
      isLoading.value = false;
    }
  } else {
      await new Promise(resolve => setTimeout(resolve, 850)); 
      isLoading.value = false;
  };
};

onBeforeMount(() => {
  getUserDetails();
})
</script>



<template>
  <div v-if="isLoading">
    <Loader />
  </div>
  <div v-else>
    <router-view />
    <RequestToast ref="toastRef" />
  </div>
</template>
