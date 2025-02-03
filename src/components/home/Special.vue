<script setup>
</script>

<template>
    <section v-scroll-reveal
        class="special xbg-blue-400 flex items-center justify-evenly flex-col md:flex-row overflow-hidden mx-5 my-16 md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg lg:p-7"
        id="special">

        <!-- side pad -->
        <div v-scroll-reveal class="not-shown side-pad rotate-90 md:rotate-0 mb-8 md:mb-0 bg-pink-200 w-44 h-44 flex items-center justify-center">
            <img src="/src/assets/images/animals/3.png" alt="Animated Pet" class="scale-75">
        </div>

        <div v-scroll-reveal class="not-shown center-pad flex items-center justify-center md:w-[24rem] lg:w-[30rem] xjustify-evenly bg-purple-400 xrounded-[1rem] select-none pt-14 pb-14 xmd:pr-10 xmd:pl-10 xlg:pr-10 xlg:pl-10">

            <div class="center text-center flex flex-col items-center justify-center w-full">
                <h1 class="flex items-center justify-center gradient-text-2 text-center text-3xl text-gray-50 font-semibold w-full md:text-3xl lg:text-3xl">
                    <span>Get special gift</span>
                </h1>
                <p class="text-[0.675rem] font-medium md:text-xs lg:text-sm ml-8 mr-8 text-wrap lg:text-[0.9rem] text-gray-50 mt-4">
                    Unlock a surprise for your pet with your sign-up today!
                </p>

                <router-link to="/u/signup"
                    class="mt-5 flex items-center justify-center font-semibold text-sm w-[7rem] h-9 rounded-full bg-white text-purple-500">
                    Join Us
                </router-link>
            </div>
        </div>

        <!-- side pad -->
        <div v-scroll-reveal class="not-shown side-pad rotate-180 md:rotate-90 mt-8 md:mt-0 bg-yellow-100 w-44 h-44 flex items-center justify-center">
            <img src="/src/assets/images/animals/1.png" alt="Animated Pet" class="-rotate-90 scale-90">
        </div>
    </section>

</template>


<style scoped>
a {
    transition: all 0.3s ease;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

a:hover {
    color: white;
    background-color: rgb(39, 39, 39);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}


.center-pad {
    border-radius: 16% 84% 11% 89% / 84% 14% 86% 16% ;
}
.side-pad:first-child {
    border-radius: 54% 46% 25% 75% / 41% 22% 78% 59%;
}

.side-pad:last-child {
    border-radius: 57% 43% 82% 14% / 55% 59% 41% 45%;
}
</style>