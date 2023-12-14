<template>
  <div :class="props.className" ref="ec"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import *  as echarts from 'echarts'

type Props = {
    className: string
    option: any
}
const props = defineProps<Props>()


const ec = ref()

/** 当前echart实例 */
let echart = null as any

watch(props,  () => echart.setOption(props.option))

onMounted(() => {
  echart = echarts.init(ec.value)
})
</script>
