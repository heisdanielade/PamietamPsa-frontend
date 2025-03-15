
<template>
    <section
        class="preview relative flex items-center flex-col md:flex-row overflow-hidden mx-5 mt-10 mb-20 md:my-12 h-[45rem] md:h-[45rem] rounded-b-3xl md:rounded-none md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg"
        id="preview">

        <!-- Main text -->
        <div
            class="text h-full relative md:absolute top-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">
            <h1 v-scroll-reveal class="not-shown text-[9.25rem] opacity-100 font-semibold">
                365
            </h1>
            <h2 v-scroll-reveal class="not-shown text-7xl font-semibold opacity-100">
                days
            </h2>
            <p v-scroll-reveal class="not-shown text-2xl font-medium opacity-100">
                of happy pets
            </p>
        </div>


        <!-- Images -->
        <div class="images xbg-green-200 md:mt-28 flex items-center -translate-x-[1.25rem] md:-translate-x-10 lg:-translate-x-14">
            <img v-scroll-reveal src="/src/assets/images/backgrounds/webp/dog-purple.webp" alt="Dog with colored background"
                class="not-shown w-[14rem] h-full md:w-[16rem] rounded-[1.25rem] opacity-60 mr-8">
            <img v-scroll-reveal src="/src/assets/images/backgrounds/webp/dog-yellow.webp" alt="Dog with colored background"
                class="not-shown w-[14rem] h-full md:w-[16rem] rounded-[1.25rem] opacity-60 mr-8">
            <img v-scroll-reveal src="/src/assets/images/backgrounds/webp/dog-green.webp" alt="Dog with colored background"
                class="not-shown w-[14rem] h-full md:w-[16rem] rounded-[1.25rem] opacity-60 mr-8">
            <img v-scroll-reveal src="/src/assets/images/backgrounds/webp/dog-orange.webp" alt="Dog with colored background"
                class="hidden md:flex not-shown w-[14rem] h-full md:w-[16rem] rounded-[1.25rem] opacity-60">
        </div>

    </section>

</template>



<style scoped>
/* -- override scroll reveal opacity */
.shown {
    opacity: 0.7 !important;
}

/* -- images -- */
img:first-child {
    transform: translateY(1rem);
}

img:nth-child(2) {
    transform: translateY(3rem);
}

img:nth-child(3) {
    transform: translateY(5rem);
}

img:nth-child(4) {
    transform: translateY(2rem);
}
@media (max-width: 500px) {
  .images{
    transform: translateX(-2.9rem);
  }
}


/* -- text -- */
.text h1 {
    /* background: linear-gradient(180deg, #a465bd 0%, #e7d2f1 50%, #f8f8f8 74%); */

    background: linear-gradient(180deg, #be7cd8 0%, #ecdaf5 50%, #ffffff 75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text h2 {
    color: #ead6f3;
    transform: translateY(-5.15rem);
}

.text p {
    color: #4f1669;
    transform: translateY(-5rem);
}


</style>