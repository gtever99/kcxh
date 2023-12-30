<script setup lang="ts">
import LayoutNav from "@/layout/LayoutNav.vue";
import LayoutBody from "@/layout/LayoutBody.vue";
import LayoutFooter from "@/layout/LayoutFooter.vue";
</script>

<template>
  <LayoutNav />
  <LayoutBody />
  <LayoutFooter />
  <el-backtop :right="50" :bottom="100" />
</template>
