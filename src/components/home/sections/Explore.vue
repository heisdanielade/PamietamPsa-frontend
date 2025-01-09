<script setup>
import { useProjectStore } from '@/stores/projectStore';

const projectName = useProjectStore().projectName;

</script>

<template>
    <section class="home mt-8 bg-purple-50 h-[30rem]" id="home">
        <div class="header hidden">
            <h1>
                Explore our features
            </h1>
            <p>
                Everything you need for smarter, easier pet care.
            </p>
        </div>

        <div class="features">
            <div class="card">
                <div class="icon"></div>
                <div class="name"></div>
                <div class="info"></div>
            </div>
            <div class="card">
                <div class="icon"></div>
                <div class="name"></div>
                <div class="info"></div>
            </div>
            <div class="card">
                <div class="icon"></div>
                <div class="name"></div>
                <div class="info"></div>
            </div>
            <div class="card">
                <div class="icon"></div>
                <div class="name"></div>
                <div class="info"></div>
            </div>
        </div>

    </section>

</template>

<style scoped>
.home h1 {
    background: #1b0525;
    background: repeating-linear-gradient(to right, #1b0525 0%, #450f5e 50%, #8f45a3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.home .box:nth-child(1),
.home .box:nth-child(3){
    transform: translateY(2rem);
}
.home .box:nth-child(2) img{
    transform: translateY(-1rem);
}


</style>