import { defineStore } from "pinia";
import axios from "axios";

export const useOrderStore = defineStore("order", {
  state: () => ({
    name: "Lepputoppu",
    order: [],
  }),
  getters: {
    getOrder() {
      return this.order;
    },
  },
  actions: {
    fetchOrder(data) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:7000/order?page=${data.page}&limit=${data.itemsPerPage}&search=${data.search}`
          )
          .then((res) => {
            this.order = res.data;
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
            console.log({ err });
          });
      });
      // const order = axios.get("http://localhost:7000/order");
      // console.log("order", order);
      // return order;
    },
  },
});
