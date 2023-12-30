import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: "/schoolAll",
    name: "schoolAll",
    component: () => import("@/views/SchoolAllView.vue")
  },
  {
    path: "/richTextRender",
    name: "richTextRender",
    component: () => import("@/views/RichTextRender.vue")
  },
  {
    path: "/con",
    name: "bannerSolt",
    component: () => import("@/views/BannerSolt.vue"),
    children: [
      {
        path: "news",
        name: "news",
        component: () => import("@/views/News.vue"),
        meta: {
          bannerUrl: require("@/assets/images/banner/news-banner.jpg"),
          title: "新闻咨询"
        }
      },
      {
        path: "mathAnalysisPlatformView",
        name: "mathAnalysisPlatformView",
        component: () =>
          import("@/views/products/MathAnalysisPlatformView.vue"),
        meta: {
          bannerUrl: require("@/assets/images/banner/sjpt-banner.png"),
          title: "审计思维教学案例分析平台"
        }
      },
      {
        path: "aboutUsView",
        name: "aboutUsView",
        component: () => import("@/views/AboutUsView.vue"),
        meta: {
          bannerUrl: require("@/assets/images/banner/aboutUsView-banner.jpg"),
          title: "公司简介"
        }
      },
      {
        path: "leaveMessage",
        name: "leaveMessage",
        component: () => import("@/views/LeaveMessageView.vue"),
        meta: {
          bannerUrl: require("@/assets/images/banner/leaveMessage-banner.png"),
          title: "留言板"
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const title = "括创信达";
  const currTitle = to.meta.title;
  window.document.title = (
    currTitle ? `${title} — ${currTitle}` : `${title}`
  ) as string;
  window.scrollTo(0, 0);
  next();
});

export default router;
