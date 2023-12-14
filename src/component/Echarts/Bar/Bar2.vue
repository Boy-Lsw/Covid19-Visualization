<template>
  <Echarts :className="'covid19-echarts-bar-y'" :option="option"/>
</template>

<script lang="ts" setup>
import { watch, reactive } from 'vue'

import Echarts from '../echarts.vue'

const props = defineProps(['province', 'name', 'values'])

const option = reactive({})


watch(props, (props) => {
  const _option = {
      grid: {
          x: 110,
          y: 30,
          x2: 0,
          y2: 30
      },
      xAxis: {
          type: 'category',
          data: props.name
      },
      yAxis: {
          type: 'value'
      },
      series: [
          {
              data: props.values,
              type: 'bar',
              barMinHeight: 5
          }
      ]
  }
  Object.assign(option, _option)
})
</script>

<style lang="css" scoped>
.covid19-echarts-bar-y {
  height: 700px;
  margin-bottom: 60px;
}
</style>
