<script setup>

import { useProjectStore } from '@/stores/projectStore';
const projectName = useProjectStore().projectName;

</script>

<template>
    <img src="/src/assets/images/logos/webp/logo-2.webp" class="mr-1 w-6 h-6" alt="Logo" />
    <span class="logo-text text-xl font-medium whitespace-nowrap">{{ projectName }}</span>
</template>


<style scoped>
.logo-text {
    background: linear-gradient(180deg, #1b0525 0%, #591ed8 50%, #e09df3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>