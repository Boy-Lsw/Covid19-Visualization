<template>
  <ul class="covid19-theme-transition-bg-tcolor covid19-data-panel ncov-details">
    <li>
      <p class="n-d-title">{{area}}</p>
      <p class="n-d-comments">{{ i18nMap.body.ncov.details.text1 }}</p>
    </li>
    <li>
      <p class="n-d-title">{{time}}</p>
      <p class="n-d-comments">{{ i18nMap.body.ncov.details.text2 }}</p>
    </li>
    <template v-if="comment">
      <li class="n-d-comments-last">
        <p>
          {{ comment }}
        </p>
      </li>
    </template>
  </ul>
  <ul class="covid19-theme-transition-bg-tcolor covid19-data-panel ncov-data">
    <li>
      <p class="n-d-title covid19-data-confirmedCount">
        <SwitchContent :text="confirmedCount" />
      </p>
      <p class="n-d-comments covid19-theme-transition-text-color">
        {{ i18nMap.body.ncov.data.text1 }}
      </p>
    </li>
    <li>
      <p class="n-d-title covid19-data-suspectedCount">
        <SwitchContent :text="suspectedCount" />
      </p>
      <p class="n-d-comments covid19-theme-transition-text-color">
        {{ i18nMap.body.ncov.data.text2 }}
      </p>
    </li>
    <li>
      <p class="n-d-title covid19-data-curedCount">
        <SwitchContent :text="curedCount" />
      </p>
      <p class="n-d-comments covid19-theme-transition-text-color">
        {{ i18nMap.body.ncov.data.text3 }}
      </p>
    </li>
    <li>
      <p class="n-d-title covid19-data-deadCount">
        <SwitchContent :text="deadCount" />
      </p>
      <p class="n-d-comments covid19-theme-transition-text-color">
        {{ i18nMap.body.ncov.data.text4 }}
      </p>
    </li>
  </ul>
</template>

<script setup lang='ts'>
import {ref, inject, watch, nextTick} from 'vue'
import defaultValue from '@/constant';
import pubsub from '@/utils/pubsub';
import type { SearchAreaDataType } from '@/utils/pubsub/interface'; 
import timeUtils from '@/utils/time';
import message from '@/utils/message';
import SwitchContent from '@/utils/switchContent/index.vue'

type PanelCounts = string | number

const i18nMap = inject('i18nMap', defaultValue.i18nMap)
const country = inject('country', defaultValue.country)

/** 当前数据面板中正在展示的地区 */
let curShowDataPanelArea = ''

const confirmedCount = ref<PanelCounts>('0')
const suspectedCount = ref<PanelCounts>('0')
const curedCount = ref<PanelCounts>('0')
const deadCount = ref<PanelCounts>('0')
const area = ref('地区')
const time = ref('时间')
const comment = ref('暂无备注说明')

const updateData = (_data: SearchAreaDataType) => {
  const {name, update_time, isMsg, data} = _data

  confirmedCount.value = data.confirmed_count.toLocaleString()
  suspectedCount.value = data.suspected_count.toLocaleString()
  curedCount.value = data.cured_count.toLocaleString()
  deadCount.value = data.dead_count.toLocaleString()
  area.value = name
  time.value = timeUtils.getDateText(update_time)
  comment.value = _data.comment
  //地图高亮地区
  pubsub.publish('highArea', _data.adcode)
  if(name == '全国')return
  if(isMsg == false) return
  const lang = () => i18nMap.body.amap.showPanelData.globalMsg
  if(curShowDataPanelArea == name) {
    return message({
      title: lang().warn.title,
      content: lang().warn.content(name),
      type: 'warn'
    })
  }
  message({
    title: lang().success.title,
    content: lang().success.content(name),
    type:'success'
  })
  curShowDataPanelArea = name
}

watch(country, (c) => nextTick(() => {
  updateData({ ...c, name: '全国', adcode: '100000' })
}))

pubsub.subscribe('searchAreaData', (_, data) => updateData(data))
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
