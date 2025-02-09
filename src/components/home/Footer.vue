<script setup>
import { ref } from 'vue';
import { useProjectStore } from '@/stores/projectStore';

const projectName = useProjectStore().projectName;
const currentYear = ref(new Date().getFullYear());

</script>


<template>
    <footer class="xbg-white overflow-hidden rounded-lg mt-28 bg-inherit">
        <div class="w-full max-w-screen-lg mx-auto p-4 md:py-8">
            <div v-scroll-reveal class="not-shown sm:flex sm:items-center sm:justify-between">
                <router-link to="/" class="flex items-center mb-4 sm:mb-0 space-x-2 rtl:space-x-reverse">
                    <img src="/src/assets/images/logos/logo.png" class="h-8" :alt="projectName + ' logo'" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ projectName
                        }}</span>
                </router-link>
                <ul class="flex flex-wrap items-center justify-evenly mb-4 text-sm font-medium text-gray-500">
                    <li class="">
                        <a href="#" class="hover:text-purple-500 transition me-4 md:me-6">About Us</a>
                    </li>
                    <li class="">
                        <a href="#" class="hover:text-purple-500 transition me-4 md:me-6">Terms</a>
                    </li>
                    <li class="">
                        <a href="#" class="hover:text-purple-500 transition me-4 md:me-6">Privacy</a>
                    </li>

                    <li class="">
                        <a href="#" class="hover:text-purple-500 transition me-4 md:me-6">Support</a>
                    </li>
                    <li class="mt-0 md:mt-0">
                        <a href="https://github.com/heisdanielade" target="_blank" class="hover:text-purple-500 transition">Creator</a>
                    </li>
                </ul>
            </div>


            <hr class="my-6 border-gray-200 border-1 sm:mx-auto lg:my-8" />


            <div v-scroll-reveal class="not-shown sm:flex sm:items-center sm:justify-between">
                <div class="text-sm text-gray-500 sm:text-center flex items-center justify-between">
                    <span>© {{ currentYear }} 
                        <router-link to="/" class="hover:text-purple-500 transition font-medium ml-[0.1rem]">{{ projectName }}</router-link>
                        ™
                    </span> 
                    <span class=" md:ml-5 lg:ml-0">All Rights Reserved.</span>
                </div>
                <div class="flex justify-center mt-7 md:mt-0">
                    <a href="#" class="text-base text-gray-500 hover:text-purple-500 transition">
                        <i class="fa-brands fa-facebook-f"></i>
                        <span class="sr-only">Facebook page</span>
                    </a>
                    <a href="#" class="text-base text-gray-500 hover:text-purple-500 transition ms-6">
                        <i class="fa-brands fa-linkedin-in"></i>
                        <span class="sr-only">LinkedIn profile</span>
                    </a>
                    <a href="#" class="text-base text-gray-500 hover:text-purple-500 transition ms-6">
                        <i class="fa-brands fa-instagram"></i>
                        <span class="sr-only">Instagram profile</span>
                    </a>
                    <a href="#" class="text-base text-gray-500 hover:text-purple-500 transition ms-6">
                        <i class="fa-brands fa-medium"></i>
                        <span class="sr-only">Medium page</span>
                    </a>
                    <a href="#" class="text-base text-gray-500 hover:text-purple-500 transition ms-6">
                        <i class="fa-brands fa-discord"></i>
                        <span class="sr-only">Discord community</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
