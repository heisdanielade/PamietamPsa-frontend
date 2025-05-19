<template>
  <div class="flex flex-col items-center justify-center h-screen bg-white animate-fadeIn">
    <Logo/>

    <div class="loader my-7"></div>

    <p class="text-gray-600 italic text-sm select-none">
      Fetching tails & treats...
    </p>
  </div>
</template>

<script setup>
import Logo from "@/components/others/Logo.vue";
</script>

<style scoped>
.loader {
  --s: 64px;
  opacity: 0.6;
  width: var(--s);
  aspect-ratio: 2;
  --_g: #c500c5 90%,#0000;
  background: 
    radial-gradient(farthest-side,var(--_g)) 0   50%/25% 50%,
    radial-gradient(farthest-side at bottom,var(--_g)) 50%  calc(50% - var(--s)/16)/25% 25%,
    radial-gradient(farthest-side at top   ,var(--_g)) 50%  calc(50% + var(--s)/16)/25% 25%,
    radial-gradient(farthest-side at bottom,var(--_g)) 100% calc(50% - var(--s)/16)/25% 25%,
    radial-gradient(farthest-side at top   ,var(--_g)) 100% calc(50% + var(--s)/16)/25% 25%;
  background-repeat: no-repeat;
  animation: l14 1s infinite;
}
@keyframes l14 {
    25%  {background-position:0    50%,50% 0,50% 100%,100% 0,100% 100%}
    50%  {background-position:100% 50%,0   0,0   100%,50%  0,50%  100%}
    75%,
    100% {background-position:100% 50%,0 calc(50% - var(--s)/16),0 calc(50% + var(--s)/16),50% calc(50% - var(--s)/16),50% calc(50% + var(--s)/16)}
}
</style>


