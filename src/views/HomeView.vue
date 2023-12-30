<script lang="ts" setup>
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, reactive } from "vue";
import echarChinaMap from "@/chars/echarChinaMap";
import NewsList from "@/components/newsList/NewsList.vue";
import { getBannerList, getNewsList, getschoolGroupList } from "@/apis/api";
import { IBannerItem, IChoolItem, NesListItem } from "@/apis/type.t";
import { useGlobalDataHook } from "@/stores/modules/globalData";
import SchoolList from "@/components/schoolList/SchoolList.vue";

const data: {
  swiperData: IBannerItem[];
  apiUrl: string;
  schoolList: IChoolItem[];
  newsList: NesListItem[];
} = reactive({
  swiperData: [],
  apiUrl: "",
  schoolList: [],
  newsList: []
});

onMounted(() => {
  getNewsList({
    cid: 0,
    page: 1,
    limit: 3
  }).then(res => {
    data.newsList = res.result.articles;
  });
  getBannerList().then(res => {
    data.swiperData = res.result;
  });
  getschoolGroupList().then(res => {
    echarChinaMap("chinaMap", res.result);
  });
  useGlobalDataHook()
    .getSchoolData()
    .then(res => {
      data.schoolList = res;
    });
  data.apiUrl = process.env.VUE_APP_API_URL;
});
</script>

<template>
  <!--  轮播图-->
  <swiper
    :modules="[Pagination, Autoplay]"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    :autoplay="{ delay: 301100, disableOnInteraction: false }"
    loop
  >
    <swiper-slide
      v-for="(item, index) in data.swiperData"
      :key="index"
      class="teacher_li"
    >
      <div class="teacher_pW">
        <!--        <p >{{swiperData}}</p>-->
        <img :src="data.apiUrl + item.img" alt="swiperImg" />
      </div>
    </swiper-slide>
    >
  </swiper>
  <!--  产品介绍-->
  <h2 class="home-title">产品介绍</h2>
  <div class="introduce">
    <div class="introduce-img">
      <img
        src="https://static.www.tencent.com/uploads/2023/07/26/267cf26f9cdd69793c0ae269d4a81ce6.jpg"
        alt=""
      />
    </div>
    <div class="introduce-text">
      <p>
        审计思维教学案例分析平台以证监会处罚的真实案例为基础构成案例库（1600多个案例），老师根据案例库中的案例，从审计思维训练、结构化知识点训练、审计失败要因分析、责任认定等不同角度可以自由设计课程，组织实施翻转式实训教学。
      </p>
      <p>目前，平台设置了审计思维训练、审计案例两个标准实训课程。</p>
      <p>
        平台具备开源功能，老师可以在平台上添加案例，根据自身判断设计课程内容。
      </p>
      <!--      <router-link class="more" to="#">查看更多</router-link>-->
    </div>
  </div>
  <!--  合作院校-->
  <h2 class="home-title">合作院校</h2>
  <div class="academy">
    <div style="width: 100%; height: 600px" id="chinaMap" />
    <SchoolList :schoolList="data.schoolList" />
    <router-link class="more" to="/schoolAll" target="_blank">查看更多</router-link>
  </div>
  <!--  新闻咨询-->
  <h2 class="home-title">新闻咨询</h2>
  <div class="news">
    <news-list :news-list-data="data.newsList" />
    <router-link class="more" to="/con/news" target="_blank">查看更多</router-link>
  </div>
</template>

<style lang="scss">
.swiper {
  margin-bottom: 60px;
  .swiper-pagination {
    top: 90%;
    .swiper-slide {
      height: auto;
    }
    .swiper-pagination-bullet {
      width: 40px;
      height: 5px;
      border-radius: 0;
      margin-right: 8px;
      &:last-child {
        margin: 0;
      }
    }
  }
  .teacher_pW {
    width: 100%;
    height: 550px;
    @media (max-width: 1900px) {
      height: 450px;
    }
    @media (max-width: 1200px) {
      height: 400px;
    }
    @media (max-width: 768px) {
      height: 360px;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
.introduce {
  width: $widthNum;
  margin: 0 auto 80px auto;
  display: flex;
  justify-content: space-between;
  &-img {
    width: 50%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 15px;
    }
  }
  &-text {
    width: calc(50% - 50px);
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      text-indent: 32px;
      line-height: 26px;
      margin-bottom: 25px;
      @media (max-width: 992px) {
        margin-bottom: 10px;
        line-height: 23px;
      }
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
.academy {
  margin: 0 auto 50px auto;
  width: $widthNum;
}
.news {
  width: $widthNum;
  margin: 0 auto;
}
.more {
  margin-top: 5px;
  display: block;
  text-align: right;
  font-weight: 900;
  color: #353535;
  transition: 0.3s;
  &:hover {
    color: $pageThemeColor;
  }
}
</style>
