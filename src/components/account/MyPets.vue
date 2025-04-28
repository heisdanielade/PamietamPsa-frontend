<script setup>
</script>



<template>


<section id="myPets" class="w-full flex flex-col items-start overflow-hidden px-5 mt-8 md:mt-0 md:p-3 mb-0 md:mb-10 md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg">
  <div class="w-full flex items-center justify-between mb-4">
    <h2 class="text-2xl font-medium text-zinc-800">My Pets</h2>
    <router-link to="/x" class="text-sm font-semibold color-dark opacity-90 hover:opacity-65 transition-all">
        <span class="">View all</span>
        <i class="ri-arrow-right-line ml-2 text-xs font-extrabold"></i>
    </router-link>
  </div>

  <!-- Pet Cards -->
  <div v-scroll-reveal class="not-shown flex overflow-x-auto space-x-4 w-full md:overflow-x-visible md:grid md:grid-cols-2 md:gap-6 md:space-x-0">
    <!-- Pet 1 -->
    <router-link to="/x" 
       class="pet-card flex flex-col items-center text-center flex-shrink-0 min-w-[8.8rem] md:min-w-[8rem] p-4 rounded-2xl border border-white/30 bg-purple-400/30 backdrop-blur-md transition-all hover:backdrop-blur-lg hover:bg-purple-400/40 md:hover:scale-105">
      <img src="/src/assets/images/backgrounds/dog-yellow.png" alt="Bella" class="w-20 h-20 rounded-full object-cover mb-4 shadow-md border-2 border-white">
      <h3 class="text-base font-semibold text-zinc-800">Bella</h3>
      <p class="text-sm text-zinc-700">Golden Retriever</p>
      <p class="text-xs text-zinc-600 mt-1">2 years old</p>
    </router-link>

    <!-- Pet 2 -->
    <router-link to="/x" 
       class="pet-card flex flex-col items-center text-center flex-shrink-0 min-w-[8.8rem] md:min-w-[8rem] p-4 rounded-2xl border border-white/30 bg-pink-300/30 backdrop-blur-md transition-all hover:backdrop-blur-lg hover:bg-pink-300/40 md:hover:scale-105">
      <img src="/src/assets/images/backgrounds/dog-purple.png" alt="Max" class="w-20 h-20 rounded-full object-cover mb-4 shadow-md border-2 border-white">
      <h3 class="text-base font-semibold text-zinc-800">Max</h3>
      <p class="text-sm text-zinc-700">Siberian Husky</p>
      <p class="text-xs text-zinc-600 mt-1">4 years old</p>
    </router-link>

    <!-- Pet 3 -->
    <router-link to="/x" 
       class="pet-card flex flex-col items-center text-center flex-shrink-0 min-w-[8.8rem] md:min-w-[8rem] p-4 rounded-2xl border border-white/30 bg-yellow-300/30 backdrop-blur-md transition-all hover:backdrop-blur-lg hover:bg-yellow-300/40 md:hover:scale-105">
      <img src="/src/assets/images/backgrounds/dog-human.png" alt="Haides" class="w-20 h-20 rounded-full object-cover mb-4 shadow-md border-2 border-white">
      <h3 class="text-base font-semibold text-zinc-800">Haides</h3>
      <p class="text-sm text-zinc-700">Labrador</p>
      <p class="text-xs text-zinc-600 mt-1">7 years old</p>
    </router-link>

    <!-- More pets... -->
  </div>
</section>


</template>


