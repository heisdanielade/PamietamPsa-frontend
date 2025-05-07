<template>
  <div class="max-w-4xl md:max-w-2xl lg:max-w-2xl flex flex-col items-center justify-center mx-auto md:h-screen p-1">
    <div class="flex flex-col items-center justify-center min-h-screen w-full">
      <div
        class="w-full max-w-4xl bg-white md:h-[32.8rem] md:shadow-sm shadow-slate-300 md:rounded-xl overflow-hidden flex flex-col md:flex-row">

        <!-- Left Side: Image -->
        <div class="md:w-1/2 hidden md:block p-1">
          <img src="@/assets/images/backgrounds/cats.svg" alt="Pet Image"
            class="w-full h-full object-cover opacity-70 rounded-lg" />
        </div>

        <!-- Right Side: Form -->
        <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div class="w-full flex items-center justify-center">
            <router-link to="/">
              <Logo />
            </router-link>
          </div>
          <p class="text-gray-500 text-center opacity-90 mt-3">
            Let's meet your pet
          </p>
          <p class="hidden text-gray-400 text-center text-sm mt-1">
            Provide pet details to register them
          </p>


          <!-- Form Inputs -->
          <form @submit.prevent="handleAddPet" class="mt-4">

            <!-- Profile Image Upload -->
            <div class="mb-2">
              <label class="block text-xs text-gray-600 mb-1"
                :class="{'text-purple-700': imageFile}">Profile Image</label>
              <div @dragover.prevent @drop.prevent="handleDrop" @click="triggerFileInput"
                class="w-full flex items-center gap-3 border border-dashed border-gray-300 rounded px-3 py-2 cursor-pointer hover:border-purple-600 transition bg-gray-50">
                <img v-if="imagePreview" :src="imagePreview" alt="Preview"
                  class="w-12 h-12 rounded-full object-cover border shadow-sm" />
                <div v-else class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-400">
                  <i class="ri-image-line text-lg"></i>
                </div>
                <div class="flex flex-col text-[0.7rem] text-gray-500">
                  <span class="font-medium">Click or drag to upload</span>
                  <span class="text-gray-400 text-[0.65rem]">JPG or PNG, max 2MB</span>
                </div>
              </div>
              <input ref="fileInput" type="file" accept="image/png, image/jpeg" class="hidden"
                @change="handleFileChange" />
            </div>



            <!-- Pet name -->
            <div class="relative mb-2">
              <input v-model="pet.name" type="text" id="name" placeholder=" "
                class="peer w-full pt-6 border-b-2 border-gray-500 border-opacity-30 text-sm font-medium focus:outline-none focus:border-purple-700"
                @focus="isPetNameFocused = true"
                @blur="isPetNameFocused = false" required/>
              <label for="name" class="absolute left-0 transition-all text-gray-500 text-sm"
                :class="{ 'top-1 text-sm text-purple-700': pet.name || isPetNameFocused, 'top-6 text-base text-gray-400': !pet.name && !isPetNameFocused, }">
                Name
              </label>
            </div>

            <!-- Pet species -->
            <div class="relative mb-2">
              <input v-model="pet.species" type="text" id="species" placeholder=" "
                class="peer w-full pt-6 border-b-2 border-gray-500 border-opacity-30 text-sm font-medium focus:outline-none focus:border-purple-700"
                @focus="isSpeciesFocused = true"
                @blur="isSpeciesFocused = false" required />
              <label for="species" class="absolute left-0 transition-all text-gray-500 text-sm"
                :class="{ 'top-1 text-sm text-purple-700': pet.species || isSpeciesFocused, 'top-6 text-base text-gray-400': !pet.species && !isSpeciesFocused}">
                Species (e.g., Cat, Dog)
              </label>
            </div>

            <!-- Pet breed -->
            <div class="relative mb-2">
              <input v-model="pet.breed" type="text" id="breed" placeholder=" "
                class="peer w-full pt-6 border-b-2 border-gray-500 border-opacity-30 text-sm font-medium focus:outline-none focus:border-purple-700"
                @focus="isBreedFocused = true"
                @blur="isBreedFocused = false" />
              <label for="breed" class="absolute left-0 transition-all text-gray-500 text-sm"
                :class="{ 'top-1 text-sm text-purple-700': pet.breed || isBreedFocused, 'top-6 text-base text-gray-400': !pet.breed && !isBreedFocused }">
                Breed (optional)
              </label>
            </div>

            <!-- Pet DOB -->
            <div class="relative mb-2">
              <input v-model="pet.age" type="number" min="0" id="age" placeholder=" "
                class="peer w-full pt-6 border-b-2 border-gray-500 border-opacity-30 text-sm font-medium focus:outline-none focus:border-purple-700"
                />
              <label for="age" class="absolute left-0 transition-all text-gray-500 text-sm"
                :class="{ 'top-1 text-sm text-purple-700': pet.birthDate, 'top-6 text-base text-gray-400': !pet.birthDate }">
                Year of Birth (optional)
              </label>
            </div>

            <!-- Optional notes regarding pets -->
            <div class="hidden relative mb-4">
              <textarea v-model="pet.notes" id="notes" placeholder=" "
                class="peer w-full pt-6 h-20 border-b-2 border-gray-500 border-opacity-30 text-sm font-medium focus:outline-none focus:border-purple-700 resize-none"></textarea>
              <label for="notes" class="absolute left-0 transition-all text-gray-500 text-sm"
                :class="{ 'top-1 text-sm text-purple-700': pet.notes, 'top-6 text-base text-gray-400': !pet.notes }">
                Notes (optional)
              </label>
            </div>

            <!-- Submit button -->
            <button type="submit"
              class="action-btn flex items-center justify-center relative left-1/2 -translate-x-1/2 w-44 mt-7 h-10 bg-dark tracking-wide text-sm text-white hover:shadow-sm transition rounded-xl hover:opacity-90 focus:outline-none"
              :disabled="!isFormValid || loading.value" :class="{
                'opacity-50 cursor-not-allowed hover:opacity-50':
                  !isFormValid || loading.value,
              }">
              <template v-if="!loading">
                <span class="font-medium text-sm">Add Pet</span>
                <span
                  class="bg-white color-dark text-xs ml-3 font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  <i class="transition ri-check-line"></i>
                </span>
              </template>
              <span v-else class="animate-spin text-white text-xl">
                <i class="ri-loader-4-line ri-spin"></i>
              </span>
            </button>
          </form>
        </div>
      </div>

      <!-- Info -->
      <div class="mt-6 mb-10 p-5 text-center text-[0.825rem] font-normal text-gray-600">
        {{ petFact }}
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref, computed, onMounted } from "vue";
import Logo from "@/components/others/Logo.vue";


