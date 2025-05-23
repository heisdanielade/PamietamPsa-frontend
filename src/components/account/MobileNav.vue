<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const isVisible = ref(false);

const toggleAddPopUp = () => {
    isVisible.value = !isVisible.value;
};


const route = useRoute();
// Helper computed properties for route-specific logic
const isHomePage = computed(() => route.name === "MyProfile");
const isSettingsPage = computed(() => route.name === "Settings");


</script>



<template>
    <nav translate="no"
        class="fixed z-50 bottom-0 w-full flex items-center overflow-hidden pt-24 pb-3">

        <!-- Floating Add buttons for Pet & Reminder -->
        <Transition name="popup">
            <div v-if="isVisible"
                class="absolute shadow z-40 flex items-center justify-evenly p-1 top-1 left-1/2 -translate-x-1/2 w-28 h-14 bg-dark text-gray-100 rounded-full">

                <!-- Add Pet button -->
                <router-link to="/u?form=addPet"
                    class="inline-flex flex-col items-center justify-center p-1 w-[2.125rem] h-[2.125rem] focus:outline-none hover:text-purple-300">
                    <i class="text-xl fa-solid fa-cat"></i>
                    <span class="hidden function x-translate-y-1 text-[0.65rem] text-center">
                        Pet
                    </span>
                    <!-- Screen reader only -->
                    <span class="sr-only">Add new pet</span>
                </router-link>

                <!-- Add Reminder button -->
                <router-link to="/u/profile"
                    class="inline-flex flex-col items-center justify-center p-1 w-[2.125rem] h-[2.125rem] focus:outline-none hover:text-purple-300">
                    <i class="text-xl fa-solid fa-bell"></i>
                    <span class="hidden function x-translate-y-1 text-[0.65rem] text-center">
                        Alert
                    </span>
                    <!-- Screen reader only -->
                    <span class="sr-only">Add new alert</span>
                </router-link>

                <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 bg-dark w-4 h-4 rounded-2xl">

                </div>
            </div>
        </Transition>


        <!-- Other nav buttons -->
        <div class="relative z-20 bg-dark shadow w-full h-[4.3rem] text-gray-100 rounded-3xl px-5 pt-4 pb-3 mx-3 flex items-center justify-between max-w-screen-lg">

            <!-- Home button -->
            <router-link to="/u/profile" id="goToHome"
                :class="[
                    isHomePage ? 'active' : '',
                ]"
                class="inline-flex flex-col items-center justify-center p-1 w-[2.125rem] h-[2.125rem] focus:outline-none">
                <i class="text-lg fa-solid fa-house"></i>
                <span class="function x-translate-y-1 text-[0.65rem] text-center">
                    Home
                </span>
                <!-- Screen reader only -->
                <span class="sr-only">Go to home</span>
            </router-link>


            <!-- Pets button -->
            <button @click="" type="button" id="goToPets"
                class="inline-flex flex-col items-center justify-center p-1 w-[2.125rem] h-[2.125rem] focus:outline-none">
                <i class="text-lg fa-solid fa-cat"></i>
                <span class="function x-translate-y-1 text-[0.65rem] text-center">
                    Pets
                </span>
                <!-- Screen reader only -->
                <span class="sr-only">Show my pets</span>
            </button>


            <!-- Add button -->
            <button @click="toggleAddPopUp" type="button" id="goToReminders"
                class="add-btn relative z-50 inline-flex flex-col items-center justify-center p-7 w-[2.125rem] h-[2.125rem] -translate-y-7 rounded-full bg-purple-400 border-[4.5px] border-white focus:outline-none">
                <i
                    class="text-xl fa-solid fa-plus transition-transform duration-300"
                    :class="isVisible ? 'rotate-45' : 'rotate-0'">
                </i>
                <span class="hidden function x-translate-y-1 text-[0.65rem] text-center">
                    Add
                </span>
                <!-- curved corners -->
                <span
                    class="left-corner absolute top-[1.22rem] -left-[1.41rem] shadow-[0_-5.5px_0_0_white] bg-dark w-5 h-5 rounded-tr-3xl">
                    <span class="absolute -top-[0.1rem] left-3 z-20 w-1 h-1 bg-pink-200 rounded-full"></span>
                </span>
                <span
                    class="right-corner absolute top-[1.22rem] -right-[1.41rem] shadow-[0_-5.5px_0_0_white] bg-dark w-5 h-5 rounded-tl-3xl">
                    <span class="absolute -top-[0.1rem] right-3 z-20 w-1 h-1 bg-yellow-200 rounded-full"></span>
                </span>
                <!-- Screen reader only -->
                <span class="sr-only">Show reminders</span>
            </button>


            <!-- ALerts button -->
            <button @click="" type="button" id="goToAlerts"
                class="inline-flex flex-col items-center justify-center p-1 w-[2.125rem] h-[2.125rem] focus:outline-none">
                <i class="text-lg fa-solid fa-bell"></i>
                <span class="function x-translate-y-1 text-[0.65rem] text-center">
                    Alerts
                </span>
                <!-- Screen reader only -->
                <span class="sr-only">Show Alerts</span>
            </button>


            <!-- Settings button -->
            <router-link to="/u/settings" id="goToSettings"
                :class="[
                    isSettingsPage ? 'active' : '',
                ]"
                class="inline-flex flex-col items-center justify-center p-1 w-[2.125rem] h-[2.125rem] focus:outline-none">
                <i class="text-lg fa-solid fa-gear"></i>
                <span class="function x-translate-y-1 text-[0.65rem] text-center">
                    Settings
                </span>
                <!-- Screen reader only -->
                <span class="sr-only">Go to Account Settings</span>
            </router-link>

        </div>

        <!-- White middle underlay  -->
        <div class="absolute z-0 top-[5.55rem] left-1/2 -translate-x-1/2  bg-white rounded-full w-32 h-5"></div>

    </nav>

</template>



<style scoped>
.active {
    --tw-text-opacity: 1;
    color: rgb(216 150 254 / var(--tw-text-opacity, 1))
}

/* Popup Slide up and expand animation */
.popup-enter-active, .popup-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.popup-enter-from {
  transform: translate(-50%, 100%) scale(0.4);
  opacity: 0;
}

.popup-enter-to {
  transform: translate(-50%, 0) scale(1);
  opacity: 1;
}

.popup-leave-from {
  transform: translate(-50%, 0) scale(1);
  opacity: 1;
}

.popup-leave-to {
  transform: translate(-50%, 100%) scale(0.4);
  opacity: 0;
}

/* before */
.add-btn .left-corner::before,
.add-btn .right-corner::before {
    content: "";
    position: absolute;
    top: 0.2px;
    width: 0.2rem;
    height: 1rem;
    background-color: var(--main-color);
}

.add-btn .left-corner::before {
    left: -0.1rem;
}

.add-btn .right-corner::before {
    right: -0.1rem;
}

/* after */
.add-btn .left-corner::after,
.add-btn .right-corner::after {
    content: "";
    position: absolute;
    top: -0.8px;
    width: 0.6rem;
    height: 0.65rem;
    background-color: white;
    border: 2px solid white;
}

.add-btn .left-corner::after {
    left: 0.8rem;
    border-bottom-left-radius: 15rem;
}

.add-btn .right-corner::after {
    right: 0.8rem;
    border-bottom-right-radius: 15rem;
}
</style>