import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupStore } from "@/stores";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// swiper 样式
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./styles/index.scss";

const app = createApp(App);
// 使用的字体图标
const useIcon = [
  "Expand",
  "CloseBold",
  "UserFilled",
  "Iphone",
  "Location",
  "Right"
];
for (const key in useIcon) {
  // @ts-ignore
  app.component(useIcon[key], ElementPlusIconsVue[useIcon[key]]);
}
app.use(router).mount("#app");
setupStore(app);
