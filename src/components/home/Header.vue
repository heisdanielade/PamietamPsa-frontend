<script setup>
import { useProjectStore } from '@/stores/projectStore';
import logoSrc from '@/assets/images/logos/logo.png';

const projectName = useProjectStore().projectName;
</script>


<template>
    <header>
        <nav class="fixed z-50 top-0 w-full overflow-hidden lg:px-6 py-2.5">
            <div class="blur-bg rounded-xl px-3 py-4 md:p-4 flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
                <router to="/" class="flex items-center">
                    <img :src="logoSrc" class="mr-3 h-6 sm:h-9" alt="Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap">{{ projectName }}</span>
                </router>
                <div class="flex items-center lg:order-2">
                    <router-link to="/u/login"
                        class="bg-dark login-btn shadow-sm text-center w-[5rem] p-2 text-sm transition text-white font-medium rounded-full focus:outline-none">Login</router-link>
                    <button data-collapse-toggle="mobile-menu-2" type="button"
                        class="inline-flex items-center p-2 ml-3 text-sm text-gray-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#"
                                class="block py-2 pr-4 pl-3 text-gray-800 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                                aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:text-purple-500 transition lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-gray-600">Adopt</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:text-purple-500 transition lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-gray-600">Contact Us</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:text-purple-500 transition lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-gray-600">Services</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>



<style scoped>
.login-btn:hover {
    background: #5e1381;
    background: repeating-linear-gradient(to right, #5e1381 0%, #6c1a92 50%, #9046A5 100%);
}
</style>