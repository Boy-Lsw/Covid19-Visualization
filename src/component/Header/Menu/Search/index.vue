<template>
  <div class="covid19-search-input">
    <input type="text" :placeholder="props.progress >= 3 ? i18nMap.header.search.placeholder : i18nMap.header.search.loading(props.progress)"
    v-model="content"
    @input="change"
    @blur="blur"
    >

    <template v-if="result.length">
      <ul class="s-i-tip">
        <li v-for="item of result" :key="item.adcode" @click.stop="toDataPanel(item)">
          {{ item.name }}
        </li>
      </ul>
    </template>

    <template v-if="empty">
      <p class="s-i-tip s-i-tip-empty">
        <span>{{ i18nMap.header.search.emptyTip }}</span>
      </p>
    </template>
  </div>
</template>

<script setup lang='ts'>
import {ref, inject} from 'vue'
import defaultValue from '@/constant';
import pubsub from '@/utils/pubsub';

import type { CityData } from '@/api/interface';
type Progress = {progress: number}
const props = defineProps<Progress>()

const i18nMap = inject('i18nMap', defaultValue.i18nMap)
const provinceCities = inject('provinceCities', defaultValue.provinceCities)

const content = ref('')
const result = ref([] as CityData[])
const empty = ref(false)

const toDataPanel = (area: any) => {
  pubsub.publish('searchAreaData', area)
  blur()
}
const blur = (e?: any) => {
  if (e && !e?.relatedTarget) return
  content.value = ''
  result.value = []
  empty.value = true
  // console.log('blur')
}
const change = () => {
  if(!content.value) return blur()
  const areaArr = [] as CityData[]
  provinceCities.forEach(item => {
    /** 正则匹配 */
    const exact = new RegExp(content.value).test(item.name)
    if(exact) {
      areaArr.push(item)
    }
  })
  result.value = areaArr
  empty.value = !areaArr.length
}

</script>

<style lang='less'>
.covid19-search-input{
  height: 100%;
  z-index: 197;
  position: relative;
  input{
    width: 100%;
    height: 100%;
    padding-left: 15px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
    color: var(--text-search-color);
    background-color: var(--search-bg-color);
    transition: outline 0.5s;
    &:focus {
        outline: 1px solid var(--border-search-color);
    }
  }
  .s-i-tip{
    width: 100%;
    max-height: 300px;
    position: absolute;
    padding: 3px 0;
    top: 115%;
    left: 0;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    color: var(--text-title-color);
    background-color: var(--bg-color) ;
    overflow-y: auto;
    cursor: default;
    li{
      padding: 10px 10px;
      &:hover{
        background-color: var(--text-search-color);
        color: var(--bg-color)
      }
    }
  }
  .s-i-tip-empty{
    padding: 10px;
    font-size: 16px;
    text-align: center;
    span{
      opacity: 0.6;
      color: var(--text-search-color);
    }
  }
}
</style>
