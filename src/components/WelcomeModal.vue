<template>
  <Transition name="modal-outer">
    <div
      v-show="user.isFirstVisit"
      class="fixed z-50 w-full bg-black bg-opacity-50 h-screen top-0 left-0 flex justify-center px-8"
    >
      <Transition name="modal-inner">
        <div
          v-if="user.isFirstVisit"
          class="p-5 rounded-xl items-center relative bg-[#EEEEEE] self-start mt-36 flex flex-col"
        >
          <div
            class="w-[240px] h-[200px] bg-[#2F80ED] relative flex items-center justify-center rounded-[100px] mt-[50px] opacity-[30%] mx-[80px]"
          ></div>
          <img
            class="ml-1 z-30 mt-4 absolute left-[127px] top-[63px]"
            src="@/assets/rightGuy.png"
            alt=""
          />
          <img
            class="mt-4 absolute left-[200px] top-[58px]"
            src="@/assets/leftGirl.png"
            alt=""
          />
          <h1
            class="text-[20px] font-semibold text-[#181818] mb-[12px] mt-[45px]"
          >
            Welcome to My Dream Place
          </h1>
          <p class="text-[16px] text-[#4F4F4F] font-normal text-center">
            You can now enjoy your travel experience with <br />
            easy access to resources and more
          </p>
          <button
            @click="user.visited()"
            class="text-white w-[352px] rounded-lg mt-[45px] font-bold transition-all hover:shadow-lg duration-300 hover:scale-105 bg-[#2F80ED] py-3 px-6"
          >
            Get Started
          </button>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";
import { useUsersStore } from "@/stores/users";

const user = useUsersStore();

</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
