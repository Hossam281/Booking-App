<template>
  <div class="w-full gap-4 flex flex-col items-center justify-center">
    <div class="flex flex-col w-full gap-[40px]">
      <div class="flex items-center justify-between w-full">
        <h1 class="text-[32px] font-bold mr-5 contents overflow-hidden">
          {{ data?.dest }}: {{ numberOfProperties }} Search Results
        </h1>
        <SortDropdwon />
      </div>
      <div
        v-if="filteredHotels?.length > 0"
        v-for="hotel in filteredHotels"
        class="flex border-[#E0E0E0] items-center rounded-lg border-[1px] w-[915px] h-[240px]"
      >
        <img
          class="w-[285px] h-[200px] m-[20px] rounded-lg object-cover"
          :src="hotel.property.photoUrls[0]"
          alt=""
        />
        <div class="flex flex-col my-2 gap-2">
          <h1
            class="text-[28px] font-medium h-[50px] overflow-hidden text-ellipsis"
          >
            {{ hotel.property.name }}
          </h1>
          <div class="flex gap-2 items-center">
            <img width="80" height="40" src="@/assets/stars.svg" alt="" />
            <p class="text-[14px] font-normal text-[#4F4F4F]">
              <strong>{{ hotel.property.reviewScore  }}</strong> ({{
                hotel.property.reviewCount
              }}
              Reviews)
            </p>
          </div>
          <p class="text-[13px] font-normal text-[#4F4F4F]">
            {{ hotel.accessibilityLabel }}
          </p>
          <button
            @click="getHotelDetails(hotel)"
            class="text-white hover:bg-blue-600 transition-all duration-200 rounded-lg bg-[#2F80ED] w-[137px] h-[40px]"
          >
            See availability
          </button>
        </div>
        <div class="flex flex-col p-2 gap-6 items-center">
          <div
            v-if="hotel.property.priceBreakdown.excludedPrice"
            class="w-[54px] flex items-center justify-center h-[26px] font-medium bg-[#219653] rounded-md text-center text-[13px] text-white"
          >
            {{
              Math.ceil(
                (Math.ceil(hotel.property.priceBreakdown.excludedPrice.value) /
                  Math.ceil(hotel.property.priceBreakdown.grossPrice.value)) *
                  100
              )
            }}% off
          </div>
          <p class="w-[120px] h-[24px] text-center text-[20px] mt-11 font-medium">
            <span v-if="hotel.property.priceBreakdown.excludedPrice" class="line-through text-red-500 mr-[8px] font-medium text-[14px]">
              ${{Math.ceil( hotel.property.priceBreakdown.excludedPrice.value + hotel.property.priceBreakdown.grossPrice.value )}}
            </span>
            <strong
              >${{
                Math.floor(hotel.property.priceBreakdown.grossPrice.value)
              }}
              </strong
            >
          </p>
          <p class="text-[12px] w-[147px] h-[17px] font-light text-[#333333]">
            Includes taxes and fees
          </p>
        </div>
      </div>
      <div v-else class="flex  items-center justify-center  w-[915px] h-[240px]">
        <p class="text-[32px] font-bold">No results in this page</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import SortDropdwon from "@/components/SortDropdwon.vue";

const router = useRouter();

defineProps({
  data: {},
  filteredHotels: {},
  numberOfProperties: Number,
});

const getHotelDetails = (hotel) => {
  const temp = hotel;
  const query = {
    checkIn: temp.property.checkinDate,
    checkOut: temp.property.checkoutDate,
    hotelId: temp.hotel_id,
  };
  router.push({
    name: "hotelDetails",
    params: { query: JSON.stringify(query) },
  });
};
</script>
