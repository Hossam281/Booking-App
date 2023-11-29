<template>
  <Navbar :isInLogin="isInLogin" />
  <div class="flex h-screen w-full flex-col items-center justify-center">
    <form @submit.prevent="login">
      <div class="mb-4">
        <label for="username" class="block text-gray-700 text-sm font-bold mb-2"
          >Email adress:</label
        >
        <input
          v-model="username"
          type="text"
          id="username"
          name="username"
          class="w-[400px] bg-[#F2F2F2] p-2 border border-gray-300 rounded"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2"
          >Password:</label
        >
        <div class="relative">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            id="password"
            name="password"
            class="w-[400px] bg-[#F2F2F2] p-2 border border-gray-300 rounded"
          />
          <button
            type="button"
            @click="togglePasswordVisibility"
            class="absolute top-1/2 right-2 transform -translate-y-1/2"
          >
            <img src="@/assets/eye.svg" alt="" />
          </button>
        </div>
      </div>

      <button
        type="submit"
        class="bg-blue-500 mx-auto w-[400px] text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </form>
    <p class="mt-4">
      Don't have an account?
      <router-link class="text-[#2F80ED]" to="/signup">Register</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/navbar.vue";
import { useToast } from "vue-toastification";
import { useUsersStore } from "@/stores/users.js";
import { useRouter } from "vue-router";

const router = useRouter();
const toast = useToast();
const usersStore = useUsersStore();

const username = ref("");
const password = ref("");
const isInLogin = ref(true);
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const login = async () => {

  try {
    const email = username.value;
    const passwordd = password.value;
    await usersStore.authenticateUser(email, passwordd);
    isInLogin.value = false;
    toast.success("Login successful");
    username.value = "";
    password.value = "";
    usersStore.searchQueryObject ?router.push({
      name: "search",
      params: { query: JSON.stringify(usersStore.searchQueryObject) },
    }) : router.push("/");

  } catch (error) {
    console.error(error);
    toast.error(error.message);
  }
};
</script>
