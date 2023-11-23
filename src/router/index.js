// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // 다른 라우트들...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
