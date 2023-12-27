<script lang="ts" setup>
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref } from "vue";
import echarChinaMap from "@/chars/echarChinaMap";

const swiperData = ref([
  {
    imgUrl: "https://static.www.tencent.com/img/banner/tanlive.jpg",
    path: "www.baidu.com"
  },
  {
    imgUrl:
      "https://static.www.tencent.com/uploads/2023/07/26/267cf26f9cdd69793c0ae269d4a81ce6.jpg",
    path: "www.baidu.com"
  }
]);

const newsDataList = [
  {
    path: "#",
    title: "新闻1",
    content: "新闻内容1",
    imgUrl:
      "https://www.ctpc.com.cn/cms/res_base/dwfymh/upload/article/image/2023_4/12_19/hjcclqc33u80.jpg"
  },
  {
    path: "#",
    title: "新闻2",
    content: "新闻内容2",
    imgUrl:
      "https://www.ctpc.com.cn/cms/res_base/dwfymh/upload/article/image/2023_4/12_25/om7zlqkhied8.jpg"
  },
  {
    path: "#",
    title: "新闻3",
    content: "新闻内容3",
    imgUrl:
      "https://www.ctpc.com.cn/cms/res_base/dwfymh/upload/article/image/2023_4/12_25/ii54lqkhfvtx.jpg"
  },
  {
    path: "#",
    title: "新闻4",
    content: "新闻内容4",
    imgUrl:
      "https://www.ctpc.com.cn/cms/res_base/dwfymh/upload/article/image/2023_4/11_14/ngm7loxrg8pp.png"
  }
];

onMounted(() => {
  echarChinaMap("chinaMap");
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
      v-for="(item, index) in swiperData"
      :key="index"
      class="teacher_li"
    >
      <div class="teacher_pW">
        <!--        <p >{{swiperData}}</p>-->
        <img :src="item.imgUrl" alt="swiperImg" />
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
      <router-link to="#">查看更多</router-link>
    </div>
  </div>
  <!--  合作院校-->
  <h2 class="home-title">合作院校</h2>
  <div class="academy">
    <div style="width: 100%; height: 600px" id="chinaMap" />
    <ul class="academy_list">
      <li v-for="ind in 8" :key="ind" class="academy_list-item">
        <img
          src="https://static.www.tencent.com/uploads/2023/07/26/267cf26f9cdd69793c0ae269d4a81ce6.jpg"
          alt=""
        />
        <p>合作院校</p>
      </li>
    </ul>
    <router-link to="#">查看更多</router-link>
  </div>
  <!--  新闻咨询-->
  <h2 class="home-title">新闻咨询</h2>
  <div class="news">
    <ul class="news_list">
      <li v-for="item in newsDataList" class="news_list-item" :key="item.title">
        <a :href="item.path">
          <div class="news_list-img">
            <img :src="item.imgUrl" alt="" />
          </div>
          <p class="news_list-text">{{ item.title }}</p>
        </a>
      </li>
    </ul>
    <router-link to="#">查看更多</router-link>
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
    height: 50vh;
    @media (max-width: 768px) {
      height: 40vh;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
.home-title {
  width: $widthNum;
  margin: 20px auto;
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
      font-family: "宋体";
      @media (max-width: 992px) {
        margin-bottom: 10px;
        line-height: 23px;
      }
    }
    a {
      font-weight: 900;
      display: block;
      text-align: right;
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
  &_list {
    display: flex;
    flex-flow: wrap;
    margin-top: 50px;
    justify-content: space-between;
    &-item {
      width: calc(25% - 15px);
      margin-bottom: 20px;
      @media (max-width: 768px) {
        width: calc(50% - 10px);
        &:nth-last-child(-n + 4) {
          display: none;
        }
      }
    }
  }
  & > a {
    display: block;
    text-align: right;
    font-weight: 900;
  }
}
.news {
  width: $widthNum;
  margin: 0 auto;
  &_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-item {
      margin-bottom: 20px;
      width: calc(25% - 15px);
      @media (max-width: 927px) {
        width: calc(50% - 10px);
      }
      @media (max-width: 547px) {
        width: 100%;
      }
    }
    &-img {
      height: 200px;
      overflow: hidden;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        transform: scale(1);
        transition: 0.3s;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    &-text {
      margin-top: 10px;
    }
  }
  & > a {
    display: block;
    text-align: right;
    font-weight: 900;
  }
}
</style>
