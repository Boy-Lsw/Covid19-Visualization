<template>
  <div class="home_box">
    <Header></Header>
    <VueAmap></VueAmap>
  </div>
</template>

<script setup lang="ts">
import Header from '../component/Header/index.vue'
import VueAmap from '../component/VueAmap/index.vue'
</script>

<style lang="less" scoped>
.home_box{
  width: 100vw;
  height: 100vh;
}
</style>
