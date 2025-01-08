<script setup>
import { ref } from 'vue';
import { useProjectStore } from '@/stores/projectStore';

const projectName = useProjectStore().projectName;

</script>

<template>
<section class="home hidden" id="home">
    
    <div class="main_text">
        <h1>
            The best place to get your favourite pet without and doubt
        </h1>
    </div>

    <div class="sub_info">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ab recusandae autem dolores, nemo facere!</p>
        <router-link to="/auth/signup" class="btn">
            <span>Get Started</span>
            <span></span>
        </router-link>
    </div>

    <div class="pets_carousel">

    </div>
    
</section>
</template>

<style scoped>
</style>