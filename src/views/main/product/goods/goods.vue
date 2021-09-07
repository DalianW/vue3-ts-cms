<template>
  <div class="goods">
    <div class="content">
      <page-content :contentTableConfig="contentTableConfig" pageName="goods">
        <template #image="scope">
          <el-image
            style="width: 50px; height: 50px"
            :src="scope.row.imgUrl"
            :preview-src-list="[scope.row.imgUrl]"
          >
          </el-image>
        </template>

        <template #oldPrice="scope">
          <span>{{ `¥ ${scope.row.oldPrice}` }}</span>
        </template>
        <template #status="scope">
          <el-button
            size="mini"
            plain
            :type="scope.row.status ? 'success' : 'danger'"
            >{{ scope.row.status ? '启用' : '禁用' }}</el-button
          >
        </template>
      </page-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  components: {
    PageContent
  },
  name: 'goods',
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
