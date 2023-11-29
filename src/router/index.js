import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import { useUsersStore as users } from "@/stores/users";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
    },
    {
      name: "search",
      path: "/search/serchResults/:query",
      component: () => import("@/views/searchResults.vue"),
      beforeEnter: (to, from, next) => {
        const loggedIn = users.currentUser;
        if (loggedIn && to.name !== "login") {
          next({ name: "login" });
        } else {
          next();
        }
      },
    },
    {
      name: "hotelDetails",
      path: "/hotel/:query",
      component: () => import("@/views/HotelDetails.vue"),
      beforeEnter: (to, from, next) => {
        const loggedIn = users.currentUser;
        if (loggedIn && to.name !== "login") {
          next({ name: "login" });
        } else {
          next();
        }
      },
    },
    {
      name: "payment",
      path: "/payment/:query",
      component: () => import("@/views/Payment.vue"),
      beforeEnter: (to, from, next) => {
        const loggedIn = users.currentUser;
        if (loggedIn && to.name !== "login") {
          next({ name: "login" });
        } else {
          next();
        }
      },
    },
    {
      name: "usertrips",
      path: "/usertrips/:userId",
      component: () => import("@/views/UserTrips.vue"),
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/login.vue"),
    },
    {
      name: "signup",
      path: "/signup",
      component: () => import("@/views/signup.vue"),
    },
  ],
});

export default router;
