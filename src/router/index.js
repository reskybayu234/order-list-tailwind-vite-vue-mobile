import { createRouter, createWebHistory } from "vue-router";
import Order from "../views/Order.vue";
import Coba from "../views/Coba.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/order", component: Order },
    { path: "/coba", component: Coba },
  ],
});
