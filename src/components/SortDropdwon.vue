<template>
  <div class="relative w-[190px]">
    <Listbox class="cursor-pointer" v-model="selectedSort">
      <div class="relative  cursor-pointer mt-1">
        
        <ListboxButton
          class="relative w-full cursor-pointer border rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
        <span class=" pb-4 text-[#828282]">sort by</span>
          <span class="block truncate">{{ selectedSort.name }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <img class="h-5 w-5 text-gray-400" src="@/assets/arrowDown.svg" />
          </span>
        </ListboxButton>
        
        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="item in sort"
              :key="item.name"
              :value="item"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-blue-400 text-white' : 'text-gray-900',
                  'relative cursor-pointer select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ item.name }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const sort = [
  { name: "Recommended" },
  { name: "Price (High to Low)" },
  { name: "Price (Low to High)" },
  { name: "Review Score" },
 
];
const selectedSort = ref(sort[0]);
</script>
