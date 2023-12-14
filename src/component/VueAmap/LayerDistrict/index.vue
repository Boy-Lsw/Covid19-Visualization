<template>
  <Marker :mark="mark" />
  <template >
        <!-- 行政区划 -->
        <el-amap-layer-district v-for="(item, key) of zoningPlan" :key="key" type="Country" :adcode="item.adcode" :styles="{ fill: item.fill }" @click="click" />
    </template>
</template>

<script setup lang='ts'>
import {inject, ref, watch, reactive} from 'vue'
import defaultValue from '@/constant';
import pos from '@/utils/amap/pos.ts'
import getColorGradeByCovid19Data from './grade'
import pubsub from '@/utils/pubsub';

type LayerDistrict = {
    adcode: string
    fill: string
}

type LayerDistrictClickEvent = {
    props?: {
        NAME_CHN: string
        adcode: number
        x: number
        y: number
    }
}

import Marker from '../Marker/index.vue'

let preAdcode = -1
const defaultMark = () => ({
    name: '',
    counts: 0,
    position: [0, 0]
})
const zoningPlan = ref<LayerDistrict[]>([])
const mark = reactive(defaultMark())

const province = inject('province', defaultValue.province)

const click = (e: LayerDistrictClickEvent) => {
  if (!e?.props?.adcode) return
  const { adcode } = e.props
  if (preAdcode === adcode) return
  const curArea = province.find((a) => a.adcode === String(adcode))
  if (!curArea) return
  // 记录当前地区
  preAdcode = adcode
  // 在数据面板中展示数据
  pubsub.publish('searchAreaData', curArea)
}

const highArea = (adcode? :string) => {
  const _mark = defaultMark()
  zoningPlan.value = province.map((d, order) => {
    if (d.adcode === adcode) {
      _mark.name = d.name
      _mark.counts = d.data.confirmed_count
      _mark.position = pos[order]
    }
    return {
      name: d.name,
      counts: d.data.confirmed_count,
      position: pos[order],
      adcode: d.adcode,
      fill: String(adcode) !== d.adcode ? getColorGradeByCovid19Data(d.data.confirmed_count) : '#ffb600',
      _data: d
    }
  })
  Object.assign(mark, _mark)
}

watch(province, () => highArea())

pubsub.subscribe('highArea', (_, adcode) => highArea(adcode))
</script>

<style lang='less' scoped>

</style>
