
<script setup>
    
    import { ref } from 'vue';

    const timer = ref({
        days: 16,
        hours: 2,
        mins: 41,
        secs: 8
    });
</script>


<template>
    <section class="under-construction relative flex items-center justify-center flex-col overflow-hidden mx-5 mt-10 mb-20 md:my-12 h-[45rem] md:h-[45rem] rounded-b-3xl md:rounded-none md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg">
        
        <!-- Title -->
        <h1 class="title mb-8 md:mb-12 uppercase text-4xl md:text-5xl">Coming Soon</h1>

        <!-- Info -->
        <p class="info mb-10 md:mb-16 text-gray-500 tracking-tight flex flex-col items-center justify-center">
            <span class="">
                This page/feature is currently under construction.
            </span>
            <span class="">Stay tuned.</span>
        </p>

        <!-- Timer -->
        <div class="timer mb-12 md:mb-14 w-full flex items-center justify-evenly">
            <div class="flex flex-col items-center">
                <h2 class="text-[3.5rem] font-light">
                    {{ timer.days }}
                </h2>
                <p class="uppercase text-[0.9rem] text-gray-500 tracking-tighter">
                    days
                </p>
            </div>

            <div class="flex flex-col items-center">
                <h2 class="text-[3.5rem] font-light">
                    0{{ timer.hours }}
                </h2>
                <p class="uppercase text-[0.9rem] text-gray-500 tracking-tighter">
                    hours
                </p>
            </div>

            <div class="flex flex-col items-center">
                <h2 class="text-[3.5rem] font-light">
                    {{ timer.mins }}
                </h2>
                <p class="uppercase text-[0.9rem] text-gray-500 tracking-tighter">
                    mins
                </p>
            </div>

            <div class="flex flex-col items-center">
                <h2 class="text-[3.5rem] font-light">
                    0{{ timer.secs }}
                </h2>
                <p class="uppercase text-[0.9rem] text-gray-500 tracking-tighter">
                    secs
                </p>
            </div>
        </div>

        <!-- Back to home -->
         <div class="back-to-home flex items-center justify-center">
            <router-link to="/" class="back-btn transition-all bg-dark text-white text-[0.925rem] px-3 py-2.5 shadow-sm hover:shadow-lg rounded-2xl">
                Back to home
            </router-link>
         </div>

    </section>
</template>
