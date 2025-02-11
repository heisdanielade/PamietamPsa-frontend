
<script setup>

const user = {
    username: "Jasmine",
}
</script>



<template>
    <div class="flex items-center w-full h-20 xbg-red-400 overflow-hidden px-5 md:p-3 mt-24 md:mt-28 mb-0 md:mb-10 md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg">
        <h1 class="hi font-medium text-xl md:text-3xl text-gray-600">
            Hi {{ user.username }}!
        </h1>
    </div>
</template>
