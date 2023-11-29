<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

import australia from "@/assets/featured/australia.png";
import japan from "@/assets/featured/japan.png";
import newzealand from "@/assets/featured/newziland.png";
import greece from "@/assets/featured/greece.png";

const featuredDestinations = [
  { name: "Australia", properties: 2246 , img: australia},
  { name: "Japan", properties: 1278 , img: japan},
  { name: "New Zealand", properties: 480 ,img: newzealand},
  { name: "Greece", properties: 320 , img: greece},
];

/*const attractions = ref(null);
const countries = ref([]);
const getAttractions = async (query) => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
    params: { query },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

onMounted(async () => {
  try {
    const results = await Promise.all(
      featuredDestinations.map((dest) => getAttractions(dest))
    );
    // results is an array containing the data for each query
    attractions.value = results;

    // Move the logging inside the asynchronous block to ensure it runs after promises are resolved
    const flattened = attractions.value ? attractions.value.flat() : [];
    const filtered = flattened.filter((attraction) => {
      return attraction?.search_type === "country";
    });
    countries.value = filtered;
  } catch (error) {
    console.error("Error fetching attractions:", error);
  
});*/
</script>

<template>
  <section class="flex flex-col gap-3">
    <div class="flex flex-col gap-3 ml-24">
      <h1 class="text-[32px] font-bold">Featured Destinations</h1>
      <p>
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and <br />
        inspiration from us
      </p>
    </div>

    <div class="flex gap-5 justify-evenly px-20 mb-[60px]">
      <div
        class="hover:scale-105 transition-all duration-200 cursor-pointer"
        v-for="dest in featuredDestinations"
        :key="dest.name"
      >
        <img
          width="295"
          class="mb-[14px] rounded-lg"
          height="220"
          :src="dest.img"
          alt=""
        />
        <h1 class="text-[20px] font-semibold">{{ dest.name }}</h1>
        <span>{{ dest.properties }} properties</span>
      </div>
    </div>
  </section>
</template>
