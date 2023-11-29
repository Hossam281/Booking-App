<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useUsersStore } from './stores/users';
const users = useUsersStore();


</script>

<template>
  <div class="w-full h-[100dvh] font-worksans ">
    <RouterView />
  </div>

  
</template>

