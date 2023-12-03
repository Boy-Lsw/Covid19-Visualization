<template>
  <div class="covid19-search-input">
    <input type="text" placeholder="请输入地区名称进行搜索">

    <template v-if="result.length">
      <ul class="s-i-tip">
        <li>北京</li>
        <li>上海</li>
        <li>321</li>
        <li>213</li>
        <li>123</li>
        <li>321</li>
        <li>213</li>
        <li>123</li>
        <li>321</li>
        <li>213</li>
        <li>123</li>
        <li>321</li>
      </ul>
    </template>

    <template v-if="!empty">
      <p class="s-i-tip s-i-tip-empty">
        <span>无内容</span>
      </p>
    </template>
  </div>
</template>

<script setup lang='ts'>
import {ref} from 'vue'

const content = ref('')
const result = ref([])
const empty = ref(true)

</script>

<style lang='less'>
.covid19-search-input{
  height: 100%;
  z-index: 197;
  position: relative;
  input{
    width: 100%;
        height: 100%;
        padding-left: 15px;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        box-sizing: border-box;
        color: var(--text-search-color);
        background-color: var(--search-bg-color);
        transition: outline 0.5s;
        &:focus {
            outline: 1px solid var(--border-search-color);
        }
  }
  .s-i-tip{
    width: 100%;
    max-height: 300px;
    position: absolute;
    padding: 3px 0;
    top: 115%;
    left: 0;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    color: var(--text-title-color);
    background-color: var(--bg-color) ;
    overflow-y: auto;
    cursor: default;
    li{
      padding: 10px 10px;
      &:hover{
        background-color: var(--text-search-color);
        color: var(--bg-color)
      }
    }
  }
  .s-i-tip-empty{
    padding: 10px;
    font-size: 16px;
    text-align: center;
    span{
      opacity: 0.6;
      color: var(--text-search-color);
    }
  }
}
</style>
