<script setup>
import { ref } from "vue";

const user = {
    initials: "H",
    hasProfileImage: true,
    profileImage: "",
}

const isVisible = ref(false);
const toggle = () => {
    isVisible.value = !isVisible.value;
};

</script>



<template>
    <nav class="fixed z-50 bottom-0 w-full xh-24 flex items-center xbg-red-400 overflow-hidden pt-10 pb-3">
        <div class="bg-dark shadow w-full h-[4.3rem] text-gray-100 rounded-3xl px-5 pt-4 pb-3 mx-3 flex items-center justify-between max-w-screen-lg">

                <!-- Home button -->
                <button @click="" type="button" id="goToHome"
                    class="active inline-flex flex-col items-center justify-center p-1 w-[2.125rem] h-[2.125rem] focus:outline-none">
                    <i class="text-lg fa-solid fa-house"></i>
                                        
                    <span class="function x-translate-y-1 xbg-blue-400 text-[0.65rem] text-center">
                        Home
                    </span>

                    <!-- Screen reader only -->

                    <span class="sr-only">Go to home</span>
                </button>


                <!-- Pets button -->
                <button @click="" type="button" id="goToPets"
                    class="inline-flex flex-col items-center justify-center p-1 w-[2.125rem] h-[2.125rem] focus:outline-none">
                    <i class="text-lg fa-solid fa-dog"></i>
                    
                    <span class="function x-translate-y-1 xbg-blue-400 text-[0.65rem] text-center">
                        Pets
                    </span>

                    <!-- Screen reader only -->
                    <span class="sr-only">Show my pets</span>
                </button>


                <!-- Add button -->
                <button @click="" type="button" id="goToReminders"
                    class="add-btn relative inline-flex flex-col items-center justify-center p-7 w-[2.125rem] h-[2.125rem] -translate-y-7 rounded-full bg-purple-400 border-[4.5px] border-white focus:outline-none">
                    <i class="text-xl fa-solid fa-plus"></i>
                                        
                    <span class="hidden function x-translate-y-1 xbg-blue-400 text-[0.65rem] text-center">
                        Add
                    </span>

                    <!-- curved corners -->
                    <span class="left-corner absolute top-[1.2rem] -left-[1.41rem] shadow-[0_-4px_0_0_white] bg-dark w-5 h-5 rounded-tr-3xl">
                        <span class="absolute -top-[0.1rem] left-3 z-20 w-1 h-1 bg-pink-200 rounded-full"></span>
                    </span>

                    <span class="right-corner absolute top-[1.2rem] -right-[1.41rem] shadow-[0_-4px_0_0_white] bg-dark w-5 h-5 rounded-tl-3xl">
                        <span class="absolute -top-[0.1rem] right-3 z-20 w-1 h-1 bg-yellow-200 rounded-full"></span>
                    </span>

                    

                    <!-- Screen reader only -->

                    <span class="sr-only">Show reminders</span>
                </button>


                <!-- ALerts button -->
                <button @click="" type="button" id="goToAlerts"
                    class="inline-flex flex-col items-center justify-center p-1 w-[2.125rem] h-[2.125rem] focus:outline-none">
                    <i class="text-lg fa-solid fa-bell"></i>
                                        
                    <span class="function x-translate-y-1 xbg-blue-400 text-[0.65rem] text-center">
                        Alerts
                    </span>

                    <!-- Screen reader only -->

                    <span class="sr-only">Show Alerts</span>
                </button>


                <!-- Profile button -->
                <button @click="" type="button" id="goToProfile"
                    class="inline-flex flex-col items-center justify-center p-1 w-[2.125rem] h-[2.125rem] focus:outline-none">
                    <i class="text-lg fa-solid fa-user"></i>

                    <span class="function x-translate-y-1 xbg-blue-400 text-[0.65rem] text-center">
                        Profile
                    </span>

                    <!-- Screen reader only -->
                    <span class="sr-only">Go to Profile</span>
                </button>

        </div>
    </nav>

</template>



<style scoped>
.active{
    --tw-text-opacity: 1;
    color: rgb(216 150 254 / var(--tw-text-opacity, 1))
}


/* before */
.add-btn .left-corner::before,
.add-btn .right-corner::before{
    content: "";
    position: absolute;
    top: 0.1px;
    width: 0.2rem;
    height: 1rem;
    background-color: var(--main-color);
}
.add-btn .left-corner::before{
    left: -0.1rem;
}
.add-btn .right-corner::before{
    right: -0.1rem;
}

/* after */
.add-btn .left-corner::after,
.add-btn .right-corner::after{
    content: "";
    position: absolute;
    top: -0.4px;
    width: 0.6rem;
    height: 0.65rem;
    background-color: white;
    border: 2px solid white;
}
.add-btn .left-corner::after{
    left: 0.8rem;
    border-bottom-left-radius: 15rem;
}
.add-btn .right-corner::after{
    right: 0.8rem;
    border-bottom-right-radius: 15rem;
}
</style>