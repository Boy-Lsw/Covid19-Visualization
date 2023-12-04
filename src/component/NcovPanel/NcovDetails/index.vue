<template>
  <ul class="covid19-theme-transition-bg-tcolor covid19-data-panel ncov-details">
    <li>
      <p class="n-d-title">全国</p>
      <p class="n-d-comments">当前地区</p>
    </li>
    <li>
      <p class="n-d-title">2022年11月14日</p>
      <p class="n-d-comments">数据最后更新时间</p>
    </li>
    <template v-if="showComment">
      <li class="n-d-comments-last">
        <p>
          北京卫健委未明确大部分治愈与死亡病例的分区归属，因此北京市下辖分区的现存确诊暂无法获取。
        </p>
      </li>
    </template>
  </ul>
  <ul class="covid19-theme-transition-bg-tcolor covid19-data-panel ncov-data">
    <li>
      <p class="n-d-title covid19-data-confirmedCount">25,249</p>
      <p class="n-d-comments covid19-theme-transition-text-color">累计确诊人数</p>
    </li>
    <li>
      <p class="n-d-title covid19-data-suspectedCount">164</p>
      <p class="n-d-comments covid19-theme-transition-text-color">疑似感染人数</p>
    </li>
    <li>
      <p class="n-d-title covid19-data-curedCount">14,283</p>
      <p class="n-d-comments covid19-theme-transition-text-color">治愈人数</p>
    </li>
    <li>
      <p class="n-d-title covid19-data-deadCount">13</p>
      <p class="n-d-comments covid19-theme-transition-text-color">死亡人数</p>
    </li>
  </ul>
</template>

<script setup lang='ts'>
import {ref} from 'vue'
const showComment = ref(true)
</script>

<style lang='less' scoped>
.ncov-details{
  padding: 5px 0 0 0 !important; 
  min-width: 120px;
  li{
    padding: 5px 10px;
  }
  .n-d-title{
    font-size: 20px;
  }
  .n-d-comments-last{
    opacity: 0.75;
    font-size: 12px;
    color: var(--text-comments-color);
    border-top: 1px solid var(--border-color);
    p{
    transform: scale(0.9);
    animation: bounce-comments-last 2s;
    }
  }
}
.ncov-data{
  height: 245px;
  align-items: flex-end;
  .n-d-title {
    height: 35px;
    font-size: 26px;
    text-align: end;
  }
  .n-d-comments {
    text-align: end;
  }
}
@keyframes bounce-comments-last {
    0% {
        margin-top: -15px;
        opacity: 0;
    }
    100% {
        margin-top: 0;
        opacity: 1;
    }
}
</style>
