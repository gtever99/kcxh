<script setup lang="ts">
import { IChoolItem } from "@/apis/type.t";
import { onMounted, reactive } from "vue";
import { useGlobalDataHook } from "@/stores/modules/globalData";

const data: {
  schoolList: IChoolItem[];
} = reactive({
  schoolList: []
});

onMounted(() => {
  useGlobalDataHook()
    .getSchoolData()
    .then(res => {
      data.schoolList = res;
    });
});
</script>

<template>
  <div class="schoolAll">
    <SchoolList :schoolList="data.schoolList" :showAllText="true" />
  </div>
</template>

<style scoped lang="scss">
.schoolAll {
  width: $widthNum;
  margin: 0 auto;
}
</style>
