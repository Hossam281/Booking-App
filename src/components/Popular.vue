<script setup>
import fireside from "@/assets/images/popular/fireside.png";
import lakeside from "@/assets/images/popular/lakeside.png";
import oculous from "@/assets/images/popular/oculous.png";
import recce from "@/assets/images/popular/recce.png";

const popular = [
  {
    header: "Lakeside Motel Warefront",
    properties: "2246",
    image: lakeside,
  },
  {
    header: "Recce Graham resort",
    properties: "1278",
    image: recce,
  },
  {
    header: "Fireside Dinners",
    properties: "480",
    image: fireside,
  },
  {
    header: "Oculous Inn Stay",
    properties: "230",
    image: oculous,
  },
];
</script>

<template>
  <section class="flex flex-col gap-3">
    <div class="flex flex-col gap-3 ml-24">
      <h1 class="text-[32px] mb-[24px] font-bold">Popular hotels</h1>
    </div>

    <div class="flex gap-5 justify-evenly px-20 mb-[60px]">
      <div
        class="hover:scale-105 transition-all duration-200 cursor-pointer"
        v-for="item in popular"
        :key="item.header"
      >
        <img
          width="295"
          class="rounded-lg mb-[14px]"
          height="220"
          :src="item.image"
          alt=""
        />
        <h1 class="text-[20px] font-semibold">{{ item.header }}</h1>
        <span>{{ item.properties }} properties</span>
      </div>
    </div>
  </section>
</template>
