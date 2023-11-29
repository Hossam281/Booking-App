<template>
  <Transition name="modal-outer">
    <div
      v-show="modalActive"
      class="fixed z-50 w-full bg-black bg-opacity-50 h-screen top-0 left-0 flex justify-center px-8"
    >
      <Transition name="modal-inner">
        <div
          v-if="modalActive"
          class="p-5 rounded-xl items-center bg-[#EEEEEE] self-start mt-36 flex flex-col"
        >
          <div
            class="w-[240px] h-[200px] relative bg-[#6FCF97] flex items-center justify-center rounded-[10px] mt-[50px] opacity-[20%] mx-[80px]"
          >
            
          </div>
          <img class="absolute top-[235px] " src="@/assets/modalimg.png" alt="" />
          <h1
            class="text-[20px] font-semibold text-[#181818] mb-[12px] mt-[45px]"
          >
            Booking Successful
          </h1>
          <p class="text-[16px] text-[#4F4F4F] font-normal text-center">
            Congratulations your reservation has been made. <br />
            You will be notified 2 days prior the date.
          </p>
          <button
            @click="$emit('close')"
            class="text-white  w-[352px] rounded-lg mt-[45px] font-bold transition-all hover:shadow-lg duration-300 hover:scale-105 bg-[#2F80ED] py-3 px-6"
          >
          View Trip
          </button>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
defineEmits(["close"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
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
