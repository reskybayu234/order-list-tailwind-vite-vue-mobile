import { createPinia, defineStore } from "pinia";
import axios from "axios";

const pinia = createPinia();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: null,
    refreshToken: null,
    email: null,
  }),
  actions: {
    async login(payload) {
      const response = await axios.post("http://localhost:7000/login", payload);

      this.accessToken = response.data.accessToken;
      this.refreshToken = response.data.refreshToken;
      this.email = response.data.email;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage,
        paths: ["accessToken", "refreshToken", "email"],
      },
      {
        storage: localStorage,
        paths: ["accessToken", "refreshToken", "email"],
      },
    ],
  },
});
