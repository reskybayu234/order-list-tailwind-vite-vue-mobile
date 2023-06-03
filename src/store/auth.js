import { createPinia, defineStore } from "pinia";
import axios from "axios";

const pinia = createPinia();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: null,
    refreshToken: null,
    email: null,
    data : null,
  }),
  getters : {
    getData(){
      return this.data
    }
  },
  actions: {
    login(payload) {
      let data;
      new Promise((resolve, reject) => {
        axios
          .post("http://localhost:7000/login", payload)
          .then((response) => {
            this.accessToken = response.data.accessToken;
            this.refreshToken = response.data.refreshToken;
            this.email = response.data.email;
            this.data = response
            resolve(response);
          })
          .catch((err) => {
            console.error(err);
            reject(err);
          });
      });
      // const response = await axios.post("http://localhost:7000/login", payload);
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
