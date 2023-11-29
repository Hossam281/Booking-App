<template>
  <header
    class="w-full relative flex flex-col items-center bg-gradient-to-t from-[#144E9D] to-[#2969BF] h-[200px] mb-[102px]"
  >
    <NavbarSearch />
    <div class="absolute left-[17.25%] -bottom-[15%]"><Search /></div>
  </header>
  <main v-if="!isLoading" class="w-full flex">
    <section class="flex flex-col ml-[100px] mr-[30px] items-center gap-5">
      <div class="w-[295px] h-[119px] flex flex-col rounded-md bg-[#F2F2F2]">
        <label class="text-[16px] font-medium mt-[20px] ml-[18px]"
          >Search by property name</label
        >
        <div
          class="flex items-center bg-white w-[259px] mx-auto mt-[16px] py-2"
        >
          <img
            class="mr-3 ml-[12px]"
            src="@/assets/searchIcon.svg"
            alt="Icon"
            width="20"
            height="20"
          />
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            v-model="searchInput"
            @input="searchHotels()"
            placeholder="eg. Beach westpalm"
            aria-label="Username"
          />
        </div>
      </div>
      <div class="w-[295px] flex flex-col rounded-md border">
        <div
          class="text-[16px] h-[55px] rounded-t-md flex items-center pl-[18px] bg-[#F2F2F2] w-full py-[18px]"
        >
          <h1>Your Budget per day</h1>
        </div>
        <div class="felx flex-col mx-4 gap-4">
          <div
            v-for="(range, index) in priceRanges"
            :key="index"
            class="flex items-center gap-3 bg-white w-full py-3"
          >
            <input
              type="radio"
              v-model="selectedRange"
              :value="range.value"
              :id="range.id"
              :name="range.name"
            />
            <label :for="range.id">{{ range.label }}</label>
          </div>
          <div class="flex items-center gap-3 bg-white w-full py-3">
            <input
              type="radio"
              v-model="selectedRange"
              value=""
              id="range6"
              name="price-range"
              class="appearance-none hidden"
            />
            <label
              for="range6"
              class="cursor-pointer mx-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-200"
            >
              Reset
            </label>
          </div>

          <div class="flex items-center gap-3 bg-white w-full py-3">
            <Toggle />
          </div>

          <div
            class="flex items-center justify-evenly gap-3 bg-white w-full py-3"
          >
            <input
              type="text"
              class="w-[112px] border rounded-md placeholder:pl-[12px] placeholder:text-black h-[43px]"
              placeholder="Min Budget"
            />
            <input
              type="text"
              class="w-[112px] border rounded-md placeholder:pl-[12px] placeholder:text-black h-[43px]"
              placeholder="Max Budget"
            />
          </div>
        </div>
      </div>
      <div class="w-[295px] flex flex-col rounded-md border">
        <div
          class="text-[16px] h-[55px] rounded-t-md flex items-center pl-[18px] bg-[#F2F2F2] w-full py-[18px]"
        >
          <h1 class="font-medium">Rating</h1>
        </div>
        <div class="felx flex-col text-center items-center justify-center">
          <h1 class="text-[14px] font-normal my-3">
            Show only ratings more than
          </h1>
          <div
            class="flex items-center justify-center w-[200px] mx-auto rounded-md mb-4 border"
          >
            <button
              v-for="i in 5"
              :key="i"
              class="flex hover:bg-gray-200 transition-all duration-200 p-2 pr-3 gap-1 justify-center border items-center"
            >
              <img src="@/assets/star.svg" alt="" />
              <h1>{{ i }}</h1>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center gap-5 mb-[280px]">
      <HotelsList
        :numberOfProperties="numberOfProperties"
        :filteredHotels="filteredHotels"
        :data="data"
      />
      <Pagination
        :selectedPage="selectedPage"
        :numberOfPages="numberOfPages"
        :getDisplayPages="getDisplayPages"
        :updateSelectedPage="updateSelectedPage"
      />
    </section>
  </main>

  <Loading v-if="isLoading" />

  <Covid v-if="!isLoading" />
  <footer v-if="!isLoading">
    <Footer />
  </footer>
</template>

<script setup>
import { ref, onMounted, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import HotelsList from "@/components/HotelsList.vue";
import Pagination from "@/components/Pagination.vue";
import NavbarSearch from "../components/NavbarSearch.vue";
import Search from "@/components/Search.vue";
import Toggle from "@/components/Toggle.vue";
import Footer from "@/components/Footer.vue";
import Covid from "@/components/Covid.vue";
import Loading from "@/components/Loading.vue";

const route = useRoute();
const hotels = ref(null);
const data = ref(null);
const numberOfProperties = ref(0);
const selectedPage = ref(1);
const isLoading = ref(true);
const pageSize = 20;
const selectedRange = ref("");
const searchInput = ref("");
const priceRanges = [
  { id: "range1", name: "price-range", label: "$ 0 - $ 200", value: "0-200" },
  {
    id: "range2",
    name: "price-range",
    label: "$ 200 - $ 500",
    value: "200-500",
  },
  {
    id: "range3",
    name: "price-range",
    label: "$ 500 - $ 1000",
    value: "500-1000",
  },
  {
    id: "range4",
    name: "price-range",
    label: "$ 1000 - $ 2000",
    value: "1000-2000",
  },
  {
    id: "range5",
    name: "price-range",
    label: "$ 2000 - $ 5000",
    value: "2000-5000",
  },
];


const filteredHotels = computed(() => {
  return hotels.value?.hotels.filter((hotel) =>
    hotel.property.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
});

const numberOfPages = computed(() => {
  return Math.ceil(numberOfProperties.value / pageSize);
});



function updateSelectedPage(page) {
  selectedPage.value = page;
  isLoading.value = true;
  searchInput.value = "";
}

async function fetchData(page, range) {
  const [min, max] = range.split("-").map(Number);
  isLoading.value = true;
  try {
    const response = await axios.request({
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
      params: {
        dest_id: data.value.destId,
        search_type: data.value.searchType,
        arrival_date: data.value.checkIn,
        departure_date: data.value.checkOut,
        room_qty: data.value.room,
        adults: +data.value.guest,
        languagecode: "en-us",
        currency_code: "USD",
        page_number: page,
        price_min: min,
        price_max: max,
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    });

    hotels.value = response.data.data;
    const number = parseInt(response.data.data.meta[0].title);
    numberOfProperties.value = parseInt(response.data.data.meta[0].title)
      ? number
      : 0;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

function getDisplayPages() {
  const displayPages = [];
  const pageCount = Math.min(numberOfPages.value, 4);

  const startPage = Math.max(2, selectedPage.value - 1);
  const endPage = Math.min(numberOfPages.value - 1, startPage + pageCount - 1);

  for (let i = startPage; i <= endPage; i++) {
    displayPages.push(i);
  }

  return displayPages;
}

onMounted(async () => {
  data.value = JSON.parse(route.params.query);

  await fetchData(selectedPage.value, selectedRange.value);
});

watchEffect(async () => {
  data.value = JSON.parse(route.params.query);

  await fetchData(selectedPage.value, selectedRange.value);
});
</script>
