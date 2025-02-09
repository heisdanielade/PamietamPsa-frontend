<script setup>
import { ref } from "vue";
import { useProjectStore } from '@/stores/projectStore';
import logoSrc from '@/assets/images/logos/logo.png';

const projectName = useProjectStore().projectName;

const user = {
    isLoggedIn: false,
    isLoggedIn: true,
    initials: "H",
}

const isVisible = ref(false);
const toggle = () => {
    console.log("\n(i) Mobile menu button clicked.");
    isVisible.value = !isVisible.value;
};

</script>



<template>
    <header>
        <nav class="blur-bg fixed z-50 top-0 w-full overflow-hidden md:px-6 py-2.5">
            <div
                class="rounded-xl px-2 py-2 md:p-4 flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
                <!-- Logo -->
                <router-link to="/" class="flex items-center">
                    <img src="/src/assets/images/logos/logo.png" class="mr-3 h-6 sm:h-9" alt="Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap">{{ projectName }}</span>
                </router-link>
                <div class="flex items-center md:order-2">
                    <!-- User avatar if user is logged in -->
                    <router-link v-if="user.isLoggedIn" to="/u/profile" class="relative">
                        <div
                            class="inline-flex items-center justify-center w-11 h-11 overflow-hidden bg-gray-100 border-[0.15rem] border-gray-200 rounded-full">
                            <span class="font-semibold text-lg md:text-xl text-gray-600">
                                {{ user.initials }}
                            </span>
                            <span
                                class="signal absolute top-[0.125rem] right-[0.125rem] z-20 w-3 h-3 border-[0.125rem] border-green-500 bg-green-400 rounded-full"></span>
                        </div>
                    </router-link>
                    <!-- Login button if use is not logged in -->
                    <router-link v-else to="/u/login"
                        class="bg-dark login-btn shadow-sm text-center w-[5rem] p-2 text-sm transition text-white font-medium rounded-xl focus:outline-none">
                        Login
                    </router-link>


                    <!-- Button to activate mobile menu -->
                    <button @click="toggle" type="button"
                        class="inline-flex items-center justify-center p-1 w-9 h-9  ml-5 mr-1 text-2xl text-gray-600 rounded-lg md:hidden xhover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200">
                        <i class="ri-menu-4-line"></i>
                        <span class="sr-only">Open main menu</span>
                    </button>
                </div>

                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <a href="#"
                                class="block py-2 pr-4 pl-3 text-gray-800 rounded bg-primary-700 md:bg-transparent md:text-primary-700 md:p-0"
                                aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:text-purple-500 transition md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0">Adopt</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:text-purple-500 transition md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-600">Contact
                                Us</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:text-purple-500 transition md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-600">Services</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Mobile Navbar -->
        <Transition name="slide">
            <div v-if="isVisible" class="mobile-menu block md:hidden fixed top-0 right-0 z-40 w-1/2 md:w-2/5 h-full xrounded-bl-3xl blur-bg">

            </div>
        </Transition>

    </header>
</template>



<style scoped>
.login-btn:hover {
    background: #5e1381;
    background: repeating-linear-gradient(to right, #5e1381 0%, #6c1a92 50%, #9046A5 100%);
}

/* Mobile menu visibility animation */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease-in-out;
}
.slide-enter-from, 
.slide-leave-to {
  transform: translateX(120%);
  opacity: 0;
}

.slide-enter-to, 
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>