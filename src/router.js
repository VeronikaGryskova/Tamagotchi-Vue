import { createRouter, createWebHashHistory } from "vue-router";
import HistoryPage from "./components/pages/HistoryPage.vue";
import MainPage from "./components/pages/MainPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/history", component: HistoryPage },
  ],
});
