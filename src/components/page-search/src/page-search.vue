<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="heaader">高级检索</h1>
      </template>

      <template #footer>
        <div class="flex justify-end padding-lr-30 padding-bottom-30">
          <el-button type="primary" @click="hanldeResetClick">重置</el-button>
          <el-button type="primary" @click="hanldeQueryClick">搜索</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  components: {
    HyForm
  },
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定的
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[`${item.field}`] = ''
    }
    const formData = ref(formOriginData)

    // 重置
    const hanldeResetClick = () => {
      for (const key in formOriginData) {
        formData.value[key] = formOriginData[key]
      }
      emit('resetBtnClick')
    }

    // 搜索
    const hanldeQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      hanldeResetClick,
      hanldeQueryClick
    }
  }
})
</script>

<style scoped lang="less">
.heaader {
  color: #f00;
  margin-bottom: 35px;
}
</style>
