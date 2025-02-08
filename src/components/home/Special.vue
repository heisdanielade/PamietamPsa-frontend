<script setup>
</script>



<template>
    <section class="special bg-purple-50 overflow-hidden my-16" id="special">

        <div
            class="content flex px-5 py-12 md:py-24 items-center justify-center flex-col md:flex-row md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg lg:p-7">
            <!-- side pad -->
            <div v-scroll-reveal
                class="not-shown side-pad hidden rotate-90 md:rotate-0 mb-4 md:mb-0 md:bg-pink-200 w-44 h-44 items-center justify-center">
                <img src="/src/assets/images/animals/3.png" alt="Animated Dog Image"
                    class="scale-75 -rotate-90 md:rotate-0">
            </div>

            <div v-scroll-reveal
                class="not-shwn center-pad shadow-md relative rounded-3xl flex items-center justify-center md:mx-10 w-full md:w-[28rem] lg:w-[17rem] bg-purple-400 pt-12 pb-12">

                <div class="center text-center flex flex-col items-center justify-center w-full">
                    <h1 class="flex items-center justify-center text-center text-3xl text-gray-50 font-semibold md:text-3xl lg:text-3xl">
                        <span class="hidden md:flex">Get a special gift</span>
                        <span class="flex md:hidden">Hey there!</span>
                    </h1>
                    <p class="w-9/12 text-sm font-normal md:text-xs lg:text-sm ml-8 mr-8 text-wrap lg:text-[0.9rem] text-gray-50 mt-4">
                        Unlock a surprise for your pet with your sign-up today!
                    </p>

                    <router-link to="/u/signup"
                        class="join-btn mt-5 shadow-sm hover:text-white flex items-center justify-center font-semibold text-sm w-[7rem] h-9 rounded-full bg-white text-purple-500 transition">
                        Join Us
                    </router-link>
                </div>
            </div>

            <!-- side pad -->
            <div v-scroll-reveal
                class="not-shown hidden side-pad rotate-180 md:rotate-90 mt-4 md:mt-0 md:bg-yellow-100 w-44 h-44 items-center justify-center">
                <img src="/src/assets/images/animals/1.png" alt="Animated Dog Image"
                    class="rotate-180 md:-rotate-90 scale-90">
            </div>

        </div>

    </section>

</template>


<style scoped>
.join-btn:hover {
    background-color: var(--main-color);
}

.join-btn:hover i {
    color: var(--main-color);
}

.side-pad:first-child {
    border-radius: 54% 46% 25% 75% / 41% 22% 78% 59%;
}

.side-pad:last-child {
    border-radius: 57% 43% 82% 14% / 55% 59% 41% 45%;
}

@media (min-width: 765px) {
    .special {
        flex-direction: row;
    }

    .center-pad {
        width: 18rem;
        height: 14rem;
        /* -- remove box shadow -- */
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    .side-pad {
        display: flex;
    }
}
</style>