<template>
  <div class="about_box">
    <PageContentTitle class="pageContentTitle"/>
    <Echarts class="echarts"/>
  </div>
</template>

<script setup lang="ts">
import type { CityData } from '@/api/interface'
import {reactive, onMounted, provide} from 'vue'
import getProvinceData from '@/api/province'
import getCountryData from '@/api/country'
import getCityData from '@/api/cities'
import PageContentTitle from '../component/PageContentTitle/index.vue'
import Echarts from '../component/Echarts/index.vue'
import langTools from '@/utils/i18n'

const i18nMap = reactive(langTools.$i18nMap())
const country = reactive({ 
  comment: '',
    update_time: 0,
    data: {
        confirmed_count: 0,
        suspected_count: 0,
        cured_count: 0,
        dead_count: 0
    }
 })
const province: CityData[] = reactive([])
const cities: CityData[] = reactive([])
const provinceCities: CityData[] = reactive([])


const getCountry = async() => {
  const _country = await getCountryData()
  Object.assign(country, _country)
}
const getCities = () => 
  Promise.all([getProvinceData(), getCityData()])
  .then(([p, c]) => {
    Object.assign(province, p)
    Object.assign(cities, c)
    Object.assign(provinceCities, {...p, ...c})
})

onMounted(() => {
  getCountry()
  getCities()
})
provide('i18nMap', i18nMap)
provide('country', country)
provide('province', province)
</script>

<style lang="less" scoped>
.about_box{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .pageContentTitle{
    flex: 1;
  }
  .echarts{
    flex: 9;
  }
}
</style>