// Random pet fact
const petFact = ref("");
const facts = [
  "Cats can recognize their owner's voice, but they often choose to ignore it.",
  "Dogs noses are as unique as human fingerprints.",
  "Rabbits purr when they're content — not just cats!",
  "Petting a dog can lower your blood pressure.",
  "Parrots can live over 50 years with proper care.",
  "Guinea pigs need vitamin C daily, just like humans.",
  "Some turtles can breathe through their butts. Seriously.",
  "Owning a pet can help reduce feelings of loneliness.",
];
onMounted(() => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  petFact.value = facts[randomIndex];
});


const loading = ref(false);
const isPetNameFocused = ref(false);
const isSpeciesFocused = ref(false);
const isBreedFocused = ref(false);

const pet = ref({
  name: "",
  species: "",
  breed: "",
  birthDate: ""
});


const fileInput = ref(null);
const imageFile = ref(null);
const imagePreview = ref(null);

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file && file.type.startsWith("image/")) {
    imageFile.value = file;
    imagePreview.value = URL.createObjectURL(file);
  }
};

const handleDrop = (e) => {
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    imageFile.value = file;
    imagePreview.value = URL.createObjectURL(file);
  }
};



const isFormValid = computed(() => {
  return pet.value.name && pet.value.species;
});


// Handle adding a pet
const handleAddPet = async () => {
  loading.value = true;

  const formData = new FormData();
  formData.append("name", pet.value.name);
  formData.append("species", pet.value.species);
  formData.append("birthDate", pet.value.birthDate);
  formData.append("breed", pet.value.breed);
  formData.append("weight", pet.value.weight);
  if (imageFile.value) {
    formData.append("profileImage", imageFile.value);
  }


  try {
    console.log("Adding pet:", pet.value);

  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};
</script>
