
<script setup>
import AuthBackground from "@/components/others/PawBackground.vue";

import { ref, onMounted, onUnmounted } from 'vue';

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
let timer = null;


const fixedStartDate = new Date('2025-05-05T12:00:00Z').getTime();
const duration = 10 * 24 * 60 * 60 * 1000; // 10 days in milliseconds
const targetDate = fixedStartDate + duration;

const updateTimer = () => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    clearInterval(timer);
    return;
  }

  days.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeLeft % (1000 * 60)) / 1000);
};

onMounted(() => {
  updateTimer();
  timer = setInterval(updateTimer, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>


<template>
    <AuthBackground>
    <section class="under-construction relative flex flex-col items-center md:justify-center pt-24 md:pt-0 overflow-hidden mx-5 mt-10 mb-20 md:my-12 h-[45rem] md:h-[45rem] rounded-b-3xl md:rounded-none md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg">
        
        <!-- Title -->
        <h1 class="title mb-6 uppercase text-4xl md:text-5xl">Coming Soon</h1>

        <!-- Info -->
        <p class="info mb-14 md:mb-24 text-gray-500 tracking-tight flex flex-col items-center justify-center">
            <span class="">
                This page is currently under construction. 
            </span>
            <span class="mt-1">Stay tuned.
                 <a href="mailto:danieladeofficial@gmail.com" target="_blank" class="hidden underline ml-2 transition-all text-purple-500 hover:text-purple-600 font-medium">Contact</a>
            </span>
        </p>

        <!-- Timer -->
        <div class="timer mb-14 md:mb-16 w-full flex items-center justify-evenly">
            <div class="flex flex-col items-center">
                <h2 class="text-[2.5rem] md:text-[3.5rem] leading-tight font-light">
                    {{ String(days).padStart(2, '0') }}
                </h2>
                <p class="uppercase text-[0.825rem] md:text-[0.9rem] text-gray-500 tracking-tighter">
                    days
                </p>
            </div>

            <div class="flex flex-col items-center">
                <h2 class="text-[2.5rem] md:text-[3.5rem] leading-tight font-light">
                    {{ String(hours).padStart(2, '0') }}
                </h2>
                <p class="uppercase text-[0.825rem] md:text-[0.9rem] text-gray-500 tracking-tighter">
                    hours
                </p>
            </div>

            <div class="flex flex-col items-center">
                <h2 class="text-[2.5rem] md:text-[3.5rem] leading-tight font-light">
                    {{ String(minutes).padStart(2, '0') }}
                </h2>
                <p class="uppercase text-[0.825rem] md:text-[0.9rem] text-gray-500 tracking-tighter">
                    mins
                </p>
            </div>

            <div class="flex flex-col items-center w-16">
                <h2 class="text-[2.5rem] md:text-[3.5rem] leading-tight font-light">
                    {{ String(seconds).padStart(2, '0') }}
                </h2>
                <p class="uppercase text-[0.825rem] md:text-[0.9rem] text-gray-500 tracking-tighter">
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
</AuthBackground>
</template>
