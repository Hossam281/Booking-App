<template>
  <header class="w-full">
    <Navbar />
  </header>
  <section
    v-if="!isLoading"
    class="w-full h-[500px] bg-gradient-to-b mt-[80px] from-[#F4F4F4] to-[#FFFFFF]"
  >
    <div class="flex items-center gap-3 p-5 justify-center">
      <img src="@/assets/headerImg1.png" alt="" />
      <div class="flex flex-col items-center gap-[16px] justify-center">
        <img src="@/assets/headerImg2.png" alt="" />
        <img src="@/assets/headerImg3.png" alt="" />
      </div>
    </div>
  </section>
  <Loading v-if="isLoading" />
  <main v-if="!isLoading" class="w-full flex flex-col">
    <TabGroup>
      <TabList
        class="flex w-[200px] gap-[14px] ml-[110px] space-x-1 rounded-xl p-1"
      >
        <Tab
          as="template"
          class="text-center cursor-pointer"
          v-slot="{ selected }"
        >
          <a
            href="#overview"
            :class="[
              'w-full  py-2.5 text-[16px] font-medium leading-5',
              ' focus:outline-none ',
              selected ? ' border-b-[3px]  border-b-[#2F80ED]' : 'text-black',
            ]"
          >
            Overview
          </a>
        </Tab>
        <Tab
          class="text-center cursor-pointer"
          as="template"
          v-slot="{ selected }"
        >
          <a
            href="#rooms"
            :class="[
              'w-full  py-2.5 text-[16px] font-medium leading-5',
              ' focus:outline-none ',
              selected ? ' border-b-[3px]  border-b-[#2F80ED]' : 'text-black',
            ]"
          >
            Rooms
          </a>
        </Tab>
      </TabList>
    </TabGroup>

    <section class="w-full gap-[30px] bg-[#F4F4F4] flex">
      <!-- Left Section -->
      <div id="overview" class="flex flex-col gap-[12px] ml-[110px] mt-[40px]">
        <h1 class="text-[32px] font-semibold">
          {{ hotelDetails?.hotel_name }}
        </h1>
        <div class="flex gap-3 items-center">
          <img width="80" height="40" src="@/assets/stars.svg" alt="" />
          <p class="text-[14px] font-normal text-[#4F4F4F]">
            {{ hotelDetails?.breakfast_review_score.review_score }}({{
              hotelDetails?.breakfast_review_score.review_count
            }})
          </p>
        </div>
        <div class="flex gap-3 items-center">
          <img width="20" height="20" src="@/assets/locationBlue.svg" alt="" />
          <p class="text-[14px] font-normal text-[#4F4F4F]">
            {{ hotelDetails?.address }} , {{ hotelDetails?.city }}
          </p>
        </div>
        <div
          class="flex flex-col gap-3 w-[810px] rounded-md mb-4 mt-[28px] bg-white"
        >
          <h1 class="text-[20px] ml-[30px] font-medium mt-[40px]">Overview</h1>
          <p v-for="item in description" class="text-[16px] mt-5 mr-5  mb-[44px] ml-[30px] text-[#4F4F4F] font-normal">
            {{ item.description}}
            <br/>
          </p>
          <hr />
          <h1 class="text-[20px] ml-[30px] font-medium mt-[26px] mb-[24px]">
            Top facilities
          </h1>
          <div class="flex gap-[119px] items-center ml-[30px] mb-[41px]">
            <div class="flex flex-col gap-[13px]">
              <div class="flex items-center gap-4">
                <img width="22" height="22" src="@/assets/wifi.svg" alt="" />
                <p class="text-[15px] font-normal text-[#4F4F4F]">Free wifi</p>
              </div>
              <div class="flex items-center gap-4">
                <img width="22" height="22" src="@/assets/wind.svg" alt="" />
                <p class="text-[15px] font-normal text-[#4F4F4F]">
                  Air Conditioning
                </p>
              </div>
              <div class="flex items-center gap-4">
                <img width="22" height="22" src="@/assets/car.svg" alt="" />
                <p class="text-[15px] font-normal text-[#4F4F4F]">
                  Parking available
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-[13px]">
              <div class="flex items-center gap-4">
                <img width="22" height="22" src="@/assets/bag.svg" alt="" />
                <p class="text-[15px] font-normal text-[#4F4F4F]">
                  Business Services
                </p>
              </div>
              <div class="flex items-center gap-4">
                <img
                  width="22"
                  height="22"
                  src="@/assets/lifebuoy.svg"
                  alt=""
                />
                <p class="text-[15px] font-normal text-[#4F4F4F]">
                  Swimming pool
                </p>
              </div>
              <div class="flex items-center gap-4">
                <img width="22" height="22" src="@/assets/like.svg" alt="" />
                <p class="text-[15px] font-normal text-[#4F4F4F]">
                  Top rated in area
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Right Section -->
      <div class="flex flex-col mt-[40px]">
        <img class="rounded-md mb-[35px]" :src="imgSrc" alt="" />
        <h1 class="text[18px] mb-[22px] font-medium text-[#181818]">
          Explore the area
        </h1>
        <ul class="list-none flex flex-col gap-[12px]">
          <li
            class="text-[14px] flex justify-between items-center font-normal text-[#4F4F4F]"
          >
            <div class="flex gap-[8px] items-center">
              <img
                width="20"
                height="20"
                src="@/assets/planeBlack.svg"
                alt=""
              />
              <span>Hotel Penselvenyia</span>
            </div>
            <span>2 min drive</span>
          </li>
          <li
            class="text-[14px] flex justify-between items-center font-normal text-[#4F4F4F]"
          >
            <div class="flex gap-[8px] items-center">
              <img width="20" height="20" src="@/assets/locBlack.svg" alt="" />
              <span>Travis Bakery store house</span>
            </div>
            <span>10 min drive</span>
          </li>
          <li
            class="text-[14px] flex justify-between items-center font-normal text-[#4F4F4F]"
          >
            <div class="flex gap-[8px] items-center">
              <img width="20" height="20" src="@/assets/locBlack.svg" alt="" />
              <span>Olivia Johnson Garden</span>
            </div>
            <span>15 min drive</span>
          </li>
          <li
            class="text-[14px] flex justify-between items-center font-normal text-[#4F4F4F]"
          >
            <div class="flex gap-[8px] items-center">
              <img width="20" height="20" src="@/assets/locBlack.svg" alt="" />
              <span>Norman Opera Circus</span>
            </div>
            <span>18 min drive</span>
          </li>
          <li
            class="text-[14px] flex justify-between items-center font-normal text-[#4F4F4F]"
          >
            <div class="flex gap-[8px] items-center">
              <img width="20" height="20" src="@/assets/locBlack.svg" alt="" />
              <span>Rockdeset hotel</span>
            </div>
            <span>32 min drive</span>
          </li>
        </ul>
      </div>
    </section>
    <!-- Rooms -->
    <section class="bg-[#F4F4F4] pt-[40px]">
      <h1 id="rooms" class="text-[32px] ml-[110px] mb-[32px] font-semibold">
        Available Rooms
      </h1>
      <div
        v-for="room in hotelDetails.rooms"
        class="grid grid-cols-3 gap-[15px] mx-[100px] mb-[172px]"
      >
        <div>
          <div
            class="w-[400px] h-[79%] py-[72px] relative rounded-md text-white bg-gradient-to-t from-[#2366BF] to-[#4796FF]"
          >
            <div class="flex ml-[28px] items-center mb-[28px] gap-2">
              <img src="@/assets/whitePlane.svg" alt="" />
              <h1>my dream place</h1>
            </div>
            <p class="text-[24px] ml-[28px] mb-[90px] font-bold">
              20% off <br />
              Use Promotional <br />
              Coupon Code: <br /><span class="text-[#FFD723]">Orlando</span>
            </p>
            <img
              width="177"
              class="absolute top-[35px] bottom-[14px] right-[60px]"
              src="@/assets/guy.png"
              alt=""
            />
          </div>
        </div>

        <div
          v-for="item in room.photos"
          class="w-[400px] rounded-md h-[432px] overflow-hidden flex bg-white flex-col"
        >
          <img class="w-full h-[200px]" :src="item.url_original" alt="" />
          <div class="flex flex-col gap-[10px] ml-[20px] mt-[20px]">
            <h1 class="mb-[8px] text-[18px] font-medium">
              Standard twin ben, Multiple beds
            </h1>
            <div class="flex items-center gap-[10px]">
              <img width="20" height="20" src="@/assets/bagBlack.svg" alt="" />
              <span class="text-[14px] font-normal text-[#4F4F4F]"
                >300 sq ft</span
              >
            </div>
            <div class="flex items-center gap-[10px]">
              <img
                width="20"
                height="20"
                src="@/assets/lifebuoyBlack.svg"
                alt=""
              />
              <span class="text-[14px] font-normal text-[#4F4F4F]"
                >Sleeps 3</span
              >
            </div>
            <div class="flex items-center gap-[10px]">
              <img width="20" height="20" src="@/assets/likeBlack.svg" alt="" />
              <span class="text-[14px] font-normal text-[#4F4F4F]"
                >1 double bed and 1 twin bed</span
              >
            </div>
          </div>
          <button
            @click="moveToPayment(room.photos[0].url_original)"
            class="w-[360px] mx-auto bg-[#2F80ED] mt-[24px] hover:bg-blue-600 transition-all duration-200 text-[15px] font-medium text-center text-white py-[12px] rounded-md"
          >
            Reserve suite
          </button>
        </div>
      </div>
    </section>
  </main>
  <footer v-if="!isLoading" class="bg-[#F4F4F4]">
    <Covid />
    <Footer />
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import Loading from "@/components/Loading.vue";
import Covid from "@/components/Covid.vue";
import Footer from "@/components/Footer.vue";
import { useUsersStore } from "@/stores/users";
import { useRouter } from "vue-router";

