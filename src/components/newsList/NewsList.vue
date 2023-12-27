<script setup lang="ts">
import { INewsItem } from "@/components/newsList/type";

interface Props {
  newsListData: INewsItem[];
}

withDefaults(defineProps<Props>(), {
  newsListData: () => {
    return [
      {
        classify: "国内盛典",
        createTime: "2019-08-01",
        describe:
          "新一轮科技革命和金融业变革正在形成历史性交汇。人工智能、大数据、区块链等技术的蓬勃发展11111111111111111",
        title: "另类投资全球金融峰会 用科技塑造金融未来",
        imgUrl:
          "https://www.gtcom.com.cn/data/uploads/2019/08/01/1564627535.jpg",
        id: "3"
      },
      {
        classify: "国内盛典",
        createTime: "2019-08-01",
        describe:
          "新一轮科技革命和金融业变革正在形成历史性交汇。人工智能、大数据、区块链等技术的蓬勃发展11111111111111111",
        title: "另类投资全球金融峰会 用科技塑造金融未来",
        imgUrl:
          "https://www.gtcom.com.cn/data/uploads/2019/07/31/1564561455.jpg",
        id: "2"
      },
      {
        classify: "国内盛典",
        createTime: "2019-08-01",
        describe:
          "2019年7月30日至31日，“另类投资全球金融峰会”正式在北京拉开帷幕。来自金融、科技等.1111111.",
        title: "聚焦金融•科技 另类投资全球金融峰会引爆关注",
        imgUrl:
          "https://www.gtcom.com.cn/data/uploads/2019/07/31/1564560919.jpg",
        id: "1"
      }
    ];
  }
});
</script>

<template>
  <div class="newsList">
    <router-link
      v-for="item in newsListData"
      to="/"
      class="newsList_item"
      :key="item.title"
    >
      <div class="img">
        <img :src="item.imgUrl" alt="" />
      </div>
      <div class="newsList_item-con">
        <h3>{{ item.title }}</h3>
        <h4>
          <span>{{ item.classify }}</span>
          2019-07-31
        </h4>
        <p>{{ item.describe }}</p>
        <el-icon><Right /></el-icon>
      </div>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.newsList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .img {
    height: 236px;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
    @media (max-width: 1200px) {
      height: 200px;
    }
    @media (max-width: 892px) {
      height: 150px;
    }
    @media (max-width: 768px) {
      height: 300px;
    }
    @media (max-width: 568px) {
      height: 230px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1);
      transition: 0.3s;
    }
  }
  &_item {
    width: calc(33.33% - 20px);
    margin-bottom: 30px;
    @media (max-width: 768px) {
      width: 100%;
    }
    &-con {
      height: 140px;
      padding: 20px;
      border: 1px solid #e5e5e5;
      background-color: #fff;
      position: relative;
      transition: 0.3s;
      @media (max-width: 768px) {
        height: 100px;
      }
      h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 0 10px 0;
        font-size: 18px;
        color: #333;
        transition: 0.3s;
      }
      h4 {
        white-space: nowrap;
        margin: 0 0 5px 0;
        font-size: 12px;
        color: #999;
        font-weight: bold;
        span {
          color: $pageThemeColor;
          margin-right: 10px;
        }
      }
      p {
        font-size: 14px;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        @media (max-width: 768px) {
          -webkit-line-clamp: 2;
        }
      }
      i {
        font-size: 22px;
        color: #666;
        position: absolute;
        bottom: 15px;
        right: 35px;
        transition: 0.3s;
        opacity: 0;
      }
    }
    &:hover {
      i {
        opacity: 1;
        right: 15px;
        color: $pageThemeColor;
      }
      .newsList_item-con {
        border-bottom-color: $pageThemeColor;
      }
      h3 {
        color: $pageThemeColor;
      }
      .img {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
