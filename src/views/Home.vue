<script setup>
import bannerImage from "@/assets/banner.png";
import Search from "@/components/Search.vue";
import FeaturedDest from "@/components/FeaturedDest.vue";
import Inspirations from "@/components/Inspirations.vue";
import Popular from "@/components/Popular.vue";
import banner2 from "@/assets/banner2.png";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Covid from "@/components/Covid.vue";
import SortDropdwon from "@/components/SortDropdwon.vue";
import WelcomeModal from "../components/WelcomeModal.vue";
import { ref } from "vue";


</script>

<template>
  <header class="flex relative flex-col items-center mb-20 mt-20">
    <Navbar />

    <div
      class="flex flex-col items-center justify-center bg-cover w-[1240px] h-[500px]"
      :style="{ backgroundImage: `url(${bannerImage})` }"
    >
      <h1 class="text-[32px] font-bold text-white">
        Enjoy Your Dream Vacation
      </h1>
      <p class="text-center text-[20px] font-thin text-white">
        Plan and book our perfect trip with expert advice, travel tips,
        destination <br />
        information and inspiration from us
      </p>
    </div>
    
    <Search />
  </header>
  <Covid/>
  <main class="flex flex-col items-center">
    <FeaturedDest />
    <Inspirations />
    <Popular />
    <section
      class="flex flex-col justify-center bg-cover w-[1240px] h-[280px] relative mb-[60px]"
      :style="{ backgroundImage: `url(${banner2})` }"
    >
      <div class="pl-[69px]">
        <img class="absolute top-0 right-3" src="@/assets/phone.png" alt="" />
        <h1 class="text-[28px] mb-[30px] font-semibold text-white">
          Download the mobile application for bonus <br />
          coupons and travel codes
        </h1>
        <button
          class="bg-[#2F80ED] text-[15px] hover:bg-blue-600 transition-all duration-200 px-[18px] py-[12px] text-white font-semibold rounded-md"
        >
          Download mobile app
        </button>
      </div>
    </section>
    <section class="mb-[80px] text-center">
      <h1 class="text-[28px] font-bold mb-[24px]">
        Explore the world with My Dream place
      </h1>
      <a href="#" class="text-[18px] font-normal text-[#2F80ED]"
        >Discover new places and experiences</a
      >
    </section>
    <Footer />
  </main>
  <WelcomeModal  />

</template>
