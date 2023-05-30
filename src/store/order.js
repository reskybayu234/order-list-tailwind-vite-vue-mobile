import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", {
  state: () => ({
    name: "Lepputoppu",
  }),
});
