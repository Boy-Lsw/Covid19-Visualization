<template>
  <div class="ncov-map-style">
    <p class="covid19-theme-transition-text-color n-m-s-title">
      {{ i18nMap.header.menus.style.text1 }}
    </p>
    <ul>
      <li v-for="(item, index) in i18nMap.header.menus.style.scheme" :key="index" @click="switchStyle(index)">
        <span>{{ item }}</span>
        <span v-if="order === index">√</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
import defaultValue from '@/constant';
import {inject, ref} from 'vue'
import storage from '@/utils/storage';

/** 用户之前选择好的地图样式(临时) */
const _order = storage.getItem('theme_order')
/** 高德地图官方主题 */
const _mapStyle = ['normal', 'macaron', 'whitesmoke', 'dark', 'fresh', 'darkblue', 'blue', 'light', 'grey']

const order = ref(_order? Number(_order) : 0)

type Emits = {(t:'close'):void}
const emits = defineEmits<Emits>()
const i18nMap = inject('i18nMap', defaultValue.i18nMap)

const switchStyle = (index: number) => {
  order.value = index
  storage.setItem('theme_order', String(index))
}
</script>

<style lang='less' scoped>
.ncov-map-style {
  .n-m-s-title {
        font-size: 16px;
        margin-bottom: 10px;
  }
  ul{
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    li{
      padding: 10px;
      border-radius: 5px;
      font-size: 12px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:hover {
        color: var(--bg-color);
        background-color: var(--text-title-color);
      }
    }
  }
}
</style>
