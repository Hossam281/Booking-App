import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";
import CryptoJS from "crypto-js";

const searchQueryObject = ref(null);

const getSearchQueryObject = (query) => {
  searchQueryObject.value = query;
};
export const useUsersStore = defineStore("users", () => {
  const users = ref(JSON.parse(localStorage.getItem("users")) || []);
  const currentUser = ref(JSON.parse(sessionStorage.getItem("user")) || null);
  const isFirstVisit = ref(true);

  watchEffect(() => {
    localStorage.setItem("users", JSON.stringify(users.value));
    sessionStorage.setItem("user", JSON.stringify(currentUser.value));
  });

  function visited() {
    isFirstVisit.value = false;
  }
  function encrypt(password) {
    const passphrase = import.meta.env.VITE_PASSPHRASE;
    const encrypted = CryptoJS.AES.encrypt(password, passphrase);
    return encrypted.toString();
  }

  function decrypt(password) {
    const passphrase = import.meta.env.VITE_PASSPHRASE;
    const bytes = CryptoJS.AES.decrypt(password, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }

  function addUser(user) {
    const existingUser = users.value.find((u) => decrypt(u.email) === user.email);
    if (existingUser) {
      throw new Error("User already exists");
    } else {
      user.id = crypto.randomUUID();
      user.password = encrypt(user.password);
      user.email = encrypt(user.email);
      currentUser.value = user;
      users.value.push(user);
    }
  }
  const addTrip = (trip) => {
    if (currentUser.value) {
      currentUser.value.favtrips.push(trip);
      users.value.forEach(user => {
        if (user.id === currentUser.value.id) {
          user.favtrips.push(trip);
        }
      });
    }
  }
  function authenticateUser(email, password) {
    const user = users.value.find(
      (user) => decrypt(user.email) === email && decrypt(user.password) === password
    );

    if (user) {
      currentUser.value = user;
    } else {
      currentUser.value = null;
      throw new Error("Invalid email or password");
    }
  }
  function signOut() {
    
    sessionStorage.removeItem("user");
    window.location.reload();
  }

  return {
    users,
    currentUser,
    searchQueryObject,
    isFirstVisit,
    visited,
    addUser,
    authenticateUser,
    encrypt,
    decrypt,
    signOut,
    getSearchQueryObject,
    addTrip
  };
});
