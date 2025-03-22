<script setup>
import { ref, provide } from 'vue';
import RequestToast from "@/components/others/RequestToast.vue";

const toastRef = ref(null);
provide('toast', toastRef); // Make toast globally available

</script>

<template>

  <router-view />

  <RequestToast ref="toastRef" />

</template>

<style scoped></style>