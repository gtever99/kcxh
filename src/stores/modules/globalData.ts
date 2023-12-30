import { store } from "@/stores";
import { defineStore } from "pinia";
import { INavDataItem } from "@/stores/modules/types";
import { getSchoolList } from "@/apis/api";
import { IChoolItem } from "@/apis/type.t";

const useGlobalData = defineStore("globalData", () => {
  const navDataList: INavDataItem[] = [
    {
      name: "首页",
      path: "/"
    },
    {
      name: "产品列表",
      path: "",
      children: [
        {
          name: "审计思维教学案列平台",
          path: "/con/mathAnalysisPlatformView"
        }
      ]
    },
    {
      name: "公司简介",
      path: "/con/aboutUsView"
    },
    {
      name: "新闻资讯",
      path: "/con/news"
    },
    {
      name: "留言板",
      path: "/con/leaveMessage"
    }
  ];

  let schoolList: IChoolItem[] = [];
  const getSchoolData: () => Promise<IChoolItem[]> = () => {
    return new Promise(resolve => {
      if (schoolList?.length === 0) {
        getSchoolList().then(res => {
          schoolList = res.result;
          resolve(schoolList);
        });
      } else {
        resolve(schoolList);
      }
    });
  };

  return {
    navDataList,
    getSchoolData
  };
});

export function useGlobalDataHook() {
  return useGlobalData(store);
}
