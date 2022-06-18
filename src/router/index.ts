import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/dev",
    name: "Dev",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DevelopmentView.vue"),
  },
  {
    path: "/gaming",
    name: "Gaming",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GamingView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
