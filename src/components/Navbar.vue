<script setup>
import { RouterLink } from "vue-router";
import Dropdown from "@/components/Dropdown.vue";
import { useUsersStore } from "@/stores/users.js";
import { useRouter } from "vue-router";
import ring from "@/assets/ring.svg";

const router = useRouter();
const current = useUsersStore().currentUser;

defineProps({
  isInLogin: Boolean,
});
</script>

<template>
  <nav
    class="w-full flex items-center px-[100px] justify-between fixed h-[68px] z-50 bg-white top-0"
  >
    <router-link
      exact
      @click="isInLogin = false"
      class="flex group gap-1 items-center"
      to="/"
    >
      <img
        class="group-hover:scale-125 transition-all duration-200"
        src="@/assets/plane.svg"
        alt=""
      />
      <span class="font-semibold">My Dream Place</span>
    </router-link>
    <ul v-show="!isInLogin" class="flex gap-5">
      <li><router-link exact to="/">Home</router-link></li>
      <li>Discover</li>
      <li>Activities</li>
      <li>Discover</li>
      <li>Contact</li>
    </ul>
    <div v-if="current && !isInLogin" class="flex gap-5 items-center">
      <img :src="ring" class="hover:scale-125 transition-all duration-200 cursor-pointer" width="20" height="20" alt="">
      <Dropdown />
    </div>

    <button
      @click="router.push('/signup')"
      v-if="!current && !isInLogin"
      class="bg-[#2F80ED] hover:bg-blue-600 transition-all duration-200 p-2 text-white font-semibold rounded-lg"
    >
      Register
    </button>
  </nav>
</template>
