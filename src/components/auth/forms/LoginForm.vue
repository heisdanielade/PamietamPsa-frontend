<script setup>
import logoSrc from '@/assets/images/logos/logo.png';
import AuthBackground from "@/components/others/PawBackground.vue";
import { useProjectStore } from '@/stores/projectStore';

const projectName = useProjectStore().projectName;
</script>

<template>
    <div class="max-w-4xl md:max-w-2xl lg:max-w-2xl flex items-center justify-center mx-auto md:h-screen p-1">
      <div class="md:grid md:grid-cols-3 w-full mx-auto items-center shadow-[0_2px_4px_-3px_rgba(6,81,237,0.3)] rounded-2xl overflow-hidden">
        <!-- Left Section (Logo and Tagline) -->
        <div class="max-md:order-1 flex flex-col justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
          <div class="w-full">
            <router-link to="/" class="flex items-center justify-evenly">
              <img :src="logoSrc" alt="Logo" class="w-10 h-9 mx-auto" />
              <h4 class="text-white text-2xl">{{ projectName }}</h4>
            </router-link>
          </div>
          <div>
            <h4 class="font-light text-white text-base">My Pet, happy and healthy.</h4>
          </div>
        </div>

        <!-- Form Section -->
        <form @submit.prevent class="bg-white md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto">
          <div class="mb-6">
            <h3 class="text-gray-800 text-xl font-bold">Access your account</h3>
          </div>

          <div class="space-y-6">
            <!-- Email Input -->
            <div>
              <label for="email" class="text-gray-600 text-sm mb-2 block">Email Address</label>
              <div class="relative flex items-center">
                <input id="email" name="email" type="email" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500" placeholder="Enter your email" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                  </g>
                </svg>
              </div>
            </div>

            <!-- Password Input -->
            <div>
              <label for="password" class="text-gray-600 text-sm mb-2 block">Password</label>
              <div class="relative flex items-center">
                <input id="password" name="password" type="password" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500" placeholder="Enter your password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>

            <!-- Remember Me Checkbox -->
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-purple-500 focus:ring-purple-500 border-gray-300 rounded" />
              <label for="remember-me" class="ml-2 block text-sm text-gray-600">
                <span class="font-medium">Remember me</span>
              </label>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="mt-8">
            <button type="submit" class="w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
              Login
            </button>
          </div>
          <p class="text-gray-600 text-sm mt-6 text-center">Don't have an account? <a href="javascript:void(0);" class="text-purple-500 font-medium hover:underline ml-1">Sign up</a></p>
        </form>
      </div>
    </div>
</template>

