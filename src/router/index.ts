import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: "/con",
    name: "bannerSolt",
    component: () => import("@/views/BannerSolt.vue"),
    children: [
      {
        path: "news",
        name: "news",
        component: () => import("@/views/News.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
