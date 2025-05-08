

<template>
    <div class="">
        <component :is="currentForm" />
        <!-- <component :is="currentForm" @submit="handleSubmit" /> -->
    </div>
</template>
  

<script setup>

  import { useRoute } from 'vue-router';
  import AddPetForm from "@/components/forms/pet/AddPetForm.vue";

  const route = useRoute();
  
  const forms = {
    addPet: AddPetForm,
  };
  
  const currentForm = forms[route.query.form];
  

//   const handleSubmit = (data) => {
//     console.log('Form submitted:', data);
//   };
  </script>
  