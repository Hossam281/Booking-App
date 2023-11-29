<script setup>
import sydney from "@/assets/images/sydne.png";
import topcities from "@/assets/images/topcities.png";
import topdest from "@/assets/images/topdest.png";

const images = [
  {
    header: "Sydeny’s 10 most fashionable 5 star hotels",
    body: "Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
    image: sydney,
  },
  {
    header: "Top cities for Vegan Travellers",
    body: "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
    image: topcities,
  },
  {
    header: "World’s top destinations during and post covid timeline",
    body: "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
    image: topdest,
  },
];
</script>

<template>
  <section class="flex flex-col gap-3 mb-[60px]">
    <div class="flex flex-col gap-3 ml-24">
      <h1 class="text-[32px] font-bold mb-[24px]">
        Get inspiration for your next trip
      </h1>
    </div>

    <div class="flex gap-5 justify-evenly px-20 mb-10">
      <div
        v-for="image in images"
        :key="image.header"
        class="w-[400px] flex hover:scale-105 transition-all duration-200 cursor-pointer flex-col justify-end bg-cover h-[280px]"
        :style="{ backgroundImage: `url(${image.image})` }"
      >
        <div class="p-[20px]">
          <h1 class="text-[20px] font-semibold text-white">
            {{ image.header }}
          </h1>
          <br />
          <p class="text-white text-[16px] font-normal">{{ image.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
