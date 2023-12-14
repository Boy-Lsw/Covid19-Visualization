<template>
  <div class="covid19-echarts">
      <p class="e-title covid19-theme-transition-text-color">
          {{ i18nMap.body.echarts.title.text1 }}
      </p>
      <Bar1 :province="area.a1.map" :name="area.a1.name" :values="area.a1.values" />
      <p class="e-title covid19-theme-transition-text-color">
          {{ i18nMap.body.echarts.title.text4 }}
      </p>
      <Bar2 :province="area.a2.map" :name="area.a2.name" :values="area.a2.values" />
  </div>
</template>

<script setup lang='ts'>
import {watch, inject, reactive} from 'vue'
import defaultValue from '@/constant';
import Bar1 from './Bar/Bar1.vue'
import Bar2 from './Bar/Bar2.vue'

import type { CityData } from '@/api/interface';

type EchartsProp = {
  map: Map<string, CityData>
}
type ProvinceBar = EchartsProp & {
  name: string[],
  values: number[]
}
type ProvincePie = EchartsProp & {
  values: CityData[]
}
// type CustomObject<T extends string, V> = { [k in T]: V }
// type Area = CustomObject<'a3' | 'a4', ProvincePie> & CustomObject<'a1' | 'a2', ProvinceBar>

const i18nMap = inject('i18nMap', defaultValue.i18nMap)
const province = inject('province', defaultValue.province)

const provinceBar = () => ({
  map: new Map(),
  name: [],
  values: []
}) as ProvinceBar

const provincePie = () => ({
  map: new Map(),
  values: []
}) as ProvincePie

const _area = () => ({
  a1: provinceBar(),
  a2: provinceBar(),
  a3: provincePie(),
  a4: provincePie()
})

const area = reactive({..._area()})

/** a1(柱状图x) */
/** a2(中空饼图) */
const _a2 = ['香港', '澳门', '台湾']

watch(province, (province: CityData[]) => {
  const data = {..._area()}
  province.forEach((d) => {
    const isA2Name = _a2.includes(d.name)
    if(isA2Name) {
      data.a2.name.push(d.name),
      data.a2.values.push(d.data.confirmed_count)
      data.a2.map.set(d.name, d)
    }
    data.a1.name.push(d.name)
    data.a1.map.set(d.name, d)
    data.a1.values.push(d.data.confirmed_count)
  })
  Object.assign(area, data)
})
</script>

<style lang='less' scoped>
.covid19-echarts {
    width: 90%;
    margin: 0 auto;
    .e-title {
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 40px;
        color: var(--text-title-color);
    }
}
</style>
