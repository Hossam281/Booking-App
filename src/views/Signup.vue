<template>
  <Navbar :isInLogin="isInLogin" />
  <div class="flex h-screen w-full flex-col items-center justify-center">
    <form @submit.prevent="signUp">
      <div class="mb-4">
        <label for="username" class="block text-gray-700 text-sm font-bold mb-2"
          >Email adress:</label
        >
        <input
          v-model="user.email"
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
            v-model="user.password"
            :type="showPassword ? 'text' : 'password'"
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
      <div class="mb-4">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2"
          >Confrim password:</label
        >
        <div class="relative">
          <input
            v-model="password"
            :type="showConfrimPassword ? 'text' : 'password'"
            name="password"
            class="w-[400px] bg-[#F2F2F2] p-2 border border-gray-300 rounded"
          />
          <button
            type="button"
            @click="toggleShowConfrimPassword"
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
        Sign Up
      </button>
    </form>
    <p class="mt-4">
      Already have an account?
      <router-link class="text-[#2F80ED]" to="/login">Sign In</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import { useToast } from "vue-toastification";
import { useUsersStore } from "@/stores/users.js";
import { useRouter } from "vue-router";

const toast = useToast();
const usersStore = useUsersStore();
const router = useRouter();

const user = ref({
  email: "",
  password: "",
  favtrips: [],
  id: "",
});
const password = ref("");
const isInLogin = ref(true);
const showPassword = ref(false);
const showConfrimPassword = ref(false);
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
const toggleShowConfrimPassword = () => {
  showConfrimPassword.value = !showConfrimPassword.value;
};
const signUp = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!user.value.email) {
    toast.error("Please enter your email address.");
    return;
  } else if (!emailRegex.test(user.value.email)) {
    toast.error("Please enter a valid email address.");
    return;
  } else if (!user.value.password) {
    toast.error("Please enter your password.");
    return;
  } else if (!password.value) {
    toast.error("Please re-enter your password.");
    return;
  } else if (password.value !== user.value.password) {
    toast.error("Passwords do not match.");
  } else {
    try {
      const userr = user.value;
      usersStore.addUser(userr);
      toast.success("Sign up successful");
      user.value={};
      password.value="";
      router.push("/login");
    } catch (error) {
      toast.error(error.message);
    }
  }
};
</script>
