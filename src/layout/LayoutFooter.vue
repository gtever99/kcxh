<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="footer_con">
      <p class="footer_con-title">联系我们</p>
      <div class="footer_con_body">
        <div class="footer_con_body-left">
          <p class="footer_con_body-text">
            <el-icon><UserFilled /></el-icon>
            <span>453391665@qq.com</span>
          </p>
          <p class="footer_con_body-text footer_con_body-text--m">
            <el-icon><Location /></el-icon>
            <span>北京市石景山区实兴大街30号院3号楼2层A-3081房间</span>
          </p>
          <ul class="footer_con_body-contact">
            <p>高校使用软件咨询李老师：</p>
            <li>
              <p class="footer_con_body-text">
                <el-icon><Iphone /></el-icon>
                <a :href="'tel:' + '15010392789'">150 1039 2789</a>
              </p>
            </li>
          </ul>
        </div>
        <div class="footer_con_body-center">
          <p class="footer_con_body-text footer_con_body-text--w">
            <el-icon><Location /></el-icon>
            <span>北京市石景山区实兴大街30号院3号楼2层A-3081房间</span>
          </p>
          <ul class="footer_con_body-contact">
            <p>软件技术咨询张老师：</p>
            <li>
              <p class="footer_con_body-text">
                <el-icon><Iphone /></el-icon>
                <a :href="'tel:' + '15010392789'">150 1039 2789</a>
              </p>
            </li>
          </ul>
        </div>
        <div class="footer_con_body-right">
          <a href="/">服务政策</a>
          <a href="/">隐私条款</a>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <span class="footer_bottom-icp">京ICP备xxxx号-1</span>
      <span class="footer_bottom-name">北京拓创信合科技有限公司 版权所有</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  padding: 30px 0;
  border-top: 1px solid #ccc;
  margin-top: 60px;
  color: #5f6464;
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
          display: block;
          margin-bottom: 15px;
          color: #5f6464;
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
