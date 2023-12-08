<template>
  <div>
    i18
  </div>
</template>

<script setup lang='ts'>
import { inject } from 'vue';
import defaultValue from '@/constant/index';

type Emits = {(t: 'close'):void}
const emits = defineEmits<Emits>()
const i18nMap = inject('i18nMap', defaultValue.i18nMap)
const forceLang = inject('forceLang', defaultValue.forceLang)

const options = [
    /** 法语 */
    { title: 'Basculer en français', lang: 'fr', text: 'français' },
    /** 韩语 */
    { title: '한국어로 전환', lang: 'ko', text: '한어' },
    /** 日语 */
    { title: '日本語に切り替え', lang: 'jp', text: '日本語' },
    /** 英语 */
    { title: 'switch to english', lang: 'en', text: 'English' },
    /** 简体中文 */
    { title: '切换为简体中文', lang: 'zh_cn', text: '简体中文' },
    /** 繁体中文 */
    { title: '切換爲繁體中文', lang: 'zh_hk', text: '繁體中文' }
]
</script>

<style lang='less' scoped>

</style>
