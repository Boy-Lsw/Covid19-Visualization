<template>
  <div class="i18n">
    <p class="i18n-title">{{ i18nMap.header.menus.i18n.text1 }}</p>
    <ul class="i18n-list">
      <li v-for="(item, index) in options" :key="index" @click="switchLang(item.lang as LangType)" :title="item.title">{{ item.text }}</li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
import { inject } from 'vue';
import defaultValue from '@/constant/index';
import type { ForceLang, LangType } from '@/utils/i18n/interface';
import message from '@/utils/message';
import langTools from '@/utils/i18n';
import { nextTick } from 'vue';

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
const switchLang:ForceLang = (lang) => {
  const _lang = () => i18nMap.header.menus.i18n.globalMsg
  if(langTools.getLang() === lang) {
    return message({
      title: _lang().warn.title,
      content: _lang().warn.content,
      type: 'warn'
    })
  }
  // langTools.setLang(lang)
  emits('close')
  forceLang(lang)
  nextTick(() => {
    message({
    title: _lang().success.title,
    content: _lang().success.content,
    // type: 'success'
  })
  })
}
</script>

<style lang='less' scoped>
.i18n{
  height: 100%;
  .i18n-title{
    font-size: 16px;
    margin-bottom: 16px;
    color: var(--text-title-color);
  }
  .i18n-list{
    padding-left: 20px;
    list-style-type: square;
    li {
      padding: 8px;
      border-radius: 5px;
      margin-bottom: 5px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      color: var(--text-title-color);
      &:hover {
        color: var(--bg-color);
        background-color: var(--text-title-color);
      }
    }
  }
}
</style>
