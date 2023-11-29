<template>
  <div class="text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex justify-center rounded-full w-[44px] h-[44px] text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          <img :src="icon" alt="" />
          <ChevronDownIcon
            class="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-[-80px] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                class="flex items-center gap-2 group w-full hover:bg-gray-300 rounded-md px-2 py-2 text-sm"
              >
                <img width="20" height="20" :src="userIcon" alt="" />
                <span>Mange account</span>
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <router-link
                :to="{
                  name: 'usertrips',
                  params: { userId: currentUserId || 404 },
                }"
                class="flex items-center gap-2 group w-full hover:bg-gray-300 rounded-md px-2 py-2 text-sm"
              >
                <img
                  width="20"
                  class="stroke-white"
                  height="20"
                  :src="plane"
                  alt=""
                />
                <span>My Trips</span>
              </router-link>
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                class="flex items-center gap-2 group w-full hover:bg-gray-300 rounded-md px-2 py-2 text-sm"
              >
                <img width="20" height="20" :src="wallet" alt="" />
                <span>Reward and wallet</span>
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                @click="
                  async () => {
                    await router.push('/');
                    user.signOut();
                  }
                "
                class="flex items-center gap-2 group w-full hover:bg-gray-300 rounded-md px-2 py-2 text-sm"
              >
                <img width="20" height="20" :src="logout" alt="" />
                <span>Sign Out</span>
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import icon from "@/assets/icon.png";
import userIcon from "@/assets/dropdownIcons/user-square.svg";
import plane from "@/assets/dropdownIcons/plane.svg";
import wallet from "@/assets/dropdownIcons/wallet.svg";
import logout from "@/assets/dropdownIcons/logout.svg";
import { useUsersStore } from "@/stores/users.js";
import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";

const router = useRouter();
const user = useUsersStore();
const currentUserId=user.currentUser.id
</script>
