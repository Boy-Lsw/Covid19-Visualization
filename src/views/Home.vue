<template>
  <div class="home_box">
    <Header :progress='progress'></Header>
    <VueAmap></VueAmap>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref, provide, onMounted} from 'vue'
import Header from '../component/Header/index.vue'
import VueAmap from '../component/VueAmap/index.vue'
import getCountryData from '../api/country/index.ts'
import getProvinceData from '../api/province/index.ts'
import getCityData from '../api/cities/index.ts'
import {CityData} from '../api/interface.ts'
import {LangType} from '../utils/i18n/interface.ts'
import langTools from '../utils/i18n/index.ts'
const i18nMap = reactive(langTools.$i18nMap())
const forceLang = (val: LangType) => {
  langTools.setLang(val)
  Object.assign(i18nMap, langTools.$i18nMap())
}
const progress = ref(0)
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
  progress.value += 1
  Object.assign(country, _country)
}
const getCities = () => 
  Promise.all([getProvinceData(), getCityData()])
  .then(([p, c]) => {
    progress.value += 2
    Object.assign(province, p)
    Object.assign(cities, c)
    Object.assign(provinceCities, {...p, ...c})
})

onMounted(() => {
  getCountry()
  getCities()
})
provide('i18nMap', i18nMap)
provide('forceLang', forceLang)
provide('country', country)
provide('province', province)
provide('cities', cities)
provide('provinceCities', provinceCities)
</script>

<style lang="less" scoped>
.home_box{
  width: 100vw;
  height: 100vh;
}
</style>
