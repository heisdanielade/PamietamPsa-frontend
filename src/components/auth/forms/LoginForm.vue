<script setup>
import Logo from "@/components/others/Logo.vue";
</script>



<template>
  <div class="xmt-10 xmd:mt-0 max-w-4xl md:max-w-2xl lg:max-w-2xl flex flex-col items-center justify-center mx-auto md:h-screen p-1">
    <div class="custom-cursor md:grid md:grid-cols-3 w-full mx-auto items-center  shadow-sm md:shadow-slate-300 rounded-3xl overflow-hidden">

      <!-- Left Section -->
      <div
        class="left-side max-md:order-1 flex flex-col items-center md:items-start space-y-8 max-md:mt-16 min-h-full rounded-t-3xl md:rounded-none lg:px-8 p-5">
        <div class="w-full">
          <router-link to="/" class="flex items-center text-gray-200">
            <Logo/>
          </router-link>
        </div>
        <div class="h-6 w-full"></div>
      </div>


      <!-- Form Section -->
      <form @submit.prevent class="bg-white md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto">
        <div class="mb-6">
          <h3 class="text-gray-800 text-xl font-semibold">Access your account</h3>
        </div>

        <div class="space-y-6">
          <!-- Email Input -->
          <div>
            <label for="email" class="text-gray-600 font-medium text-sm mb-2 block">Email Address</label>
            <div class="relative flex items-center">
              <input id="email" name="email" type="email" required
                class="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-purple-400"
                placeholder="Enter your email" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                class="custom-cursor w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                  </clipPath>
                </defs>
                <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path fill="none" stroke-miterlimit="10" stroke-width="40"
                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                    data-original="#000000"></path>
                  <path
                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                    data-original="#000000"></path>
                </g>
              </svg>
            </div>
          </div>

          <!-- Password Input -->
          <div>
            <label for="password" class="text-gray-600 font-medium text-sm mb-2 block">Password</label>
            <div class="relative flex items-center">
              <input id="password" name="password" type="password" required
                class="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-purple-400"
                placeholder="Enter your password" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                class="custom-cursor w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"></path>
              </svg>
            </div>
          </div>

          <!-- Remember Me Checkbox -->
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
              class="custom-cursor h-4 w-4 shrink-0 rounded-2xl" />

            <label for="remember-me" class="ml-2 custom-cursor block text-sm text-gray-600">
              <span class="font-medium">Remember me</span>
            </label>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="mt-8 w-full xbg-blue-300 flex items-center justify-center">
          <button type="submit"
            class="action-btn flex items-center justify-center w-44 py-2.5 px-4 bg-dark tracking-wide text-sm text-white hover:shadow-sm transition rounded-xl  hover:bg-purple-500 focus:outline-none">
            <span class="font-medium text-sm xuppercase">
              Login
            </span>
            <span
              class="bg-white color-dark text-xs ml-3 font-bold rounded-full w-5 h-5 flex items-center justify-center">
              <i class="transition ri-arrow-right-line"></i>
            </span>
          </button>
        </div>


        <p class="text-gray-600 text-sm mt-6 text-center">
          Don't have an account?
          <router-link to="/u/signup" class="text-purple-500 font-medium ml-1 transition hover:underline hover:text-purple-700">
            Sign up
          </router-link>
        </p>

      </form>

    </div>

    <!-- Info -->
    <div class="mt-6 mb-10 p-5 flex items-center justify-center text-sm font-normal text-gray-600">
      <div class="text-center">
        By proceeding, you agree to our 
      <router-link to="/x" class="font-medium text-purple-500 transition hover:underline hover:text-purple-700">
        Terms of Use
      </router-link>
       and 
       <router-link to="/x" class="font-medium text-purple-500 transition hover:underline hover:text-purple-700">
        Privacy Policy
      </router-link>.
      </div>
    </div>

  </div>
</template>


<style scoped>
.left-side{
  opacity: 0.775;
  background: url('@/assets/images/backgrounds/webp/dog-purple.webp') no-repeat center / cover;
}
/* .action-btn:hover {
  color: var(--main-color);
} */
</style>