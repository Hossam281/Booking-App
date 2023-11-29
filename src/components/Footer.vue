<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="flex bg-transparent justify-evenly mb-[60px] gap-[100px]  p-4">
    <div>
      <router-link class="flex mb-[6px] group gap-1 items-center" to="/">
        <img
          class="group-hover:scale-125 transition-all duration-200"
          src="@/assets/plane.svg"
          alt=""
        />
        <span class="font-semibold">My Dream Place</span>
      </router-link>

      <h3 class=" ml-5">Your next goto companion for <br/> travel</h3>
    </div>
    <div>
      <h2 class="mb-[20px] font-medium text-[16px]">Company</h2>
      <ul class="w-[170px] gap-[10px] flex flex-col">
        <li>About</li>
        <li>Jobs</li>
        <li>Newsroom</li>
        <li>Advertising</li>
        <li>Contact us</li>
      </ul>
    </div>
    <div>
      <h2 class="mb-[20px] font-medium text-[16px]">Explore</h2>
      <ul class="w-[170px] gap-[10px] flex flex-col">
        <li>Australia</li>
        <li>New Zealand</li>
        <li>United States America (USA)</li>
        <li>Greece</li>
        <li>Maldives</li>
        <li>Singapore</li>
        <li class="text-[#2F80ED]"><a href="#">See more</a></li>
      </ul>
    </div>
    <div>
      <h2 class="mb-[20px] font-medium text-[16px]">Terms and Policies</h2>
      <ul class="w-[170px] gap-[10px] flex flex-col">
        <li>Privacy Policy</li>
        <li>Terms of use</li>
        <li>Acessibility</li>
        <li>Reward system policy</li>
      </ul>
    </div>
    <div>
      <h2 class="mb-[20px] font-medium text-[16px]">Help</h2>
      <ul class="w-[170px] gap-[10px] flex flex-col">
        <li>Support</li>
        <li>Cancel your bookings</li>
        <li>Use Coupon</li>
        <li>Refund Policies</li>
        <li>International Travel Documents</li>
      </ul>
    </div>
    
  </footer>
  <div class="w-full h-[40px] bg-[#EBEBEB] text-[#4F4F4F] pr-[205px] flex justify-end items-center text-[14px] font-normal">
    <span>© 2022 My Dream Place</span>
  </div>
</template>
