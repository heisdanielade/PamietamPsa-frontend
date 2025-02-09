
<script setup>

import { useProjectStore } from '@/stores/projectStore';
const projectName = useProjectStore().projectName;

</script>

<template>
    <img src="/src/assets/images/logos/logo.png" class="mr-1 w-6 h-6" alt="Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap">{{ projectName }}</span>

</template>