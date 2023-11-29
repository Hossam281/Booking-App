<template>
  <div class="w-full flex flex-col bg-[#F4F4F4] h-screen">
    <header>
      <Navbar />
    </header>
    <main
      class="flex flex-col bg-[#F4F4F4] w-full gap-[28px] mt-[10%] pl-[205px] flex-1"
    >
      <h1 class="text-[32px] font-semibold text-[#1A1A1A]">My Trips</h1>
      <div class="flex flex-col gap-[24px]">
        <div
          v-if="unique.length > 0"
          v-for="trip in unique"
          class="flex border-[#E0E0E0] bg-white items-center rounded-lg border-[1px] w-[915px] h-[240px]"
        >
          <img
            class="w-[285px] h-[200px] m-[20px] rounded-lg object-cover"
            :src="trip.img"
            alt=""
          />
          <div class="flex flex-col my-2 gap-2">
            <h1
              class="text-[28px] font-medium h-[50px] overflow-hidden text-ellipsis"
            >
              {{ trip.name }}
            </h1>
            <div class="flex gap-2 items-center">
              <img width="80" height="40" src="@/assets/stars.svg" alt="" />
              <p class="text-[14px] font-normal text-[#4F4F4F]">
                <strong>{{ trip.reviewScore }}</strong> ({{ trip.reviewCount }}
                Reviews)
              </p>
            </div>
            <p class="text-[13px] font-normal text-[#4F4F4F]">
              Check In : {{ trip.checkIn }}
            </p>
            <p class="text-[13px] font-normal text-[#4F4F4F]">
              Check Out : {{ trip.checkOut }}
            </p>
            <p class="text-[13px] font-normal text-[#4F4F4F]">2 nights stay</p>
          </div>
          <div class="flex ml-auto flex-col p-2 gap-6 items-center">
            <p
              class="w-[120px] h-[24px] text-center text-[20px] mt-11 font-medium"
            >
              <strong>${{ trip.price }} </strong>
            </p>
            <p class="text-[12px] w-[147px] h-[17px] font-light text-[#333333]">
              Includes taxes and fees
            </p>
            <button
              class="text-white hover:bg-blue-600 transition-all duration-200 rounded-lg bg-[#2F80ED] w-[137px] h-[40px]"
            >
              View trip details
            </button>
          </div>
        </div>
        <div v-else>
          <p class="text-[32px] mt-6 font-bold text-blue-600 ">No trips available</p>
        </div>
      </div>
    </main>
    <footer class="bg-[#F4F4F4]">
      <Covid class="mt-[20%]" />
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { useUsersStore } from "@/stores/users.js";
import Footer from "@/components/Footer.vue";
import Covid from "@/components/Covid.vue";
import { RouterLink } from "vue-router";
import {computed } from "vue";



const current = useUsersStore().currentUser.favtrips;
const isLoggedIn = useUsersStore().currentUser;

const unique = computed(() => {
   return current.filter((obj, index, self) =>index === self.findIndex((o) => o.name === obj.name)
);
})

console.log(unique.value);
</script>
