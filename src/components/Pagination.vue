<template>
  <div class="flex items-center space-x-2">
    <button
      class="px-3 cursor-pointer py-2 border shadow-md rounded-md font-bold border-gray-300 bg-white text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-200"
      @click="updateSelectedPage(selectedPage - 1)"
      :disabled="selectedPage === 1"
    >
      &lt;
    </button>

    <template v-if="numberOfPages > 1">
      <input
        type="radio"
        :id="'page1'"
        name="pagination"
        class="hidden"
        :value="1"
        @change="updateSelectedPage(1)"
        ref="radioButtons"
      />
      <label
        :for="'page1'"
        class="cursor-pointer px-3 py-2 text-center rounded-md w-[41px] h-[40px] hover:text-white hover:bg-blue-600 transition-all duration-300 border-none"
        :class="{
          'bg-blue-500 text-white hover:text-white': selectedPage === 1,
        }"
      >
        1
      </label>

      <template v-for="i in getDisplayPages()" :key="'label' + i">
        <input
          type="radio"
          :id="'page' + i"
          name="pagination"
          class="hidden"
          :value="i"
          @change="updateSelectedPage(i)"
          ref="radioButtons"
        />
        <label
          :for="'page' + i"
          class="cursor-pointer px-3 py-2 text-center rounded-md w-[41px] h-[40px] hover:bg-blue-600 transition-all duration-300 border-none text-gray-600"
          :class="{
            'bg-blue-500': selectedPage === i,
            'text-white': selectedPage === i,
            'hover:text-white': selectedPage !== i,
          }"
        >
          {{ i }}
        </label>
      </template>

      <template v-if="numberOfPages > 2">
        <span class="px-3 py-2 text-gray-600">...</span>
      </template>
    </template>

    <template v-if="numberOfPages > 1">
      <input
        type="radio"
        :id="'page' + numberOfPages"
        name="pagination"
        class="hidden"
        :value="numberOfPages"
        @change="updateSelectedPage(numberOfPages)"
        ref="radioButtons"
      />
      <label
        :for="'page' + numberOfPages"
        class="cursor-pointer px-3 hover:text-white py-2 rounded-md w-[41px]  text-center h-[40px] hover:bg-blue-600 transition-all duration-300 border-none text-gray-600"
        :class="{
          'bg-blue-500 text-white hover:text-white':
            selectedPage === numberOfPages,
        }"
      >
        {{ numberOfPages }}
      </label>
    </template>

    <button
      class="px-3 py-2 border cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-200 shadow-md rounded-md font-bold border-gray-300 bg-white text-gray-600"
      @click="updateSelectedPage(selectedPage + 1)"
      :disabled="selectedPage === numberOfPages"
    >
      &gt;
    </button>
  </div>
</template>

<script setup>
defineProps({
    numberOfPages:Number,
    selectedPage:Number,
    updateSelectedPage:Function,
    getDisplayPages:Function
})
</script>
