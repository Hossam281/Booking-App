<template>
  <div class="w-full flex flex-col bg-[#F4F4F4] h-screen">
    <header class="w-full">
      <Navbar :isInLogin="isInLogin" />
    </header>
    <main class="w-full flex flex-col bg-[#F4F4F4] flex-1">
      <h1 class="text-[32px] pl-[100px] mb-[30px] pt-[128px] font-semibold">
        Secure your reservation
      </h1>
      <Covid />
      <div class="flex gap-[30px]">
        <!--Left section-->
        <div class="flex mb-[141px] gap-[30px] flex-col">
          <!--First form-->
          <section
            class="w-[810px] h-[328px] ml-[100px] overflow-hidden rounded-md bg-white flex flex-col"
          >
            <header
              class="flex h-[18%] items-center gap-[16px] w-full bg-[#2F80ED]"
            >
              <img
                src="@/assets/security.svg"
                class="ml-[20px]"
                alt=""
                srcset=""
              />
              <span class="text-white text-[18px] font-medium">Room 1</span>
              <p class="text-white text-[16px] font-medium">
                2 adults, 1 double bed and 1 twin bed, Non-smoking
              </p>
            </header>
            <div class="flex ml-[32px] gap-[20px] flex-col">
              <div class="flex mt-[32px] gap-[20px] items-center">
                <div class="flex gap-1 flex-col">
                  <span class="text-[14px] font-medium text-[#181818]"
                    >First name</span
                  >
                  <input
                    v-model="firstName"
                    placeholder="Jhon"
                    type="text"
                    class="w-[240px] placeholder:pl-[12px] focus:bg-white rounded-md outline-[#2F80ED] bg-[#F2F2F2] h-[44px]"
                  />
                </div>
                <div class="flex gap-1 flex-col">
                  <span class="text-[14px] font-medium text-[#181818]"
                    >Last name</span
                  >
                  <input
                    v-model="lastName"
                    placeholder="Doe"
                    type="text"
                    class="w-[240px] focus:bg-white placeholder:pl-[12px] rounded-md outline-[#2F80ED] bg-[#F2F2F2] h-[44px]"
                  />
                </div>
              </div>
              <div class="flex gap-[20px] items-center">
                <div class="flex gap-1 flex-col">
                  <span class="text-[14px] font-medium text-[#181818]"
                    >Mobile number</span
                  >
                  <div class="flex gap-[20px]">
                    <CountryCodeDropdown
                      class="w-[150px] bg-[#F2F2F2] rounded-md h-[44px]"
                    />

                    <input
                      v-model="phoneNumber"
                      placeholder="enter your phone number"
                      type="number"
                      class="w-[338px] focus:bg-white placeholder:pl-[12px] rounded-md outline-[#2F80ED] bg-[#F2F2F2] h-[44px]"
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-[8px]">
                <input type="checkbox" />
                <p class="text-[14px] font-normal">
                  Receive text alerts about this trip.
                </p>
              </div>
            </div>
          </section>
          <!--Second form-->
          <section
            class="w-[810px] h-[576px] ml-[100px] overflow-hidden rounded-md bg-white flex flex-col"
          >
            <header
              class="flex h-[60px] items-center gap-[16px] w-full bg-[#2F80ED]"
            >
              <img src="@/assets/card.svg" class="ml-[20px]" alt="" srcset="" />
              <span class="text-white text-[18px] font-medium"
                >Payment options</span
              >
            </header>
            <span
              class="text-[14px] border-b-4 w-[136px] text-center border-b-[#2F80ED] font-medium mt-[8px] text-[#181818] px-[14x] py-[10px] ml-[46px]"
              >Debit/Credit Card</span
            >
            <hr />
            <div class="flex ml-[32px] gap-[20px] flex-col">
              <div class="flex mt-[32px] gap-[6px] items-center">
                <div
                  v-for="logo in logos"
                  class="flex bg-[#F2F2F2] rounded-md items-center justify-center w-[60px] h-[40px]"
                >
                  <img :src="logo" alt="" srcset="" />
                </div>
              </div>
              <div class="flex gap-1 flex-col">
                <span class="text-[14px] font-medium text-[#181818]"
                  >Name on card</span
                >
                <div class="flex gap-[16px] items-center">
                  <input
                    v-model="nameOnCard"
                    placeholder="Jhon"
                    type="text"
                    class="w-[500px] placeholder:pl-[12px] focus:bg-white rounded-md outline-[#2F80ED] bg-[#F2F2F2] h-[44px]"
                  />
                  <img src="@/assets/tic.png" alt="" />
                </div>
              </div>
              <div class="flex gap-1 flex-col">
                <span class="text-[14px] font-medium text-[#181818]"
                  >Debit/Credit card number</span
                >
                <div class="flex gap-[16px] items-center">
                  <input
                    v-model="cardNumber"
                    placeholder="1234xxxxxxx"
                    type="number"
                    class="w-[500px] placeholder:pl-[12px] focus:bg-white rounded-md outline-[#2F80ED] bg-[#F2F2F2] h-[44px]"
                  />
                  <img src="@/assets/tic.png" alt="" />
                </div>
              </div>
              <div class="flex gap-[20px] items-center">
                <div class="flex gap-1 flex-col">
                  <span class="text-[14px] font-medium text-[#181818]"
                    >Expiry date
                  </span>
                  <div class="flex items-center gap-[20px]">
                    <MonthsDropdown />
                    <YearsDropdown />
                    <img src="@/assets/tic.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-[8px]">
                <div class="flex gap-1 flex-col">
                  <span class="text-[14px] font-medium text-[#181818]"
                    >Security Code</span
                  >
                  <input
                    v-model="securityCode"
                    placeholder="1234xxx"
                    type="number"
                    class="w-[240px] placeholder:pl-[12px] focus:bg-white rounded-md outline-[#2F80ED] bg-[#F2F2F2] h-[44px]"
                  />
                </div>
                <div class="flex gap-1 flex-col">
                  <span class="text-[14px] font-medium text-[#181818]"
                    >Billing Zip code</span
                  >
                  <input
                    v-model="billingZipCode"
                    placeholder="1234xxx"
                    type="number"
                    class="w-[240px] focus:bg-white placeholder:pl-[12px] rounded-md outline-[#2F80ED] bg-[#F2F2F2] h-[44px]"
                  />
                </div>
                <img class="mt-6" src="@/assets/tic.png" alt="" />
              </div>
            </div>
          </section>
          <!--Third form-->
          <section
            class="w-[810px] ml-[100px] overflow-hidden rounded-md bg-white flex flex-col"
          >
            <header
              class="flex h-[60px] items-center gap-[16px] w-full bg-[#F2C94C]"
            >
              <h1 class="text-black text-[18px] ml-[24px] font-medium">
                Important information about your booking
              </h1>
            </header>
            <div class="flex ml-[32px] flex-col">
              <ol
                class="text-black list-decimal mt-[32px] ml-[24px] flex flex-col gap-2"
              >
                <li>
                  This rate is non-refundable. If you change or cancel your
                  booking you will not get a refund or credit to use for a
                  future stay.
                </li>
                <li>Stay extensions will require a new reservation.</li>
                <li>Front desk staff will greet guests on arrival</li>
                <li>
                  No refunds will be issued for late check-in or early
                  check-out.
                </li>
              </ol>
              <p class="mt-[32px] text-[#4F4F4F] text-[14px]">
                By clicking the button below, I acknowledge that I have reviewed
                the
                <span class="text-[#2F80ED] cursor-pointer"
                  >Privacy Statement</span
                >
                and have reviewd and accept the
                <span class="text-[#2F80ED] cursor-pointer"
                  >Rules and Restrictions</span
                >
                and
                <span class="text-[#2F80ED] cursor-pointer">Terms of Use</span>
                .
              </p>
              <button
                @click="handleClick()"
                class="w-[160px] h-[44px] hover:bg-blue-600 transition-all duration-300 bg-[#2F80ED] rounded-md mt-[24px] mb-[21px] text-white text-[15px] font-medium"
              >
                Continue Booking
              </button>
            </div>
            <div class="flex items-center gap-[8px] ml-[24px] mb-[32px]">
              <img src="@/assets/lock.svg" alt="" />
              <p class="text-[14px] text-[#4F4F4F] font-normal">
                We use secure transmission and encrypted storage to protect your
                personal information
              </p>
            </div>
          </section>
        </div>
        <!----Right section-->
        <div class="flex flex-col gap-[30px]">
          <!--First section-->
          <div
            class="w-[400px] rounded-md overflow-hidden flex bg-white flex-col"
          >
            <img class="w-full h-[180px]" :src="data?.img" alt="" />
            <div class="flex flex-col mb-[20px] gap-[10px] ml-[20px] mt-[20px]">
              <h1 class="mb-[8px] text-[18px] font-medium">
                {{ data?.name }}
              </h1>
              <div class="flex items-center gap-[10px]">
                <img width="80" height="40" src="@/assets/stars.svg" alt="" />
                <span class="text-[14px] font-normal text-[#4F4F4F]"
                  >{{ data?.reviewScore }}({{
                    data?.reviewCount
                  }}
                  Reviews)</span
                >
              </div>
              <span class="text-[14px] font-normal text-[#EB5757]"
                >Non refundable</span
              >
              <span class="text-[14px] font-normal text-[#4F4F4F]">
                Check In : {{ data?.checkIn }}</span
              >
              <span class="text-[14px] font-normal text-[#4F4F4F]">
                Check out : {{ data?.checkOut }}</span
              >
              <span class="text-[14px] font-normal text-[#4F4F4F]"
                >2 nights stay</span
              >
            </div>
          </div>
          <!--Second section-->
          <div
            class="flex flex-col w-[400px] overflow-hidden h-[217px] bg-white rounded-md"
          >
            <header class="w-full bg-[#85E0AB]">
              <h1
                class="text-[16px] py-[18px] pl-[18px] font-medium text-[#181818]"
              >
                Price Details
              </h1>
            </header>
            <div
              class="flex flex-col gap-[12px] mt-[23px] text-[14px] mb-[20px] text-[#4F4F4F] font-normal"
            >
              <div class="flex justify-between px-5">
                <span>1 room X 2 nights</span>
                <span>$ {{ Math.round((93.5 / 100) * data?.price) }}</span>
              </div>
              <div class="flex justify-between px-5">
                <span>Tax and service fees</span>
                <span>$ {{ Math.round((6.5 / 100) * data?.price) }}</span>
              </div>
            </div>
            <hr />
            <div class="flex my-auto justify-between px-5">
              <span class="text-[#181818] text-[16px] font-medium">Total</span>
              <span class="text-[#181818] text-[16px] font-medium"
                >$ {{ data?.price }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </main>
    <Modal @close="handleClose()" :modalActive="modalActive"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import { useRoute } from "vue-router";
import Covid from "@/components/Covid.vue";
import Visa from "@/assets/visa.png";
import Mastercard from "@/assets/master.png";
import AmericanExpress from "@/assets/american.png";
import Discover from "@/assets/discover.png";
import YearsDropdown from "@/components/YearsDropdown.vue";
import MonthsDropdown from "@/components/MonthsDropdown.vue";
import CountryCodeDropdown from "@/components/CountryCodeDropdown.vue";
import { useUsersStore } from "@/stores/users.js";
import { useToast } from "vue-toastification";
import Modal from "@/components/Modal.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const toast = useToast();
const user = useUsersStore();
const logos = [Visa, Mastercard, AmericanExpress, Discover];
const route = useRoute();
const data = ref(null);
const isInLogin = ref(true);

//inputs
const firstName = ref("");
const lastName = ref("");
const phoneNumber = ref("");
const nameOnCard = ref("");
const cardNumber = ref("");
const securityCode = ref("");
const billingZipCode = ref("");

const handleClick = () => {
  if (user.currentUser) {
    const temp = {
      name: data.value.name,
      img: data.value.img,
      price: data.value.price,
      checkIn: data.value.checkIn,
      checkOut: data.value.checkOut,
      reviewScore: data.value.reviewScore,
      reviewCount: data.value.reviewCount,
    };

    if (
      firstName.value === "" ||
      lastName.value === "" ||
      phoneNumber.value === "" ||
      nameOnCard.value === "" ||
      cardNumber.value === "" ||
      securityCode.value === "" ||
      billingZipCode.value === ""
    ) {
      toast.error("Please fill in all the fields!");
      return;
    }
    user.addTrip(temp);
    toast.success("Trip added!");
    toggleModal();
  }
};
const modalActive = ref(null);
const toggleModal = async () => {
  modalActive.value = !modalActive.value;
};
const handleClose = () => {
  const userr=user.currentUser.id
  modalActive.value = false;
  router.push({
    name: "usertrips",
    params: { userId: userr },
  })
};

onMounted(async () => {
  data.value = JSON.parse(route.params.query);
  console.log(data.value);
});
</script>
