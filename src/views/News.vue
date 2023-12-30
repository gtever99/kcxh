<script setup lang="ts">
import NewsList from "@/components/newsList/NewsList.vue";
import { onMounted, onUnmounted, reactive, watch } from "vue";
import { IgetNewsListParams, INewsCategory, NesListItem } from "@/apis/type.t";
import { getNewsCategory, getNewsList } from "@/apis/api";
import { useRoute } from "vue-router";

const data: {
  newsListData: NesListItem[];
  params: IgetNewsListParams;
  categoryList: INewsCategory[];
  loading: boolean;
  isNext: boolean;
} = reactive({
  newsListData: [],
  params: {
    cid: parseInt((useRoute().query.cid as string) || "0"),
    page: 1,
    limit: 6
  },
  categoryList: [],
  isNext: true,
  loading: false
});

onMounted(() => {
  getNewsCategory().then(res => {
    data.categoryList = res.result;
  });
  addEventListener("scroll", topScrollLoad);

  watch(
    () => data.params.cid,
    () => {
      data.newsListData = [];
      data.params.page = 1;
      getData();
    },
    {
      immediate: true
    }
  );
});
onUnmounted(() => {
  removeEventListener("scroll", topScrollLoad);
});

const footerHeight = document.querySelector(".footer")!.clientHeight;
const topScrollLoad = () => {
  const dde = document.documentElement;
  const distance = dde.offsetHeight - dde.scrollTop - dde.clientHeight;
  if (data.loading || !data.isNext) return;
  if (distance - footerHeight < 0) {
    data.loading = true;
    data.params.page++;
    getData();
  }
};

const getData = () => {
  getNewsList(data.params).then(res => {
    data.newsListData = [...data.newsListData, ...res.result.articles];
    data.isNext = res.result.has_next;
    data.loading = false;
  });
};
</script>

<template>
  <div class="news">
    <div class="news-wrap">
      <ul class="news_menu">
        <li
          v-for="item in data.categoryList"
          :class="data.params.cid === item.cid ? 'news_menu--active' : ''"
          :key="item"
          @click="data.params.cid = item.cid"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <ul class="news-list">
      <news-list :is-column="true" :newsListData="data.newsListData" />
      <p style="margin-top: 20px" v-if="data.loading">加载中...</p>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.news {
  background: url("@/assets/images/bg/news-bg.jpg") no-repeat center top #fff;
  padding-bottom: 50px;
  &-wrap {
    display: flex;
    justify-content: center;
  }
  &-list {
    width: $widthNum;
    margin: 0 auto;
  }
  &_menu {
    display: flex;
    flex-wrap: wrap;
    margin: 30px auto 50px auto;
    justify-content: space-between;
    padding: 0 10px;
    li {
      margin-right: 50px;
      color: #333;
      cursor: pointer;
      transition: 0.3s;
      margin-bottom: 10px;
      font-size: 22px;
      &:last-child {
        margin-right: 0;
      }
      @media (max-width: 768px) {
        margin-right: 50px !important;
        font-size: 18px;
      }
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
