<script setup lang="ts">
import { IChoolItem } from "@/apis/type.t";

interface Props {
  schoolList: IChoolItem[];
  showAllText?: boolean;
}

withDefaults(defineProps<Props>(), {
  schoolList: () => {
    return [];
  },
  showAllText: false
});

const apiUrl = process.env.VUE_APP_API_URL;
</script>

<template>
  <ul class="academy_list">
    <li
      v-for="(item, ind) in [...schoolList, ...schoolList]"
      :key="ind"
      class="academy_list-item"
    >
      <img :src="apiUrl + item.img" alt="" />
      <b class="title">{{ item.name }}</b>
      <p
        :title="item.describe"
        class="describe"
        :class="showAllText ? '' : 'hideText'"
      >
        {{ item.describe }}
      </p>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.academy_list {
  display: flex;
  flex-flow: wrap;
  margin-top: 50px;
  &-item {
    width: calc(25% - 15px);
    margin-bottom: 20px;
    margin-right: 20px;
    color: #666;
    img {
      height: 100px;
      object-fit: cover;
    }
    .title {
      display: block;
    }
    .describe {
      margin-top: 5px;
      font-size: 14px;
    }
    .hideText {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:nth-child(4n + 4) {
      margin-right: 0;
    }
    @media (max-width: 1200px) and (min-width: 769px) {
      width: calc(33.33% - 13.33px);
      &:nth-child(3n + 3) {
        margin-right: 0;
      }
    }
    @media (max-width: 768px) {
      width: calc(50% - 10px);
      &:nth-child(even) {
        margin-right: 0;
      }
      &:nth-of-type(5) {
        display: none;
      }
      &:nth-of-type(6) {
        display: none;
      }
    }
    @media (max-width: 542px) {
      img {
        width: 100%;
      }
      width: calc(100%);
      margin-right: 0 !important;
    }
  }
}
</style>
