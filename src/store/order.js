import { defineStore } from "pinia";
import axios from "axios";

export const useOrderStore = defineStore("order", {
  state: () => ({
    name: "Lepputoppu",
  }),

  actions: {
    async fetchOrder() {
      const order = await axios.get("http://localhost:7000/order");
      console.log("order", order);
      return order;
    },
  },
});
