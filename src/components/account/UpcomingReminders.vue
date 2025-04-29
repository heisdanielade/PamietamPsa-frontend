<script setup>

</script>



<template>
    <section id="reminders" class="w-full flex flex-col items-start overflow-hidden px-5 mt-10 md:p-3 mb-0 md:mb-10 md:max-w-screen-md md:mx-auto lg:mx-auto lg:max-w-screen-lg">
  <div class="w-full flex items-center justify-between mb-4">
    <h2 class="text-2xl font-medium text-zinc-800">Upcoming Reminders</h2>
    <router-link to="/reminders" class="text-sm font-semibold color-dark opacity-90 hover:opacity-65 transition-all">
      <span>View all</span>
      <i class="ri-arrow-right-line ml-2 text-xs font-extrabold"></i>
    </router-link>
  </div>

  <!-- Reminder Cards Grid -->
  <div v-scroll-reveal class="not-shown grid w-full gap-4 grid-cols-2 lg:grid-cols-3">
    
    <!-- Reminder 1 - Vaccination -->
    <div class="reminder-card flex flex-col items-start p-4 rounded-2xl border border-white/30 bg-green-300/30 backdrop-blur-md transition-all hover:backdrop-blur-lg hover:bg-green-300/40 hover:scale-[1.01]">
      <div class="flex items-center mb-2">
        <i class="ri-syringe-line text-lg text-green-900 mr-2"></i>
        <h3 class="text-base font-semibold text-zinc-800">Vaccination</h3>
      </div>
      <p class="text-sm text-zinc-700 mb-1">Bella - Rabies shot</p>
      <p class="text-xs text-zinc-600">May 3, 2025</p>
      <span class="mt-2 text-[0.7rem] font-medium text-green-900 bg-white/40 px-2 py-[2px] rounded-full">Upcoming</span>
    </div>

    <!-- Reminder 2 - Grooming -->
    <div class="reminder-card flex flex-col items-start p-4 rounded-2xl border border-white/30 bg-red-300/30 backdrop-blur-md transition-all hover:backdrop-blur-lg hover:bg-red-300/40 hover:scale-[1.01]">
      <div class="flex items-center mb-2">
        <i class="ri-scissors-cut-line text-lg text-red-900 mr-2"></i>
        <h3 class="text-base font-semibold text-zinc-800">Grooming</h3>
      </div>
      <p class="text-sm text-zinc-700 mb-1">Max - Overdue 3 days</p>
      <p class="text-xs text-zinc-600">Due: April 26</p>
      <span class="mt-2 text-[0.7rem] font-medium text-red-900 bg-white/40 px-2 py-[2px] rounded-full">Overdue</span>
    </div>

    <!-- Reminder 3 - Medication -->
    <div class="reminder-card flex flex-col items-start p-4 rounded-2xl border border-white/30 bg-yellow-200/30 backdrop-blur-md transition-all hover:backdrop-blur-lg hover:bg-yellow-200/40 hover:scale-[1.01]">
      <div class="flex items-center mb-2">
        <i class="ri-capsule-line text-lg text-yellow-800 mr-2"></i>
        <h3 class="text-base font-semibold text-zinc-800">Medication</h3>
      </div>
      <p class="text-sm text-zinc-700 mb-1">Haides - Heartworm pill</p>
      <p class="text-xs text-zinc-600">May 1, 2025</p>
      <span class="mt-2 text-[0.7rem] font-medium text-yellow-900 bg-white/40 px-2 py-[2px] rounded-full">Today</span>
    </div>

  </div>
</section>

</template>