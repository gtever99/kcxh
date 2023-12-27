<script setup lang="ts">
import NewsList from "@/components/newsList/NewsList.vue";
import { ref } from "vue";

const data = [
  {
    classify: "国内盛典",
    createTime: "2019-08-01",
    describe:
      "新一轮科技革命和金融业变革正在形成历史性交汇。人工智能、大数据、区块链等技术的蓬勃发展11111111111111111",
    title: "另类投资全球金融峰会 用科技塑造金融未来",
    imgUrl: "https://www.gtcom.com.cn/data/uploads/2019/08/01/1564627535.jpg",
    id: "3"
  },
  {
    classify: "国内盛典",
    createTime: "2019-08-01",
    describe:
      "新一轮科技革命和金融业变革正在形成历史性交汇。人工智能、大数据、区块链等技术的蓬勃发展11111111111111111",
    title: "另类投资全球金融峰会 用科技塑造金融未来",
    imgUrl: "https://www.gtcom.com.cn/data/uploads/2019/07/31/1564561455.jpg",
    id: "2"
  },
  {
    classify: "国内盛典",
    createTime: "2019-08-01",
    describe:
      "2019年7月30日至31日，“另类投资全球金融峰会”正式在北京拉开帷幕。来自金融、科技等.1111111.",
    title: "聚焦金融•科技 另类投资全球金融峰会引爆关注",
    imgUrl: "https://www.gtcom.com.cn/data/uploads/2019/07/31/1564560919.jpg",
    id: "1"
  },
  {
    classify: "国内盛典",
    createTime: "2019-08-01",
    describe:
      "新一轮科技革命和金融业变革正在形成历史性交汇。人工智能、大数据、区块链等技术的蓬勃发展11111111111111111",
    title: "另类投资全球金融峰会 用科技塑造金融未来",
    imgUrl: "https://www.gtcom.com.cn/data/uploads/2019/08/01/1564627535.jpg",
    id: "3"
  },
  {
    classify: "国内盛典",
    createTime: "2019-08-01",
    describe:
      "新一轮科技革命和金融业变革正在形成历史性交汇。人工智能、大数据、区块链等技术的蓬勃发展11111111111111111",
    title: "另类投资全球金融峰会 用科技塑造金融未来",
    imgUrl: "https://www.gtcom.com.cn/data/uploads/2019/07/31/1564561455.jpg",
    id: "2"
  },
  {
    classify: "国内盛典",
    createTime: "2019-08-01",
    describe:
      "2019年7月30日至31日，“另类投资全球金融峰会”正式在北京拉开帷幕。来自金融、科技等.1111111.",
    title: "聚焦金融•科技 另类投资全球金融峰会引爆关注",
    imgUrl: "https://www.gtcom.com.cn/data/uploads/2019/07/31/1564560919.jpg",
    id: "1"
  }
];

const typeActive = ref("全部");
</script>

<template>
  <div class="news">
    <ul class="news_menu">
      <li
        v-for="item in ['全部', '公司咨询', '行业咨询', '其它']"
        :class="typeActive === item ? 'news_menu--active' : ''"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
    <ul class="news-list">
      <news-list :newsListData="data" />
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </ul>
  </div>
</template>

<style scoped lang="scss">
.news {
  width: $widthNum;
  margin: 0 auto;
  &_menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0 50px 0;
    li {
      margin-right: 50px;
      color: #333;
      cursor: pointer;
      transition: 0.3s;
      margin-bottom: 10px;
      &:hover {
        color: $pageThemeColor;
      }
    }
    &--active {
      color: $pageThemeColor;
      &:after {
        content: "";
        width: 25px;
        height: 2px;
        display: block;
        background: $pageThemeColor;
        margin: 10px auto 0;
        transition: 0.3s;
      }
    }
  }
  :deep(.el-pagination) {
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
