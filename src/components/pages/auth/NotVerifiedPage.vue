<template>
    <div class="max-w-4xl md:max-w-2xl lg:max-w-2xl flex flex-col items-center justify-center mx-auto md:h-screen p-1">
        <div class="flex flex-col items-center justify-center min-h-screen w-full">
            <div
                class="w-full max-w-4xl bg-white md:h-[28rem] md:shadow-sm shadow-slate-300 md:rounded-xl overflow-hidden flex flex-col md:flex-row">

                <!-- Left Side: Image -->
                <div class="md:w-1/2 hidden md:block p-1">
                    <img src="@/assets/images/backgrounds/cats.svg" alt="Illustration"
                        class="w-full h-full object-cover opacity-70 rounded-lg" />
                </div>

                <!-- Right Side: Message -->
                <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <div class="w-full flex items-center justify-center mb-4">
                        <router-link to="/">
                            <logo />
                        </router-link>
                    </div>

                    <h2 class="text-2xl font-semibold text-center text-gray-800">Verify your email</h2>
                    <p class="text-center text-gray-600 mt-2 text-sm leading-6">
                        Your email address hasn’t been verified.
                    </p>

                    <!-- Call to Action Button -->
                    <button type="button" @click="handleResendVerificationEmail"
                        class="action-btn flex items-center justify-center relative left-1/2 -translate-x-1/2 w-44 mt-6 h-10 bg-dark tracking-wide text-sm text-white hover:shadow-sm transition rounded-xl hover:opacity-90 focus:outline-none"
                        :disabled="loading.value === true" :class="{
                            'opacity-50 cursor-not-allowed hover:opacity-50':
                            loading.value === true,
                        }">
                        <template v-if="!loading">
                            <span class="font-medium text-sm">Proceed</span>
                            <span
                                class="bg-white color-dark text-xs ml-3 font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                <i class="transition ri-arrow-right-line"></i>
                            </span>
                        </template>

                        <span v-else class="animate-spin text-white text-xl">
                            <i class="ri-loader-4-line ri-spin"></i>
                        </span>
                    </button>


                    <div class="mt-6 text-center text-[0.825rem] text-gray-500">
                        Something went wrong?
                        <router-link to="/x" class="text-purple-500 font-medium hover:underline">
                            Get help
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- Footer Note -->
            <div class="mt-6 mb-10 p-5 text-[0.825rem] font-normal text-gray-600 text-center">
                By proceeding, you agree to our
                <router-link to="/legal/terms"
                    class="font-medium text-purple-500 hover:underline hover:text-purple-700">
                    Terms
                </router-link>
                and
                <router-link to="/legal/policy"
                    class="font-medium text-purple-500 hover:underline hover:text-purple-700">
                    Privacy Policy
                </router-link>.
            </div>
        </div>
    </div>
</template>


<script setup>
import authService from "@/services/auth";
import { useUserStore } from "@/stores/tempUser";
import { ref, onMounted, inject, reactive } from "vue";
import { useRouter } from "vue-router";
import Logo from "@/components/others/Logo.vue";

const router = useRouter();
const loading = ref(false);
const toast = inject("toast");

const userStore = useUserStore();

const user = reactive({ email: "" });


user.email = userStore.email;



const handleResendVerificationEmail = async () => {
    loading.value = true;
    try {
        await authService.resendVerificationEmail(user);
        if (toast) {
            toast.value.showToast("Verification email sent.", "success");
        } else {
            toast.error("Process failed. Retry.");
        }
        setTimeout(() => {
            router.push("/u/verify-email");
        }, 500);
        console.log("(i) Resend verification email process triggered.");
    } catch (error) {
        console.error("(e) Error during process:", error);
        if (toast && error.response) {
            toast.value.showToast(error.response.data.message || "Process failed, Retry.", "error");
        }
    } finally {
        loading.value = false;
    }
};

</script>
