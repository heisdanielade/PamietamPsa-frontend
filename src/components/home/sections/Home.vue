<script setup>
</script>

<template>
    <section class="home mt-8" id="home">
        <div class="flex flex-col items-center justify-center w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="text-center flex flex-col items-center justify-center w-full">
                <h1 class="text-3xl font-semibold w-full lg:text-7xl md:text-6xl">
                    Caring for your pets, <br>made simple and<br> stress-free.
                </h1>
            </div>

            <div class="flex flex-col items-center text-center mt-5">
                <p class=" text-xs lg:text-[0.9rem] text-gray-600 mb-7">
                    From vet visits to daily reminders, keep your<br> pet happy and healthy.
                </p>
                <router-link to="/auth/signup" class="flex items-center justify-center bg-purple-300 w-[12rem] h-11 rounded-full">
                    <span class="font-semibold">Get Started Now</span>
                    <span class="bg-white text-sm ml-2 font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        <i class="ri-arrow-right-line"></i>
                    </span>
                </router-link>
            </div>

            <div class="relative mt-20 flex flex-wrap justify-center items-center gap-4">
                <div class="box relative flex items-center justify-center rounded-[1.75rem] w-[12rem] h-[12rem] bg-pink-200">
                    <img class="pet absolute w-[15rem] h-[15rem]" src="/src/assets/images/animals/7.png" alt="Pet">
                </div>

                <div class="box relative flex items-center justify-center ml-5 mr-5 rounded-[1.75rem] w-[13rem] h-[11rem] bg-purple-200">
                    <img class="pet absolute w-[32rem] h-[15rem]" src="/src/assets/images/animals/16.png" alt="Pet">
                </div>

                <div class="box relative flex items-center justify-center rounded-[1.75rem] w-[12rem] h-[12.5rem] bg-yellow-100">
                    <img class="pet absolute w-[15rem] h-[14rem]" src="/src/assets/images/animals/8.png" alt="Pet">
                </div>
            </div>
        </div>


    </section>

</template>


<style scoped>
.home h1 {
    background: #1b0525;
    background: repeating-linear-gradient(to right, #1b0525 0%, #450f5e 50%, #8f45a3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.home .box:nth-child(1),
.home .box:nth-child(3){
    transform: translateY(2rem);
}
.home .box:nth-child(2) img{
    transform: translateY(-2rem);
}
.home .box:nth-child(3) img{
    transform: translateY(-0.5rem);
}


</style>