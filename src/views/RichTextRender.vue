<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getrichText } from "@/apis/api";
import { IRichText } from "@/apis/type.t";

const data: {
  rtData?: IRichText | {};
} = reactive({
  rtData: {}
});

onMounted(() => {
  const slug = useRoute().query.slug as string;
  if (slug) {
    getrichText(slug).then(res => {
      data.rtData = res.result;
    });
  }
});
</script>

<template>
  <div class="richTextRender">
    <div class="richTextRender_wrap">
      <div class="richTextRender-crumbs">
        <span>新闻资讯 > </span>
        <router-link to="/con/news">{{ data.rtData?.category }}</router-link>
      </div>
      <div class="richTextRender-content">
        <div class="richTextRender_head">
          <h1 class="richTextRender_head-title">{{ data.rtData?.title }}</h1>
          <div class="richTextRender_head_con">
            <div>
              <p
                v-for="item in data.rtData?.tags"
                class="richTextRender_head-category"
                :key="item.id"
              >
                {{ item.name }}
              </p>
            </div>
            <ul>
              <li>来源：{{ data.rtData?.source }}</li>
              <li>日期：{{ data.rtData?.published_at }}</li>
              <li>浏览次数：{{ data.rtData?.views }}</li>
            </ul>
          </div>
        </div>
        <div style="min-height: 50vh" v-html="data.rtData?.html_content" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.richTextRender {
  background: url("@/assets/images/bg/news-bg.jpg") no-repeat center top #fff;
  width: 100%;
  padding: 20px 0 40px;
  &_wrap {
    width: $widthNum;
    margin: 0 auto;
  }
  &-crumbs {
    margin-bottom: 10px;
    font-size: 14px;
  }
  &-content {
    width: 85%;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  &_head {
    padding-bottom: 35px;
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 10px;
    &-title {
      font-size: 28px;
      margin-bottom: 10px;
    }
    &_con {
      //display: flex;
      //align-items: center;
      & > div {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
      }
    }
    &-category {
      padding: 0 10px;
      border: 1px solid $pageThemeColor;
      line-height: 28px;
      font-size: 14px;
      color: $pageThemeColor;
      background: #fff;
      transition: 0.3s;
      margin-right: 20px;
      &:hover {
        background-color: $pageThemeColor;
        color: #fff;
      }
    }
    ul {
      display: flex;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      li {
        margin-right: 20px;
        font-size: 14px;
      }
    }
  }
}
</style>
