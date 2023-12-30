import service from "@/utils/service";
import {
  IBannerItem,
  IChoolGroupItem,
  IChoolItem,
  IContactsItem,
  IgetNewsListParams,
  IIgetNewsListRes,
  INewsCategory, IRichText, LeaveMessageParams
} from "./type.t";

// 获取轮播图数据
export const getBannerList = () => {
  return service<any, IBannerItem[]>({
    url: "/banner/"
  });
};

// 获取地图数据
export const getschoolGroupList = () => {
  return service<any, IChoolGroupItem[]>({
    url: "/schoolGroup/"
  });
};

// 获取合作院校
export const getSchoolList = () => {
  return service<any, IChoolItem[]>({
    url: "/school/",
    method: "POST"
  });
};

// 获取联系我们的信息
export const getContacts = () => {
  return service<any, IContactsItem[]>({
    url: "/contacts/"
  });
};

// 获取新闻列表
export const getNewsList = (params: IgetNewsListParams) => {
  return service<IgetNewsListParams, IIgetNewsListRes>({
    url: "/news/",
    data: params,
    method: "post"
  });
};

// 获取新闻目录
export const getNewsCategory = () => {
  return service<any, INewsCategory[]>({
    url: "/news/category/"
  });
};

// 添加留言
export const setLeaveMessage = (params: LeaveMessageParams) => {
  return service<LeaveMessageParams, any>({
    url: "/mb/add/",
    data: params,
    method: "post"
  });
};

// 获取富文本
export const getrichText = (slug: string) => {
  return service<any, IRichText>({
    url: `/news/${slug}/`,
    method: "get"
  });
};
