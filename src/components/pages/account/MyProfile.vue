<script setup>

import Header from "@/components/home/Header.vue";
import FooterV2 from "@/components/home/FooterV2.vue";

import Greeting from "@/components/account/Greeting.vue";
import MobileNav from "@/components/account/MobileNav.vue";

</script>



<template>

    <!-- Header Section -->
    <Header></Header>

    <!-- Greeting Section -->
    <Greeting></Greeting>

    <!-- Mobile Nav Section -->
    <MobileNav class="flex md:hidden"></MobileNav>

    <!-- Footer Section -->
    <FooterV2 class="hidden md:flex"></FooterV2>

</template>