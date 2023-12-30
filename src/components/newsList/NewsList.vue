<script setup lang="ts">
import { NesListItem } from "@/apis/type.t";

interface Props {
  newsListData: NesListItem[];
  isColumn?: boolean;
}

withDefaults(defineProps<Props>(), {
  newsListData: () => {
    return [];
  },
  isColumn: false
});

const bodyWidth = document.body.offsetWidth;
const apiUrl = process.env.VUE_APP_API_URL;
</script>

<template>
  <div
    class="newsList"
    :class="isColumn && bodyWidth > 768 ? 'newsList--column' : ''"
  >
    <router-link
      v-for="item in newsListData"
      target="_blank"
      :to="'/richTextRender?slug=' + item.slug"
      class="newsList_item"
      :key="item.title"
    >
      <div class="img">
        <img :src="apiUrl + item.img" alt="" />
      </div>
      <div class="newsList_item-con">
        <h3>{{ item.title }}</h3>
        <h4>
          <span>{{ item.category }}</span>
          {{ item.published_at }}
        </h4>
        <p>{{ item.summary }}</p>
        <el-icon><Right /></el-icon>
      </div>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.newsList {
  display: flex;
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
    margin-right: 30px;
    &:nth-child(3n + 3) {
      margin-right: 0;
    }
    @media (max-width: 768px) {
      width: 100%;
      margin-right: 0 !important;
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
        //overflow: hidden;
        //text-overflow: ellipsis;
        //display: -webkit-box;
        //-webkit-line-clamp: 3;
        //-webkit-box-orient: vertical;
        //@media (max-width: 768px) {
        //  -webkit-line-clamp: 2;
        //}
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
.newsList--column {
  flex-direction: column;
  .newsList_item {
    margin: 0 !important;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
    transition: 0.3s;
    background: transparent;
    &:hover {
      background-color: #fafafa;
    }
    .img {
      width: 280px;
      height: 180px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .newsList_item-con {
      width: calc(100% - 280px);
      border: none;
      background-color: transparent;
      padding-top: 0;
    }
  }
}
</style>
