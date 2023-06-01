import { createRouter, createWebHistory } from "vue-router";
import Order from "../views/Order.vue";
import Login from "../views/Login.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/order", component: Order },
    { path: "/login", component: Login },
  ],
});
