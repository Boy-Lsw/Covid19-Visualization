<template>
  <div>
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

<style lang=""></style>
