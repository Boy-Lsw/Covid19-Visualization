<template>
  <img class="covid19-amap-reset" :src="icon" @click="reset" :title="i18nMap.body.amap.resetPos.tip"/>
</template>

<script setup lang='ts'>
import {inject} from 'vue'
import icon from '@/assets/imgs/amap_reset.png'
import defaultValue from '@/constant';

const i18nMap = inject('i18nMap', defaultValue.i18nMap)

type Emits = {(e:'reset'): void}
const emits = defineEmits<Emits>()

const reset = () => emits('reset')
</script>

<style lang='less' scoped>
.covid19-amap-reset {
    cursor: pointer;
}
</style>
