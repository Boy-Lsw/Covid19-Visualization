<template>
  <div>
    <button @click="ToAbout">click</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const $router = useRouter()

const ToAbout = () => {
  $router.push('./about')
}
</script>

<style lang=""></style>
