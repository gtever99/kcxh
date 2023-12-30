<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="banner">
    <img :src="route.meta.bannerUrl" alt="" />
  </div>
  <router-view />
</template>

<style scoped lang="scss">
.banner {
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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
