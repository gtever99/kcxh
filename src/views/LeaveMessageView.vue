<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { User, Iphone, Message, School } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { setLeaveMessage } from "@/apis/api";

const formRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
  email: [
    {
      required: true,
      message: "请输入正确的邮箱",
      trigger: "blur",
      pattern:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  ],
  content: [{ required: true, message: "内容不能为空", trigger: "blur" }],
  schoolName: [
    { required: true, message: "学校名称不能为空", trigger: "blur" }
  ],
  phone: [
    {
      required: true,
      message: "请输入正确的手机号",
      trigger: "blur",
      pattern:
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
    }
  ]
});

const data = reactive({
  name: "",
  phone: "",
  email: "",
  content: "",
  schoolName: "",
  loading: false,
  check: false
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (!valid) return;
    if (!data.check) {
      ElMessage({
        message: "未同意",
        type: "warning"
      });
      return;
    }
    setLeaveMessage({
      username: data.name,
      content: data.content,
      email: data.email,
      phone: data.phone,
      school_name: data.schoolName
    }).then(res => {
      if (!res.result) {
        return;
      }
      console.log(res);
      ElMessage({
        message: "留言成功，请耐心等待我们的回复！",
        type: "success"
      });
      formEl.resetFields();
    });
  });
};
</script>

<template>
  <div class="text-describe">
    <el-form
      ref="formRef"
      :model="data"
      :rules="rules"
      label-width="120px"
      class="ruleForm"
      status-icon
    >
      <el-form-item label="姓名" label-width="80" prop="name">
        <el-input
          v-model.trim="data.name"
          placeholder="请输入您的姓名"
          :prefix-icon="User"
        />
      </el-form-item>
      <el-form-item label="邮箱" label-width="80" prop="email">
        <el-input
          v-model.trim="data.email"
          placeholder="请输入您的邮箱"
          :prefix-icon="Message"
        />
      </el-form-item>
      <el-form-item label="电话号码" label-width="80" prop="phone">
        <el-input
          v-model.trim="data.phone"
          placeholder="请输入您的电话号码"
          :prefix-icon="Iphone"
        />
      </el-form-item>
      <el-form-item label="学校名称" label-width="80" prop="schoolName">
        <el-input
          v-model.trim="data.schoolName"
          placeholder="请输入您学校的名称"
          :prefix-icon="School"
        />
      </el-form-item>
      <el-form-item label="留言内容" label-width="80" prop="content">
        <el-input
          v-model="data.content"
          show-word-limit
          type="textarea"
          maxlength="200"
          placeholder="请输入您对我们的留言"
        />
      </el-form-item>
      <el-form-item label="" label-width="80">
        <div class="check">
          <el-checkbox v-model="data.check" />
          <p>
            您同意我们收集您提交的上述姓名、电话号码、电子邮箱、学校或单位名称、留言内容等信息，以便我们及时处理、解决问题或向您反馈结果。
          </p>
        </div>
      </el-form-item>
      <el-form-item label-width="80">
        <el-button
          type="primary"
          :loading="data.loading"
          @click="submitForm(formRef)"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.text-describe {
  margin-top: 60px;
  padding-bottom: 10px;
  h2 {
    margin: 40px auto;
    text-align: center;
    font-size: 28px;
  }
  :deep(.el-form-item) {
    margin-bottom: 25px;
  }
  .check {
    display: flex;
    & > p {
      line-height: 26px;
      margin-left: 5px;
    }
    :deep(.el-checkbox) {
      position: relative;
      top: -2px;
    }
  }
}
</style>
