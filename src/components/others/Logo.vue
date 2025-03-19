<script setup>

import { useProjectStore } from '@/stores/projectStore';
const projectName = useProjectStore().projectName;

</script>


<template>
    <div class="flex items-center">
        <img src="/src/assets/images/logos/logo.svg" class="mr-1 w-6 h-6" alt="Logo" />
        <span class="logo-text text-xl font-medium whitespace-nowrap">{{ projectName }}</span>
    </div>
</template>

