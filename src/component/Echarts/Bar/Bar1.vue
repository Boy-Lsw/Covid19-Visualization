<template>
  <Echarts :className="'covid19-echarts-bar-x'" :option="option"></Echarts>
</template>

<script setup lang='ts'>
import {watch, reactive} from 'vue'
import Echarts from '../echarts.vue'

const props = defineProps(['province', 'name', 'values'])

const option = reactive({})

watch(props, (props) => {
  const _option = {
        grid: {
            x: 50,
            y: 0,
            x2: 0,
            y2: 0
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: props.name,
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
.covid19-echarts-bar-x {
    height: 1800px;
    margin-bottom: 60px;
}
</style>
