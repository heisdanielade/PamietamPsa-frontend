<script setup>
import AuthBackground from "@/components/others/PawBackground.vue";

</script>

<template>
    <AuthBackground>
        <section class="home overflow-hidden mt-14 md:mt-8 lg:mt-8" id="home">
        <div class="flex flex-col items-center justify-center select-none w-full max-w-screen-lg mx-auto p-4 md:py-8">
            <div class="text-center flex flex-col items-center justify-center w-full">
                <h1 v-scroll-reveal class="not-shown md:mt-8 text-[2rem] leading-[2.625rem] md:leading-[4.5rem] lg:leading-[4.75rem] tracking-wide gradient-text-1 font-bold lg:font-semibold w-full lg:text-7xl md:text-6xl">
                    Caring for your pets, <br>made simple and<br> stress free.
                </h1>
            </div>

            <div class="hidden flex-col items-center text-center mt-5 lg:mt-6">
                <p v-scroll-reveal class=" not-shown text-xs tracking-wide lg:text-[0.9rem] text-gray-500 mb-7 lg:mb-8">
                    Vet visits and reminders for a <br>happy, healthy pet.
                    <!-- From vet visits to reminders, keep your<br> pet happy and healthy. -->
                </p>
                <router-link to="/u/signup" v-scroll-reveal class="not-shown get-started flex items-center justify-center bg-purple-300 w-[12rem] h-12 rounded-full">
                    <span class="font-semibold">Get Started Now</span>
                    <span class="bg-white text-sm ml-2 font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        <i class="transition ri-arrow-right-line"></i>
                    </span>
                </router-link>
            </div>

            <div class="relative mt-5 md:mt-20 lg:mt-20 flex flex-wrap justify-center items-center gap-4">
                <div v-scroll-reveal class="not-shown box custom-cursor relative flex items-center justify-center rounded-[1.75rem] w-[12rem] h-[12rem] bg-pink-200">
                    <img class="pet absolute w-[15rem] h-[15rem]" src="/src/assets/images/animals/7.png" alt="Pet">
                </div>

                <div v-scroll-reveal class="not-shown box custom-cursor mt-24 md:mt-0 lg:mt-0 relative flex items-center justify-center ml-4 mr-4 rounded-[1.75rem] w-[13rem] h-[11rem] bg-purple-200">
                    <img class="pet absolute w-[32rem] h-[15rem]" src="/src/assets/images/animals/16.png" alt="Pet">
                </div>

                <div v-scroll-reveal class="not-shown box custom-cursor relative hidden md:flex lg:flex items-center justify-center rounded-[1.75rem] w-[12rem] h-[12.5rem] bg-yellow-100">
                    <img class="pet absolute w-[13rem] h-[13rem]" src="/src/assets/images/animals/8.png" alt="Pet">
                </div>
            </div>
        </div>
    </section>
    </AuthBackground>
</template>


<style scoped>
.home .get-started{
    transition: all 0.3s ease;
}
.home .get-started:hover {
    color: white;
    background-color: rgb(39, 39, 39);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}
.home .get-started:hover i{
    color: rgb(39, 39, 39);
}

.home .box img{
    transition: all 0.4s ease-in-out;
    transform: scale(1.03);
}

.home .box:nth-child(1):hover img,
.home .box:nth-child(3):hover img{
    transform: scale(1.04);
}
.home .box:nth-child(1),
.home .box:nth-child(3){
    transform: translateY(2rem);
}
/* .home .box:nth-child(1) img{
    transform: translateY(-1.5rem);
}
.home .box:nth-child(2) img{
    transform: translateY(-0.7rem);
} */

.home .box:nth-child(2) img{
    transform: translateY(-2rem);
}
.home .box:nth-child(3) img{
    transform: translateY(-0.2rem);
}


</style>