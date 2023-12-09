<template>
  <div class="covid19-header">
    <h1 class="h-title" @click="ToAbout">更多数据</h1>
    <div class="h-search">
      <Search :progress="props.progress"></Search>
    </div>
    <ul class="h-list">
      <li class="h-l-title">
        {{ i18nMap.header.menus.title }}
        <ul class="h-l-t-extends">
          <li v-for="(text, index) in moreOptions" :key="index" @click="whichDrawer(text(), index)">{{  text() }}</li>
        </ul>
      </li>
      <li class="h-l-line h-l-title">|</li>
      <li class="h-l-title">
        <a href="https://github.com/Boy-Lsw" target="_blank">GitHub</a>
      </li>
    </ul>
    <Drawer v-model="isOpen" :drawerTitle="drawerTitle">
      <component :is="curDrawer" @close="close"></component>
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Search from './Menu/Search/index.vue'
import { inject, reactive, ref } from 'vue';
import defaultValue from '@/constant';
import Drawer from './Menu/Drawer/index.vue'
import MapStyle from './Menu/MapStyle/index.vue'
import I18n from './Menu/I18n/index.vue'

const isOpen = ref(false)
const drawerTitle = ref('')
const curDrawer = ref()
const props = defineProps(['progress'])
const i18nMap = inject('i18nMap', defaultValue.i18nMap)
const menusComponents = [MapStyle, I18n]
const moreOptions = reactive([
    () => i18nMap.header.menus.style.title,
    () => i18nMap.header.menus.i18n.title
])
const whichDrawer = (title: string, index: number) => {
  isOpen.value = true
  drawerTitle.value = title
  curDrawer.value = menusComponents[index]
}
const close = () => {
  isOpen.value = false
}

const $router = useRouter()
const ToAbout = () => {
  $router.push('./about')
}
</script>

<style lang="less" scoped>
.covid19-header{
  width: 80%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-title-color);
  background-color: var(--bg-color);
  .h-title{
    &:hover {
      cursor: pointer;
      color: rgb(158, 216, 34);
    }
    font-size: 38px;
  }
  .h-search{
    flex: 1;
    height: 55px;
    padding: 0 70px;
  }
  .h-list{
    .h-l-title{
      font-size: 16px;
      font-weight: 700;
      float: left;
      padding: 0 12px;
      position: relative;
      cursor: default;
      a {
        color: var(--text-title-color);
      }
      &:hover {
        a{
          color: red;
        }
        .h-l-t-extends {
            height: 140px;
            padding: 5px;
        }
      }
      .h-l-t-extends {
        width: 110%;
        height: 0;
        border-radius: 4px;
        position: absolute;
        top: calc(100% + 3px);
        left: -5%;
        text-align: center;
        z-index: 197;
        overflow: hidden;
        box-sizing: border-box;
        transition: height 0.3s;
        opacity: 0.9;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: var(--text-title-color);
        background-color: var(--bg-color);
        li {
            width: 100%;
            padding: 8px 0;
            font-size: 12px;
            border-radius: 5px;
            &:hover {
                color: var(--bg-color);
                background-color: var(--text-title-color);
            }
        }
      }
    }
  }
  .h-l-line{
    width: 3px;
    color: rgb(216, 100, 34);
  }
}
</style>
