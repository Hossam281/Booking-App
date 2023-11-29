<template>
    <div class="w-full flex justify-between">
        <!-- Label -->
        <div class=" text-gray-700 font-normal text-[14px] ">Set your own budget</div>
      <label for="toggle" class="flex  items-center justify-between cursor-pointer">
        
        <div class="relative">
          <!-- Input -->
          <input
            id="toggle"
            type="checkbox"
            v-model="isChecked"
            class="hidden"
          />
          <!-- Indicator -->
          <div class="toggle__line w-10 h-5 bg-gray-400 rounded-full ml-auto shadow-inner"></div>
          <!-- Circle -->
          <div
            class="toggle__dot absolute w-5 h-5 top-0 bg-white transition-all duration-200 rounded-full shadow inset-y-0 left-0"
          ></div>
        </div>
        
      </label>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isChecked = ref(false);
  </script>
  
  <style scoped>
  /* Add your custom styles here if needed */
  .toggle__line {
    transition: all 0.3s;
  }
  
  #toggle:checked + .toggle__line {
    background-color: #2196F3; /* Change color when toggled on */
    transition: all 0.3s;
  }
  
  #toggle:checked + .toggle__line + .toggle__dot {
    transform: translateX(101%);
  }
  </style>