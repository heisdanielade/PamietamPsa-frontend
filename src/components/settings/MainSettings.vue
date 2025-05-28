<script setup>
import { reactive, ref, computed, watch, inject } from 'vue';
import { useMainUserStore } from '@/stores/mainUserDetails';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);
const toast = inject('toast');
const userStore = useMainUserStore();

// Store snapshot (non-reactive)
const user = {
  email: userStore.email,
  name: userStore.name
};

// Local reactive form
const form = reactive({
  email: user.email || '',
  name: user.name || '',
  notificationsDisabled: false,
  darkMode: false
});

const showSave = ref(false);
const emailError = ref('');

// Show save button on any input
function onInputChange() {
  showSave.value = true;
}

const emailRegex = /^(?!.*\.\.)(?!.*\.$)(?!^\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const isEmailValid = computed(() =>
  !form.email || emailRegex.test(form.email)
);
const isFormValid = computed(() =>
  form.name?.trim() !== '' && isEmailValid.value
);
const isSaveDisabled = computed(() => {
  return loading.value || !isFormValid.value;
});


watch(() => form.email, (newEmail) => {
  console.log('Name:', form.name);
  console.log('Email:', form.email);
  console.log('Email valid:', isEmailValid.value);
  console.log('Form valid:', isFormValid.value);
  console.log('Save disabled:', loading.value || !isFormValid.value);
  
  if (newEmail === '') {
    emailError.value = '';
  } else if (!isEmailValid.value) {
    emailError.value = 'Invalid email address.';
  } else {
    emailError.value = '';
  }
});

// handle Save account info
const saveAccountInfo = async () => {
  if (!isFormValid.value) return;

  loading.value = true;

  try {
    user.email = form.email;
    user.name = form.name;
    showSave.value = false;

    if (toast?.value) {
      toast.value.showToast('Saved successfully.', 'success');
    } else {
      console.warn('Toast reference is not available.');
    }

    setTimeout(() => {
      router.push('/u/profile');
    }, 1250);
  } catch (error) {
    if (toast?.value && error?.response) {
      toast.value.showToast(error.response.data.message || 'Request failed.', 'error');
    } else {
      console.error('Save failed:', error);
    }
  } finally {
    loading.value = false;
  }
};

function confirmDelete() {
  if (confirm('Are you sure you want to delete your account? This action is irreversible.')) {
    // Trigger deletion logic
  }
}
</script>


<template>
  <div class="settings p-5 flex flex-col gap-10 rounded-2xl md:shadow-sm md:border border-zinc-200">
    <!-- Section 1: Account Info -->
    <section class="w-full bg-white">
      <div class="w-full flex items-center justify-between mb-3">
        <h2 class="text-2xl font-medium text-zinc-800">Account Information</h2>
      </div>
      <div class="space-y-2.5">
        <!-- Email -->
        <div class="relative">
          <input v-model="form.email" type="email" id="email" placeholder=" "
            class="peer w-full pt-6 border-b border-zinc-300 text-sm font-medium focus:outline-none focus:border-purple-700 bg-transparent"
            @input="onInputChange" aria-describedby="email-error" />
          <label for="email" class="absolute left-0 transition-all text-zinc-500 text-sm" :class="{
            'top-1 text-purple-700': form.email,
            'top-6 text-zinc-400': !form.email
          }">
            Email Address
          </label>
          <p v-if="emailError" id="email-error" class="text-xs text-red-500 mt-1">{{ emailError }}</p>
        </div>

        <!-- Name -->
        <div class="relative">
          <input v-model="form.name" type="text" id="name" placeholder=" "
            class="peer w-full pt-6 border-b border-zinc-300 text-sm font-medium focus:outline-none focus:border-purple-700 bg-transparent"
            @input="onInputChange" />
          <label for="name" class="absolute left-0 transition-all text-zinc-500 text-sm" :class="{
            'top-1 text-purple-700': form.name,
            'top-6 text-zinc-400': !form.name
          }">
            Name
          </label>
        </div>

        <!-- Save Button -->
        <transition name="fade">
          <button v-if="showSave" @click="saveAccountInfo" :disabled="isSaveDisabled"
            class="action-btn flex items-center justify-center relative left-1/2 -translate-x-1/2 w-36 mt-6 h-10 bg-dark tracking-wide text-sm text-white hover:shadow-sm transition rounded-xl hover:opacity-90 focus:outline-none"
            :class="{
              'opacity-50 cursor-not-allowed hover:opacity-50': isSaveDisabled
            }">

            <template v-if="!loading">
              <span class="font-medium text-sm">Save</span>
              <span
                class="bg-white color-dark text-xs ml-3 font-bold rounded-full w-5 h-5 flex items-center justify-center">
                <i class="ri-arrow-right-line transition"></i>
              </span>
            </template>

            <template v-else>
              <span class="animate-spin text-white text-xl">
                <i class="ri-loader-4-line ri-spin"></i>
              </span>
            </template>
          </button>
        </transition>
      </div>
    </section>

    <!-- Section 2: App Settings -->
    <section class="w-full bg-white">
      <div class="w-full flex items-center justify-between mb-3">
        <h2 class="text-2xl font-medium text-zinc-800">App Settings</h2>
      </div>
      <div class="flex flex-col gap-6">
        <label class="flex items-center justify-between text-sm text-zinc-700">
          <span>Disable Notifications</span>
          <input type="checkbox" v-model="form.notificationsDisabled" @change="onInputChange"
            class="accent-purple-600" />
        </label>

        <label class="flex items-center justify-between text-sm text-zinc-700">
          <span>Dark Mode</span>
          <input type="checkbox" v-model="form.darkMode" @change="onInputChange" class="accent-purple-600" />
        </label>
      </div>
    </section>

    <!-- Section 3: Danger Zone -->
    <section class="w-full bg-white rounded-2xl shadow-sm border border-red-200 p-4">
      <div class="w-full flex items-center justify-between mb-4">
        <h2 class="text-2xl font-medium text-red-600">Danger Zone</h2>
      </div>
      <p class="text-sm text-red-500 mb-4">
        Once you delete your account, there is no going back.
      </p>
      <button @click="confirmDelete"
        class="bg-red-600 text-white px-5 py-2 text-sm rounded-xl shadow hover:bg-red-700 transition-all">
        Delete Account
      </button>
    </section>
  </div>
</template>
