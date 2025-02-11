<script setup>

const user = {
    username: "Agnieszka",
}
</script>



<template>
    <div
        class="w-full h-20 xbg-blue-400 overflow-hidden px-5 md:p-3 mb-0 md:mb-10 md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg">

        <h1 class="font-semibold text-2xl md:text-2xl color-dark xgradient-text-1">
                Hello, {{ user.username }}!
        </h1>

    </div>
</template>