const router = useRouter();
const currentUser = useUsersStore().currentUser;
const route = useRoute();
const data = ref(null);
const checkIn = ref(null);
const checkOut = ref(null);
const hotelID = ref(null);
const hotelDetails = ref(null);
const isLoading = ref(true);
const imgSrc = ref(null);
const description=ref(null)

const moveToPayment = (imgUrl) => {
  const hotel = hotelDetails?.value;
  const id = hotelID?.value;
  const imgUrll = imgUrl;
  const inDate = checkIn.value;
  const outDate = checkOut.value;

  const query = {
    name: hotel.hotel_name,
    id: id,
    img: imgUrll,
    price: Math.ceil(
      hotel.composite_price_breakdown.all_inclusive_amount.value
    ),
    reviewScore: hotel.breakfast_review_score.review_score,
    reviewCount: hotel.breakfast_review_score.review_count,
    checkIn: inDate,
    checkOut: outDate,
  };
  if (currentUser) {
    router.push({ name: "payment", params: { query: JSON.stringify(query) } });
  } else {
    router.push("/");
  }
};

const getDetails = async (id) => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getDescriptionAndInfo",
    params: {
      hotel_id: id,
      languagecode: "en-us",
    },
    headers: {
      "X-RapidAPI-Key": "260cdcdc4amsh2d9da86f908906bp11e256jsn73ea292a9926",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    description.value=response.data.data
    console.log(description.value);
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  data.value = JSON.parse(route.params.query);
  checkIn.value = new Date(data.value.checkIn).toISOString().split("T")[0];
  checkOut.value = new Date(data.value.checkOut).toISOString().split("T")[0];
  hotelID.value = data.value.hotelId;
  const id=hotelID.value;

  await fetchData();
  await getDetails(id);
  const long = hotelDetails.value.longitude;
  const lat = hotelDetails.value.latitude;
  imgSrc.value = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${long},${lat},17,0/400x240?access_token=${
    import.meta.env.VITE_MAPBOX_KEY
  }`;
});

async function fetchData() {
  try {
    const response = await axios.request({
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
      params: {
        hotel_id: hotelID.value,
        arrival_date: checkIn.value,
        departure_date: checkOut.value,
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    });

    hotelDetails.value = response.data.data;
    console.log(hotelID.value);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
