<template>
  <div v-if="visible" :class="toastType" class="fixed top-4 right-4 z-[60] max-w-xs text-sm text-white rounded-xl shadow-lg" role="alert" tabindex="-1">
    <div class="flex p-3">
      {{message}}

      <div class="ms-auto">
        <button @click="closeToast" type="button" class="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-hidden focus:opacity-100" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  </template>
  


  <script setup>
  import { ref } from "vue";
  
  const visible = ref(false);
  const message = ref("Registration successful.");
  const toastType = ref("success");
  
  const showToast = (msg, type = "success", duration = 3000) => {
    message.value = msg;
    toastType.value = type;
    visible.value = true;
  
    setTimeout(() => {
      visible.value = false;
    }, duration);
  };
  
  const closeToast = () => {
    visible.value = false;
  };
  
  defineExpose({ showToast }); // Allows other components to call `showToast`
  </script>
  



  <style scoped>
  .success {
    background-color: #4bdb6d;
  }
  
  .error {
    background-color: #d84957;
  }
  
  /* button {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
  } */
  </style>
  