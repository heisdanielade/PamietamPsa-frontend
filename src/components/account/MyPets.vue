<script setup>
</script>




<template>

<section id="myPets" class="bg-blue-400 w-full hidden xflex flex-col items-start overflow-hidden px-5 md:p-3 mb-0 md:mb-10 md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg">
    <h2 class="mb-4">
        My Pets
    </h2>


    <div class="content">
        <div class="card relative z-20  w-28 h-28 bg-gray-50 shadow-sm rounded-xl">

        </div>
    </div>


</section>

</template>



<style scoped>
.card::before{
    /* display: none; */
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 7.25rem;
    height: 7.25rem;
    background-color: red;
    border-radius: 0.75rem;
    z-index: 15;
}
</style>