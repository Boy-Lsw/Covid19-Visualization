<template>
  <div class="about_box">
    <PageContentTitle/>
    <Echarts></Echarts>
  </div>
</template>

<script setup lang="ts">
// import { useRouter } from 'vue-router'
import PageContentTitle from '../component/PageContentTitle/index.vue'
import Echarts from '../component/Echarts/index.vue'
// const $router = useRouter()

// const ToHome = () => {
//   $router.push('./')
// }
</script>

<style lang="less" scoped>
.about_box{
  height: 100vh;
  width: 100vw;
}
</style>
