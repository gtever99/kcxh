<script setup lang="ts">
import { useGlobalDataHook } from "@/stores/modules/globalData";
import { ref } from "vue";
import { useRoute } from "vue-router";

const roure = useRoute();
const navStatus = ref(false);
const sonActive = ref("");
const { navDataList } = useGlobalDataHook();
</script>

<template>
  <div class="navcon" :class="navStatus ? 'navcon--navshow' : ''">
    <nav>
      <div @click="navStatus = !navStatus" class="navcon-menu">
        <el-icon v-if="!navStatus"><Expand /></el-icon>
        <el-icon v-else><CloseBold /></el-icon>
      </div>
      <h1 class="navcon-logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="logo" />
        </router-link>
      </h1>
      <!--      web端nav-->
      <ul class="navcon_list">
        <li
          v-for="item in navDataList"
          class="navcon_list-item"
          :class="roure.path === item.path ? 'navcon_list-item--active' : ''"
          @mouseenter="sonActive = item.name"
          @mouseleave="sonActive = ''"
          :key="item.name"
        >
          <router-link :to="item.path" target="_blank">
            {{ item.name }}
          </router-link>
          <el-collapse-transition>
            <ul
              v-if="item.children && sonActive == item.name"
              class="navcon_list-son"
            >
              <li v-for="item2 in item.children" :key="item2.name">
                <router-link :to="item2.path" target="_blank">
                  {{ item2.name }}
                </router-link>
              </li>
            </ul>
          </el-collapse-transition>
        </li>
      </ul>
    </nav>
    <!--      移动端nav-->
    <ul class="navcon_listm">
      <li
        v-for="item in navDataList"
        class="navcon_listm-item"
        :key="item.name"
      >
        <router-link v-if="!item.children" :to="item.path">
          {{ item.name }}
        </router-link>
        <p v-else @click="sonActive = item.name">{{ item.name }}</p>
        <el-collapse-transition>
          <ul v-if="item.children" class="navcon_listm-son">
            <li v-for="item2 in item.children" :key="item2.name">
              <router-link :to="item2.path" target="_blank">
                {{ item2.name }}
              </router-link>
            </li>
          </ul>
        </el-collapse-transition>
      </li>
    </ul>
    <div @click="navStatus = false" class="navcon-bg" />
  </div>
</template>

<style scoped lang="scss">
.navcon {
  nav {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: $widthNum;
    height: 80px;
    @media (max-width: 768px) {
      height: 60px;
    }
  }
  &-menu {
    font-size: 22px;
    display: none;
    align-items: center;
    position: relative;
    z-index: 51;
    @media (max-width: 768px) {
      display: flex;
    }
  }
  &-logo {
    @media (max-width: 768px) {
      margin: 0 auto;
    }
  }
  &_list {
    display: flex;
    @media (max-width: 768px) {
      display: none;
    }
    &-item {
      margin-left: 70px;
      position: relative;
      & > a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        font-weight: 900;
        transition: 0.3s;
        &:after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 4px;
          background: $pageThemeColor;
          bottom: 20px;
          opacity: 0;
          transform-origin: 50% 0;
          transition: 0.2s;
          transform: scale(0.01, 1);
        }
        &:hover {
          color: $pageThemeColor !important;
          &:after {
            transform: scale(1, 1);
            opacity: 1;
          }
        }
      }
      &--active {
        & > a {
          color: $pageThemeColor !important;
          &:after {
            transform: scale(1, 1);
            opacity: 1;
          }
        }
      }
    }
    &-son {
      background: #fff;
      padding: 15px;
      position: absolute;
      transform: translate(-50%, 99%);
      bottom: 0;
      white-space: nowrap;
      left: 50%;
      z-index: 10;
      &:hover {
        a {
          color: $pageThemeColor;
        }
      }
    }
  }
  &-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
    opacity: 0;
    transition: 0.3s;
  }
  &_listm {
    padding-top: 70px;
    position: fixed;
    width: 260px;
    height: calc(100vh - 90px);
    background: #fff;
    top: 0;
    left: 0;
    z-index: 50;
    transition: 0.3s;
    transform: translateX(-100%);
    &-item {
      margin-left: 40px;
      line-height: 60px;
    }
    &-son {
      li {
        position: relative;
        line-height: 30px;
        margin-left: 10px;
        &:after {
          content: "";
          display: block;
          width: 5px;
          height: 5px;
          background: #000;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        a {
          padding-left: 15px;
        }
      }
    }
  }
  &--navshow {
    .navcon-bg {
      z-index: 10;
      opacity: 1;
    }
    .navcon_listm {
      transform: translateX(0);
    }
  }
}
</style>
