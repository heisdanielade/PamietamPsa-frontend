<script setup>
import { ref } from "vue";
import Logo from "@/components/others/Logo.vue";

const user = {
    isLoggedIn: false,
    // isLoggedIn: true,
    initials: "H",
}

const isVisible = ref(false);
const toggle = () => {
    isVisible.value = !isVisible.value;
};

</script>



<template>
    <header>
        <nav class="blur-bg-2 fixed z-50 top-0 w-full overflow-hidden md:px-6 py-2.5">
            <div
                class="rounded-xl px-4 md:px-2 py-2 md:p-4 flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
                <!-- Logo -->
                <router-link to="/" class="flex items-center">
                    <Logo/>
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
                        class="inline-flex items-center justify-center p-1 w-[2.125rem] h-[2.125rem]  ml-5 mr-1 text-2xl text-gray-600 rounded-lg md:hidden xhover:bg-gray-100 focus:outline-none ring-2 ring-gray-200 focus:ring-gray-300">
                        <i class="ri-menu-4-line"></i>
                        <span class="sr-only">Open main menu</span>
                    </button>

                </div>

                
                <!-- Desktop menu -->
                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <router-link to="/x"
                                class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:text-purple-500 transition md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0"
                                >About Us</router-link>
                        </li>
                        <li>
                            <router-link to="/x"
                                class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:text-purple-500 transition md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0">Adopt</router-link>
                        </li>
                        <li>
                            <router-link to="/x"
                                class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:text-purple-500 transition md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0">
                                Support</router-link>
                        </li>
                        <li>
                            <a href="https://github.com/heisdanielade" target="_blank"
                                class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:text-purple-500 transition md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0">Creator</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Mobile Navbar -->
        <Transition name="slide">
            <div v-if="isVisible"
                class="mobile-menu pt-16 px-5 block md:hidden fixed top-0 left-0 z-40 w-full h-[15rem] rounded-b-3xl blur-bg">
                <ul class="flex flex-col mt-6 font-semibold text-sm">
                    <li v-scroll-reveal class="not-shown mb-[0.8rem] w-full">
                        <router-link to="/x" class="moblie-menu-link relative flex items-center justify-start pb-1 text-gray-600 hover:text-purple-500">
                            <i class="mr-2 text-gray-300 fa-solid fa-house"></i>
                            <span class="">
                                About Us
                            </span>
                        </router-link>
                    </li>
                    <li v-scroll-reveal class="not-shown mb-[0.8rem] w-full">
                        <router-link to="/x" class="moblie-menu-link relative flex items-center justify-start pb-1 text-gray-600 hover:text-purple-500">
                            <i class="mr-2 text-gray-300 fa-solid fa-cat"></i>
                            <span class="">
                                Adopt
                            </span>
                        </router-link>
                    </li>
                    <li v-scroll-reveal class="not-shown mb-[0.8rem] w-full">
                        <router-link to="/x" class="moblie-menu-link relative flex items-center justify-start pb-1 text-gray-600 hover:text-purple-500">
                            <i class="mr-2 text-gray-300 ri-customer-service-line"></i>
                            <span class="">
                                Support
                            </span>
                        </router-link>
                    </li>
                    <li v-scroll-reveal class="not-shown mb-[0.8rem] w-full">
                        <a href="https://github.com/heisdanielade" target="_blank" class="moblie-menu-link relative flex items-center justify-start pb-1 text-gray-600 hover:text-purple-500">
                            <i class="mr-2 text-gray-300 ri-code-s-slash-line"></i>
                            <span class="">
                                Creator
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </Transition>

    </header>
</template>



<style scoped>
.login-btn:hover {
    background: #5e1381;
    background: repeating-linear-gradient(to right, #5e1381 0%, #6c1a92 50%, #9046A5 100%);
}


/* -- Moblie menu -- */
.moblie-menu-link{
    transition: all 0.3s ease;
}

/* -- Mobile menu visibility animation -- */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease-in-out;
}

.slide-enter-from {
    transform: translateY(-120%);
    opacity: 0;
}

.slide-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.slide-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.slide-leave-to {
    transform: translateY(-120%);
    opacity: 0;
}
</style>