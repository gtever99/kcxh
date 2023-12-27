import { store } from "@/stores";
import { defineStore } from "pinia";
import { INavDataItem } from "@/stores/modules/types";

const useGlobalData = defineStore("globalData", () => {
  const navDataList: INavDataItem[] = [
    {
      name: "首页",
      path: "/"
    },
    {
      name: "产品列表",
      path: "#",
      children: [
        {
          name: "审计思维教学案列平台",
          path: "#"
        }
      ]
    },
    {
      name: "公司简介",
      path: "#"
    },
    {
      name: "新闻咨询",
      path: "/con/news"
    },
    {
      name: "留言板",
      path: "#"
    }
  ];

  return {
    navDataList
  };
});

export function useGlobalDataHook() {
  return useGlobalData(store);
}
