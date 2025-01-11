<script setup>
</script>

<template>
    <section class="special overflow-hidden mt-11 mb-20 mx-5 md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg sm:p-8 md:p-8" id="special">
        <div class="flex items-center justify-evenly bg-purple-500 rounded-[1rem] select-none pt-14 pb-14 md:pr-10 md:pl-10 lg:pr-10 lg:pl-10">

            <div class="pet hidden md:flex lg:flex">
                <img class="w-24 h-24" src="/src/assets/images/animals/15.png" alt="Pet">
            </div>

            <div class="center text-center flex flex-col items-center justify-center w-full">
                <h1 class="flex items-center justify-center text-center text-3xl text-gray-50 font-semibold w-full lg:text-5xl md:text-4xl">
                    <span>Get special gift</span>&nbsp;
                    <i class="text-pink-200 text-xl fa-solid fa-gift"></i>
                </h1>
                <p class="text-[0.675rem] md:text-xs lg:text-sm ml-8 mr-8 text-wrap lg:text-[0.9rem] text-gray-50 mt-4">
                    Unlock a surprise for your pet with your sign-up today!
                </p>

                <router-link to="/u/signup" class="mt-5 flex items-center justify-center font-bold text-sm w-[7rem] h-9 rounded-full bg-white text-purple-500">
                    Join Us
                </router-link>
            </div>

            <div class="pet right hidden md:flex lg:flex">
                <img class="w-28 h-28" src="/src/assets/images/animals/12.png" alt="Pet">
            </div>
        </div>
    </section>

</template>

<style scoped>
a{
    transition: all 0.3s ease;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}
a:hover {
    color: white;
    background-color: rgb(39, 39, 39);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

</style>