<script setup>

import { useProjectStore } from '@/stores/projectStore';
const projectName = useProjectStore().projectName;

</script>


<template>
    <div class="flex items-center">
        <img src="/src/assets/images/logos/3d-logo.png" class="mr-1 w-8 h-8" alt="Logo" />
        <span class="logo-text text-xl font-medium whitespace-nowrap">{{ projectName }}</span>
    </div>
</template>

