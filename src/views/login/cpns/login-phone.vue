<template>
  <div class="login-phone">
    <el-form label-width="70px" :rules="rules" :model="phoneAccount">
      <el-form-item label="手机号" prop="phone">
        <el-input type="text" v-model="phoneAccount.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code flex justify-between">
          <el-input type="text" v-model="phoneAccount.code"></el-input>
          <el-button type="primary" class="margin-left-10"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'
export default defineComponent({
  setup() {
    const phoneAccount = reactive({
      phone: '',
      code: ''
    })
    return {
      phoneAccount,
      rules
    }
  }
})
</script>

<style scoped></style>
