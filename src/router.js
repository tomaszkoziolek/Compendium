import { createRouter, createWebHistory } from "vue-router";
import MainContent from "./components/layout/MainContent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/main", component: MainContent },
  ],
});

export default router;
