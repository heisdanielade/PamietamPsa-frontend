<script setup>
import { ref } from 'vue';
import Logo from "@/components/others/Logo.vue";
import { useProjectStore } from '@/stores/projectStore';

const projectName = useProjectStore().projectName;
const currentYear = ref(new Date().getFullYear());

</script>


<template>
    <footer v-scroll-reveal
        class="not-shown md:bg-purple-100 flex flex-col justify-end md:justify-between overflow-hidden rounded-[2.25rem] px-5 py-7 md:p-3 mt-32 mb-0 md:mb-10 xh-[10rem] md:h-auto md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg">

        <div class="info hidden md:flex flex-col md:flex-row items-center justify-between px-9 mb-10 md:mb-2">
            <div class="left">
                <h2 class="text-4xl font-extrabold xlogo-font">
                    Find your new<br>furry friend!
                </h2>
                <p class="hidden md:flex mt-4 text-sm text-gray-500 font-medium">
                    Are you ready to welcome a bundle of joy into your life? <br>
                    Our shelter is home to a variety of lovable companions <br> eagerly waiting for their forever homes.
                </p>
            </div>

            <div class="right flex items-center justify-center bg-purple-300 -translate-y-10 mt-12 h-48 w-48">
                <router-link href="/x"
                    class="box bg-white flex items-center justify-center w-28 h-28 rounded-3xl">
                    <span class="font-medium text-base">
                        Contact us
                    </span>
                </router-link>
            </div>
        </div>


        <!-- Actual footer content -->
        <div v-scroll-reveal
            class="not-shown content flex flex-col md:flex-row items-center justify-between shadow-sm bg-dark text-white p-4 rounded-3xl md:rounded-full">

            <!-- Logo -->
            <div class="logo hidden md:flex items-center">
                <Logo />
            </div>

            <!-- Useful links -->
            <div class="links hidden md:flex items-center justify-evenly md:justify-center w-full text-[0.815rem] my-6 md:my-0">
                <router-link to="/x" class="md:mr-4 transition hover:text-purple-300">
                    About
                </router-link>
                <a href="https://github.com/heisdanielade" target="_blank" class="md:mr-4 transition hover:text-purple-300">
                    Creator
                </a>
                <router-link to="/x" class="md:mr-4 transition hover:text-purple-300">
                    Terms
                </router-link>
                <router-link to="/x" class="md:mr-4 transition hover:text-purple-300">
                    Privacy
                </router-link>
                <router-link to="/x" class="transition hover:text-purple-300">
                    Contact us
                </router-link>
            </div>

            <!-- Social media links -->
            <div class="icons flex items-center text-sm">
                <a href=""
                    class="relative flex items-center justify-center mr-3 md:mr-2 w-7 h-7 rounded-full border-[1px] border-gray-400 transition hover:text-purple-300">
                    <span class="sr-only">Instagram profile</span>
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href=""
                    class="relative flex items-center justify-center mr-3 md:mr-2 w-7 h-7 rounded-full border-[1px] border-gray-400 transition hover:text-purple-300">
                    <span class="sr-only">Facebook page</span>
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href=""
                    class="relative flex items-center justify-center mr-3 md:mr-2 w-7 h-7 rounded-full border-[1px] border-gray-400 transition hover:text-purple-300">
                    <span class="sr-only">Discord community</span>
                    <i class="fa-brands fa-discord"></i>
                </a>
                <a href=""
                    class="relative flex items-center justify-center w-7 h-7 rounded-full border-[1px] border-gray-400 transition hover:text-purple-300">
                    <span class="sr-only">LinkedIn profile</span>
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
            </div>

            <!-- Arr & Date -->
            <div class="flex md:hidden items-center justify-evenly mt-5 text-[0.81rem] font-medium">
                <div class="">
                    <span class="">&copy {{ currentYear }}</span>
                    <router-link to="/" class="ml-1 transition text-purple-300 hover:underline">
                        {{ projectName }}.
                    </router-link>
                </div>

                <div class="ml-2">
                    <span class="">
                        All Rights Reserved.
                    </span>
                </div>
            </div>
        </div>

    </footer>
</template>



<style scoped>
.info .right {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    animation: morph 4s linear infinite;
}

@keyframes morph {

    0%,
    100% {
        border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
    }

    34% {
        border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
    }

    67% {
        border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    }
}
</style>