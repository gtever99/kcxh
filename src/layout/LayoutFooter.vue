<script setup lang="ts">
import { getContacts } from "@/apis/api";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const data: {
  email: string;
  address: string;
  phoneList: {
    name: string;
    phone: string;
  }[][];
  content: string;
  title: string;
  dialogTableVisible: boolean;
} = reactive({
  email: "",
  address: "",
  phoneList: [[], []],
  content: "",
  title: "",
  dialogTableVisible: false
});

onMounted(() => {
  getContacts().then(res => {
    if (!res.result) return;
    res.result.map((v, i) => {
      switch (v.type) {
        case "email":
          data.email = v.value;
          break;
        case "address":
          data.address = v.value;
          break;
        case "phone":
          if (i % 2 == 0) {
            data.phoneList[0].push({
              name: v.key,
              phone: v.value
            });
          } else {
            data.phoneList[1].push({
              name: v.key,
              phone: v.value
            });
          }
          break;
      }
    });
  });
});

// type= 0:服务政策 1:隐私条款
const examine = (type: number) => {
  data.title = type === 0 ? "服务政策" : "隐私条款";
  data.content = `我是${data.title}`;
  data.dialogTableVisible = true;
};
const notMtopPathList = new Set(["/richTextRender", "/con/news"]);
</script>

<template>
  <el-dialog width="70%" v-model="data.dialogTableVisible" :title="data.title">
    <div class="dialog">
      {{ data.content }}
    </div>
  </el-dialog>
  <div class="footer" :class="!notMtopPathList.has(useRoute().path) ? 'mtop' : ''">
    <div class="footer_con">
      <p class="footer_con-title">联系我们</p>
      <div class="footer_con_body">
        <div class="footer_con_body-left">
          <p class="footer_con_body-text">
            <el-icon><UserFilled /></el-icon>
            <span>{{ data.email }}</span>
          </p>
          <p class="footer_con_body-text footer_con_body-text--m">
            <el-icon><Location /></el-icon>
            <span>{{ data.address }}</span>
          </p>
          <ul class="footer_con_body-contact">
            <template v-for="item in data.phoneList[0]" :key="item.name">
              <p>{{ item.name }}：</p>
              <li>
                <p class="footer_con_body-text">
                  <el-icon><Iphone /></el-icon>
                  <a :href="'tel:' + item.phone">{{ item.phone }}</a>
                </p>
              </li>
            </template>
          </ul>
        </div>
        <div class="footer_con_body-center">
          <p class="footer_con_body-text footer_con_body-text--w">
            <el-icon><Location /></el-icon>
            <span>北京市石景山区实兴大街30号院3号楼2层A-3081房间</span>
          </p>
          <ul class="footer_con_body-contact">
            <template v-for="item in data.phoneList[1]" :key="item.name">
              <p>{{ item.name }}：</p>
              <li>
                <p class="footer_con_body-text">
                  <el-icon><Iphone /></el-icon>
                  <a :href="'tel:' + item.phone">{{ item.phone }}</a>
                </p>
              </li>
            </template>
          </ul>
        </div>
        <div class="footer_con_body-right">
          <a @click="examine(0)">服务政策</a>
          <a @click="examine(1)">隐私条款</a>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        class="footer_bottom-icp"
        >京ICP备2023032454号-1</a
      >
      <span class="footer_bottom-name">北京拓创信合科技有限公司 版权所有</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dialog {
  max-height: 60vh;
  overflow: auto;
}
.mtop {
  margin-top: 50px;
}
.footer {
  padding: 30px 0;
  border-top: 1px solid #ccc;
  color: #5f6464;
  a {
    color: #5f6464;
  }
  &_con {
    width: $widthNum;
    margin: 0 auto;
    &-title {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 30px;
      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
    }
    &_body {
      display: flex;
      justify-content: space-between;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      &-text {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        @media (max-width: 768px) {
          margin-bottom: 10px;
        }
        i {
          margin-right: 10px;
          font-size: 20px;
        }
        &--m {
          display: none;
          @media (max-width: 768px) {
            display: flex;
            margin-bottom: 20px;
          }
        }
        &--w {
          @media (max-width: 768px) {
            display: none;
          }
        }
      }
      &-contact {
        p {
          margin-bottom: 10px;
        }
        li {
          line-height: 25px;
        }
      }
      &-right {
        @media (max-width: 768px) {
          margin-top: 20px;
        }
        a {
          cursor: pointer;
          display: block;
          margin-bottom: 15px;
          transition: 0.3s;
          &:hover {
            color: $pageThemeColor;
          }
        }
      }
    }
  }
  &_bottom {
    text-align: center;
    margin-top: 30px;
    font-size: 14px;
    @media (max-width: 768px) {
      margin-top: 20px;
    }
    &-icp {
      margin-right: 20px;
    }
    &-name {
    }
  }
}
</style>
