
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useMainUserStore } from '@/stores/mainUserDetails';

const userStore = useMainUserStore();
const router = useRoute();
const isHomePage = computed(() => router.name === "MyProfile");
const isSettingsPage = computed(() => router.name === "Settings");

const user = {
    name: userStore.name || "",
}
</script>



<template>
    <div class="w-full overflow-hidden px-5 md:p-3 mb-0 xmd:mb-10 md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg">
        <h1 class="font-medium text-2xl md:text-2xl gradient-text-3">
            Hi there, <span class="">{{ user.name }}</span>
        </h1>
        <p class="font-semibold color-dark opacity-60">
           <span v-if="isHomePage" class="">
             Local pet care services for you.
           </span>

           <span v-else class="">
            Tweak your account settings
           </span>
        </p>

        <router-link v-if="isHomePage" to="/x" v-scroll-reveal class="not-shown promo-card mt-3 w-full lg:w-7/12 flex items-center justify-between gap-4 flex-shrink-0 p-5 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-400 to-fuchsia-400 backdrop-blur-md border border-white/30 transition hover:backdrop-blur-lg hover:brightness-105">
            <div class="flex flex-col">
                <h2 class="text-lg font-bold text-white mb-1">Pet Lover Zone!</h2>
                <p class="text-sm text-white/90 mb-5">Get more valuable tips.</p>
                <span
                    class="flex items-center justify-center w-24 h-8  bg-white/20 text-white text-xs font-semibold px-4 py-1 rounded-full hover:bg-white/30 transition">
                    <span>Join now</span>
                </span>
            </div>
            <img src="/src/assets/images/animals/2.png" alt="Animals" class="w-24 h-24 scale-[1.3] object-contain">
        </router-link>



    </div>
</template>
