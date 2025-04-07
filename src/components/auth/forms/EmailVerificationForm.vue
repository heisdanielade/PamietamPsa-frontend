<template>
    <div class="max-w-4xl md:max-w-2xl lg:max-w-2xl flex flex-col items-center justify-center mx-auto md:h-screen p-1">
        <div class="flex flex-col items-center justify-center min-h-screen w-full">
            <div
                class="w-full max-w-4xl bg-white md:h-[32.8rem] md:shadow-sm shadow-slate-300 md:rounded-xl overflow-hidden flex flex-col md:flex-row">

                <!-- Left Side: Image -->
                <div class="md:w-1/2 hidden md:block p-1">
                    <img src="@/assets/images/backgrounds/cats.svg" alt="Pet Image"
                        class="w-full h-full object-cover opacity-70 rounded-lg">
                </div>

                <!-- Right Side: Login Form -->
                <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <div class="w-full flex items-center justify-center">
                        <router-link to="/">
                            <logo />
                        </router-link>
                    </div>
                    <p class="text-gray-500 text-center opacity-90 mt-3">Please check your email</p>

                    <!-- OR Separator -->
                    <div class="flex items-center mt-7 mb-6">
                        <div class="flex-1 h-px bg-gray-300"></div>
                        <span class="px-3 text-gray-500 text-sm">OTP</span>
                        <div class="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <!-- Form Inputs -->
                    <form @submit.prevent="handleCodeVerification">
                        <div class="relative mb-2">
                            <div class="flex items-center justify-evenly w-full gap-x-1 pt-12 md:pt-10">
                                <input v-for="(digit, index) in otpArray" :key="index" v-model="otpArray[index]"
                                    type="number"
                                    class="block w-10 h-10 text-center font-medium text-2xl bg-transparent border-b-2 border-x-transparent border-b-gray-500 border-opacity-30 focus:outline-none focus:border-purple-700 disabled:opacity-50 disabled:pointer-events-none"
                                    :id="'otp-' + index" :name="'otp-' + index" placeholder="⚬" min="0" max="9"
                                    @input="handleInput(index, $event)" @keydown.delete="handleDelete(index, $event)"
                                    @paste="handlePaste" ref="otpRefs" />
                            </div>


                            <label for="otp-0" class="absolute top-1 left-0 transition-all text-gray-500 text-sm">
                                Enter 6-digit code
                            </label>

                        </div>


                        <!-- Need help link -->
                        <div class="flex justify-end mt-6">
                            <router-link to="/x" class="text-purple-500 text-[0.825rem] font-medium hover:underline">
                                Need help?
                            </router-link>
                        </div>

                        <!-- Submit button -->
                        <button type="submit"
                            class="action-btn flex items-center justify-center relative left-1/2 -translate-x-1/2 w-44 mt-6 h-10 bg-dark tracking-wide text-sm text-white hover:shadow-sm transition rounded-xl hover:opacity-90 focus:outline-none"
                            :disabled="!isFormValid"
                            :class="{ 'opacity-50 cursor-not-allowed hover:opacity-50': !isFormValid }">
                            <template v-if="!loading">
                                <span class="font-medium text-sm">Verify</span>
                                <span
                                    class="bg-white color-dark text-xs ml-3 font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    <i class="transition ri-arrow-right-line"></i>
                                </span>
                            </template>

                            <span v-else class="animate-spin text-white text-xl">
                                <i class="ri-loader-4-line ri-spin"></i>
                            </span>
                        </button>

                    </form>


                    <p class="mt-5 text-gray-600 text-center text-[0.825rem]">
                        <router-link to="/x" class="text-purple-500 font-medium hover:underline">
                            Resend code
                        </router-link>
                    </p>
                </div>

            </div>

        </div>
    </div>
</template>


<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}
</style>


<script setup>
import { reactive, ref, computed, onMounted, inject } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from '@/stores/tempUser';
import authService from "@/services/auth";
import Logo from "@/components/others/Logo.vue";

const userStore = useUserStore();
const router = useRouter();
const { email, password } = userStore;

// Reactive state
const otpArray = ref(["", "", "", "", "", ""]);
const user = reactive({
    email: "",
    otp: computed(() => otpArray.value.join(""))
});

onMounted(() => {
    user.email = email;
});

const otpRefs = ref([]);
const otpError = ref("Invalid otp");
const loading = ref(false);
const toast = inject("toast");

const handleInput = (index, event) => {
    let value = event.target.value;
    if (!/^\d?$/.test(value)) {
        otpArray.value[index] = ""; // Only allow numbers
        return;
    }
    otpArray.value[index] = value;

    // Move to the next input if a digit is entered
    if (value && index < otpRefs.value.length - 1) {
        otpRefs.value[index + 1].focus();
    }
};

const handleDelete = (index, event) => {
    if (event.key === "Backspace" && !otpArray.value[index] && index > 0) {
        otpRefs.value[index - 1].focus();
    }
};


// Handle paste event
const handlePaste = (event) => {
    event.preventDefault();

    let pasteData = (event.clipboardData || window.clipboardData).getData("text");
    pasteData = pasteData.replace(/\D/g, "").slice(0, 4); // Extract only first 4 digits

    if (pasteData.length === 4) {
        otpArray.value = pasteData.split("");
        otpRefs.value[3].focus(); // Move focus to the last input
    }
};

// Computed OTP value 
const getOtpValue = () => otpArray.value.join("");

defineExpose({ getOtpValue });



// Check if form is valid
const isFormValid = computed(() => otpArray.value.every((digit) => digit !== ""));


const handleCodeVerification = async () => {

    if (!isFormValid.value) return;
    loading.value = true;

    try {
        await authService.verifyEmail(user);
        if (toast) {
            toast.value.showToast("Verified successfully.", "success");
        } else {
            console.error("Toast reference is not available.");
        }
        setTimeout(() => {
            localStorage.setItem("isVerified", true);
            localStorage.removeItem("pendingVerification");
            authService.loginRedirect(router);
        }, 1000);
    } catch (error) {
        // Handle error and show failure toast
        console.error("(e) Error during verification:", error);
        if (toast) {
            toast.value.showToast(error.response.data || "Verification failed.", "error");
        }
    } finally {
        loading.value = false;
    }
};
</script>