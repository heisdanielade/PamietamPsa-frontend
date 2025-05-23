<script setup>

import Header from "@/components/reusable/Header.vue";
import Footer from "@/components/reusable/Footer.vue";
import Greeting from "@/components/account/Greeting.vue";
import MyPets from "@/components/account/MyPets.vue";
import UpcomingReminders from "@/components/account/UpcomingReminders.vue";
import Sidebar from "@/components/account/Sidebar.vue";
import MobileNav from "@/components/account/MobileNav.vue";

</script>



<template>
    
    <!-- Header Section -->
    <Header></Header>

    <div
        class="flex items-start mb-48 md:mb-0 mt-[7.5rem] md:mt-32 md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg">
        <!-- Sidebar Section -->
        <Sidebar class="hidden lg:flex relative z-40"></Sidebar>

        <div class="md:ml-5 content relative z-30 w-full flex items-start flex-col">
            <!-- Greeting & Promotion Section -->
            <Greeting></Greeting>
            <!-- MyPets Section -->
            <MyPets></MyPets>
            <!-- Upcoming Reminders Section -->
            <UpcomingReminders></UpcomingReminders>
        </div>

    </div>


    <!-- Mobile Nav Section -->
    <MobileNav class="flex lg:hidden"></MobileNav>

    <!-- Footer Section -->
    <Footer class="hidden md:flex"></Footer>

</template>