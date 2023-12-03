<template>
  <div class="about_box">
    <button @click="ToHome">click</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const $router = useRouter()

const ToHome = () => {
  $router.push('./')
}
</script>

<style lang="less" scoped>
.about_box{
  height: 100vh;
  width: 100vw;
}
</style>
