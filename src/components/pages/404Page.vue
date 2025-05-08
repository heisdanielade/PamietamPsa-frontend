
<script setup>
import AuthBackground from "@/components/others/PawBackground.vue";
</script>


<template>
    <AuthBackground>
    <section class="404 relative flex flex-col items-center md:justify-center pt-24 md:pt-0 overflow-hidden mx-5 mt-10 mb-20 md:my-12 h-[45rem] md:h-[45rem] rounded-b-3xl md:rounded-none md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg">
        
        <!-- Title -->
        <h1 class="title mb-6 uppercase text-4xl md:text-5xl">Page not found</h1>

        <!-- Info -->
        <p class="info mb-10 text-gray-500 tracking-tight flex flex-col items-center justify-center">
            <span class="">
                Oops, Looks like you got lost :)
            </span>
        </p>

        <!-- Back to home -->
         <div class="back-to-home flex items-center justify-center">
            <router-link to="/" class="back-btn transition-all bg-dark text-white text-[0.925rem] px-3 py-2.5 shadow-sm hover:shadow-lg rounded-2xl">
                Go home
            </router-link>
         </div>

    </section>
</AuthBackground>
</template>
