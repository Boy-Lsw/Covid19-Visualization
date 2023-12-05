<template>
  <div class="about_box">
    <PageContentTitle class="pageContentTitle"/>
    <Echarts class="echarts"/>
    <span class="toHome" @click="toHome">返回首页</span>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import PageContentTitle from '../component/PageContentTitle/index.vue'
import Echarts from '../component/Echarts/index.vue'
const $router = useRouter()

const toHome = () => {
  $router.push('./')
}
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
  .toHome{
    font-size: 38px;
    font-weight: 700;
    color: var(--text-title-color);
    position: fixed;
    top: 2%;
    left: 3%;
    &:hover{
      color: rgb(158, 216, 34);
      cursor: pointer;
    }
  }
}
</style>
