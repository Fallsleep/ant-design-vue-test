<template>
  <a-config-provider :locale="zhCN">
    <a-range-picker
      v-model:value="startTime"
    />
  </a-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import moment, { Moment } from 'moment'
import 'moment/dist/locale/zh-cn'

moment.locale(zhCN.locale)

const startTime = ref<Moment[]>([
  moment().subtract(30, 'days'),
  moment()
])
</script>
