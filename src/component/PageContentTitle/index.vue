<template>
  <div class="covid19-page-title-box">
    <span class="toHome" @click="toHome">返回首页</span>
    <p class="covid19-theme-transition-text-color covid19-page-title">
        {{ i18nMap.body.page.update_time(content.update_time) }}
        <span class="covid19-data-confirmedCount">{{
            i18nMap.body.page.confirmed_count(content.data.confirmed_count)
        }}</span
        >，
        <span class="covid19-data-suspectedCount">{{
            i18nMap.body.page.suspected_count(content.data.suspected_count)
        }}</span
        >， <span class="covid19-data-curedCount">{{ i18nMap.body.page.cured_count(content.data.cured_count) }}</span
        >， <span class="covid19-data-deadCount">{{ i18nMap.body.page.dead_count(content.data.dead_count) }}</span
        >。
    </p>
  </div>
</template>

<script setup lang='ts'>
import {useRouter} from 'vue-router'
import defaultValue from '@/constant';
import {reactive, inject, watch} from 'vue'
import timeUtils from '@/utils/time/index.ts'

const i18nMap = inject('i18nMap', defaultValue.i18nMap)
const country = inject('country', defaultValue.country)
const content = reactive({
  data: {
    confirmed_count: 0,
    suspected_count: 0,
    cured_count: 0,
    dead_count: 0
  },
  update_time: {
    year: '',
    month: '',
    day: ''
  }
})

const $router = useRouter()

const toHome = () => {
  $router.push('./')
}

watch(country, (c) => {
    const update_time = timeUtils.getDateClassify(c.update_time)
    Object.assign(content, { ...c, update_time })
})
</script>

<style lang='less' scoped>
.covid19-page-title-box{
  height: 100%;
  width: 100%;
  .toHome{
    font-size: 38px;
    font-weight: 700;
    color: var(--text-title-color);
    position: absolute;
    top: 2%;
    left: 3%;
    &:hover{
      color: rgb(158, 216, 34);
      cursor: pointer;
    }
  }
  .covid19-page-title {
  width: 70%;
  margin: 0 auto;
  font-size: 22px;
  padding-top: 10px;
  text-align: center;
  font-weight: 500;
  color: var(--text-title-color);
  span {
    font-size: 24px;
    font-weight: 600;
  }
}
}
</style>
