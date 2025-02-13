<script setup>

import Header from "@/components/home/Header.vue";
import FooterV2 from "@/components/home/FooterV2.vue";
import Greeting from "@/components/account/Greeting.vue";
import MyPets from "@/components/account/MyPets.vue";
import Sidebar from "@/components/account/Sidebar.vue";
import MobileNav from "@/components/account/MobileNav.vue";

</script>



<template>

    <!-- Header Section -->
    <Header></Header>

    <div
        class="flex items-start mt-[7.5rem] md:mt-32 md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg">
        <!-- Sidebar Section -->
        <Sidebar class="hidden md:flex"></Sidebar>

        <div class="content w-full flex items-start flex-col">
            <!-- Greeting Section -->
            <Greeting></Greeting>
            <!-- MyPets Section -->
            <MyPets></MyPets>

        </div>
    </div>


    <!-- Mobile Nav Section -->
    <MobileNav class="flex md:hidden"></MobileNav>

    <!-- Footer Section -->
    <FooterV2 class="hidden md:flex"></FooterV2>

</template>