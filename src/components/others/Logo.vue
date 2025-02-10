
<script setup>

import { useProjectStore } from '@/stores/projectStore';
const projectName = useProjectStore().projectName;

</script>

<template>
    <img src="/src/assets/images/logos/logo-2.svg" class="mr-1 w-6 h-6" alt="Logo" />
    <span class="logo-font text-xl font-medium whitespace-nowrap xtext-white gradient-text-3">{{ projectName }}</span>

</template>