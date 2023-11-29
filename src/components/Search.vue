<script setup>
import locationIcon from "../assets/location.svg";
import celendar from "../assets/calendar.svg";
import rooms from "../assets/rooms.svg";
import user from "../assets/user.svg";
import { ref, onMounted, watchEffect } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useUsersStore } from "@/stores/users";
import "@/assets/main.css";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";

const toast = useToast();
const route = useRoute();
const users = useUsersStore();

const dest = ref("");
const checkIn = ref(null);
const checkOut = ref(null);
const destId = ref(0);
const searchType = ref("");
const room = ref("");
const guest = ref("");
const router = useRouter();
const searchError = ref(null);
const searchResults = ref(null);
const queryTimeout = ref(null);
const data = ref(null);

onMounted(() => {
  data.value = JSON.parse(route.params.query || null);
  if (data.value) {
    checkIn.value = data.value.checkIn;
    checkOut.value = data.value.checkOut;
    room.value = data.value.room;
    guest.value = data.value.guest;
    dest.value = data.value.dest;
    destId.value = data.value.destId;
    searchType.value = data.value.searchType;
  }
});

const getSearchResult = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
      params: { query: dest.value },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };
    if (dest.value !== "") {
      try {
        const response = await axios.request(options);
        searchResults.value = response.data.data;

        return;
      } catch (error) {
        searchError.value = true;
        console.error(error);
      }
    }
    searchResults.value = null;
  }, 300);
};

const getData = (data) => {
  dest.value = data.name + " , " + data.country;
  destId.value = parseInt(data.dest_id);
  searchType.value = data.search_type;
  console.log(destId.value);
  console.log(searchType.value);
  searchResults.value = null;
};

const getSearch = () => {
  const loggedIn = users.currentUser;

  const query = {
    dest: dest.value || null,
    checkIn: checkIn.value,
    checkOut: checkOut.value,
    destId: destId.value,
    searchType: searchType.value,
    room: room.value || 1,
    guest: guest.value || 1,
  };
  const checkInDate = new Date(checkIn?.value);
  const checkOutDate = new Date(checkOut?.value);
  query.checkIn = checkInDate.toISOString().split("T")[0];
  query.checkOut = checkOutDate.toISOString().split("T")[0];
  users.getSearchQueryObject(query);
  const inDate = new Date(query.checkIn);
  const outDate = new Date(query.checkOut);
  if (loggedIn) {
    if (query.dest === null || query.destId === 0) {
      toast.error("Please select a destination");
      return;
    }
    if (query.checkIn == "1970-01-01" || query.checkOut == "1970-01-01") {
      toast.error("Please select a check-in and check-out date");
      return;
    }
    if (inDate >= outDate) {
      toast.error("Check-in date cannot be greater than or equal to check-out date");
      return;
    }
    router.push({
      name: "search",
      params: {
        query: JSON.stringify(query),
      },
    });
  } else {
    router.push({
      name: "login",
    });
  }
};
</script>

<template>
  <form
    @submit.prevent="getSearch"
    class="w-[1030px] justify-evenly h-[64px] bg-white absolute items-center -bottom-[6%] shadow-xl flex rounded-md"
  >
    <div class="flex bg-[#F2F2F2] w-[206px] h-[43px] rounded-md">
      <div class="flex gap-2 pl-[12px] items-center relative">
        <img width="20" height="20" :src="locationIcon" alt="" />
        <input
          placeholder="Where are you going?"
          v-model="dest"
          @input="getSearchResult"
          type="text"
          class="bg-[#F2F2F2] h-[70%] w-[90%] placeholder:text-sm placeholder:font-semibold outline-none"
        />
        <ul
          class="absolute bg-white rounded-lg text[#EEEEEE] w-full shadow-md py-2 px-2 left-0 top-[60px]"
          v-if="searchResults"
        >
          <p v-if="!searchError && searchResults.length === 0">
            No results matched your search
          </p>
          <template v-else>
            <li
              v-for="searchResult in searchResults"
              :key="searchResult.id"
              class="py-2 cursor-pointer hover:bg-gray-100"
              @click="getData(searchResult)"
            >
              <h1 class="font-semibold p-1">
                {{ searchResult.name }} , {{ searchResult.country }}
              </h1>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div
      class="flex relative bg-[#F2F2F2] items-center justify-center w-[147px] h-[43px] rounded-md"
    >
      <VueDatePicker
        class="datepicker"
        format="yyyy-MM-dd"
        placeholder="Check In"
        v-model="checkIn"
      >
        <template #input-icon>
          <img class="input-slot-image pl-2" :src="celendar" />
        </template>
      </VueDatePicker>
    </div>
    <div
      class="flex div1 relative justify-center w-[147px] bg-[#F2F2F2] rounded-md h-[43px] items-center"
    >
      <VueDatePicker
        class="datepicker"
        format="yyyy-MM-dd"
        placeholder="Check Out"
        v-model="checkOut"
      >
        <template #input-icon>
          <img class="input-slot-image pl-2" :src="celendar" />
        </template>
      </VueDatePicker>
    </div>
    <div class="flex bg-[#F2F2F2] rounded-md">
      <div class="flex items-center gap-2 pl-[12px] w-[148px] h-[43px]">
        <img width="20" height="20" :src="user" alt="" />
        <input
          placeholder="Guests"
          type="number"
          v-model="guest"
          class="bg-[#F2F2F2] outline-none placeholder:text-sm placeholder:font-semibold w-[90%] h-[70%]"
        />
      </div>
    </div>
    <div class="flex bg-[#F2F2F2] rounded-md">
      <div class="flex items-center gap-2 pl-[12px] w-[147px] h-[43px]">
        <img width="20" height="20" :src="rooms" alt="" />
        <input
          placeholder="Rooms"
          v-model="room"
          type="number"
          class="bg-[#F2F2F2] outline-none placeholder:text-sm placeholder:font-semibold w-[90%] h-[70%]"
        />
      </div>
    </div>
    <button
      type="submit"
      class="w-[147px] h-[44px] font-semibold rounded-md hover:bg-blue-600 transition-all duration-200 bg-[#2F80ED] text-white"
    >
      Search
    </button>
  </form>
</template>
