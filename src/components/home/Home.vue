<script setup>
import AuthBackground from "@/components/others/PawBackground.vue";

</script>


<template>
    <AuthBackground>
        <section class="home overflow-hidden mt-28 md:mt-20 lg:mt-24" id="home">
        <div class="flex flex-col items-center justify-center select-none w-full max-w-screen-lg mx-auto p-4 md:py-8">
            <div class="text-center flex flex-col items-center justify-center w-full">
                <h1 translate="no" v-scroll-reveal class="not-shown md:mt-8 text-[2rem] leading-[2.1rem] md:leading-[4rem] lg:leading-[4.75rem] tracking-wide gradient-text-1 font-extrabold lg:font-bold w-full lg:text-7xl md:text-6xl">
                    <span class="desktop-main-text hidden md:flex">
                        Simplify pet care with an easy and stress free experience.
                    </span>
                     <span class="mobile-main-text md:hidden w-full text-[4rem]">
                        Simplified pet care.
                     </span>
                </h1>
            </div>

            <div class="flex flex-col items-center text-center mt-6 lg:mt-7">
                <p v-scroll-reveal class="not-shown text-base md:text-lg font-normal tracking-wide text-gray-500 mb-8 lg:mb-9">
                    Vet visits and reminders for a <br>happy, healthy pet.
                </p>
                <router-link to="/u/signup" v-scroll-reveal class="not-shown get-started-btn hover:text-white hover:shadow-sm transition flex items-center justify-center bg-purple-200 w-[12rem] h-12 rounded-2xl">
                    <span class="font-semibold text-base">Get Started Now</span>
                    <span class="bg-white text-sm ml-2 font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        <i class="transition ri-arrow-right-line"></i>
                    </span>
                </router-link>
            </div>

            <div class="relative mt-5 md:mt-20 lg:mt-20 flex flex-wrap justify-center items-center gap-4">
                <div v-scroll-reveal class="not-shown box custom-cursor relative flex items-center justify-center w-[13rem] h-[12.4rem] bg-pink-200">
                    <img class="pet absolute w-[13.2rem] h-[15rem]" src="/src/assets/images/animals/webp/7.webp" alt="Pet">
                </div>

                <div v-scroll-reveal class="not-shown box custom-cursor mt-24 md:mt-0 lg:mt-0 relative flex items-center justify-center ml-4 mr-4 w-[13rem] h-[11rem] bg-purple-200">
                    <img class="pet absolute w-[32rem] h-[15rem]" src="/src/assets/images/animals/webp/4.webp" alt="Pet">
                </div>

                <div v-scroll-reveal class="not-shown box custom-cursor relative hidden md:flex lg:flex items-center justify-center w-[13rem] h-[12.4rem] bg-yellow-100">
                    <img class="pet absolute w-[15rem] h-[13rem]" src="/src/assets/images/animals/webp/11.webp" alt="Pet">
                </div>
            </div>
        </div>
    </section>
    </AuthBackground>
</template>


<style scoped>
.mobile-main-text{
    line-height: 1;
}
.get-started-btn:hover{
    background-color: var(--main-color);
}
.get-started-btn:hover i{
    color: var(--main-color);
}
.box{
    border-radius: 1.625rem;
}
.home .box img{
    transition: all 0.4s ease-in-out;
    scale: 1.03;
}

.home .box:nth-child(1):hover img,
.home .box:nth-child(3):hover img{
    scale: 1.04;
}
.home .box:nth-child(1),
.home .box:nth-child(3){
    transform: translateY(2rem);
}
.home .box:nth-child(2) img{
    transform: translateY(-2rem);
}
.home .box:nth-child(3) img{
    transform: translateY(-0.07rem) scale(1.14);
}


</style>