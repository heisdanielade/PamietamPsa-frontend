<template>
  <div class="relative w-full">
    <!-- Scattered dog paw icons -->
    <img
      v-for="(position, index) in positions"
      :key="index"
      src="/src/assets/images/icons/webp/paws.webp"
      class="absolute w-6 h-6 opacity-50"
      :style="{ top: position.top, left: position.left }"
      alt="Dog's paw icon"
      @contextmenu.prevent
    />

    <div class="relative inset-0">
      <slot></slot>
    </div>
  </div>
</template>


<script setup>
import { reactive, onMounted } from "vue";

// Number of dog paw icons to display
const numIcons = 4;


const positions = reactive([]);


const generateNonCollidingPositions = () => {
  const existingPositions = [];
  const size = 48; // Size of the dog paw icon in pixels

  for (let i = 0; i < numIcons; i++) {
    let position;
    let collision;

    do {
      collision = false;
      position = {
        top: Math.random() * (100 - 10) + 5, // Avoid edges with 5% padding
        left: Math.random() * (100 - 10) + 5,
      };

      // Check for collisions
      for (const existing of existingPositions) {
        const distance = Math.sqrt(
          Math.pow(existing.left - position.left, 2) +
            Math.pow(existing.top - position.top, 2)
        );

        
        if (distance < (size / window.innerWidth) * 100) {
          collision = true;
          break;
        }
      }
    } while (collision);

    existingPositions.push(position);
    positions.push({
      top: `${position.top}%`,
      left: `${position.left}%`,
    });
  }
};

onMounted(() => {
  generateNonCollidingPositions();
});
</script>

