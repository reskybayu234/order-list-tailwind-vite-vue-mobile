import { defineStore } from "pinia";
import axios from "axios";

export const useOrderStore = defineStore("order", {
  state: () => ({
    name: "Lepputoppu",
  }),

  actions: {
    fetchOrder() {
      console.log("MASUK");
      return new Promise((resolve, reject) => {
        axios
          .get("http://localhost:7000/order")
          .then((res) => {
            console.log("RES", res);
          })
          .catch((err) => {
            console.log({ err });
          });
      });
      // const order = axios.get("http://localhost:7000/order");
      // console.log("order", order);
      // return order;
    },
  },
});
