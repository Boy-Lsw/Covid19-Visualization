<template>
  <el-amap-control-geolocation
  @complete="getLocation"
  :position="{ top: '100px', right: '13px' }"
  :zoomToAccuracy="false"
  :getCityWhenFail="true"
  :GeoLocationFirst="true"
  :panToLocation="false"
  :showMarker="false"
  :showCircle="false"/>
</template>

<script setup lang='ts'>
import defaultValue from '@/constant';
import message from '@/utils/message';
import pubsub from '@/utils/pubsub';
import { inject } from 'vue'

const i18nMap = inject('i18nMap', defaultValue.i18nMap)
const provinceCities = inject('provinceCities', defaultValue.provinceCities)

type GetLocation = {
    province: string
    city: string
    adcode: string
    type: 'complete' | 'error'
}

const getLocation = (e: GetLocation) => {
  const lang = () => i18nMap.body.amap.location.globalMsg
  const { province, city, adcode } = e
  console.log(province, city, adcode)
  if (!(province && city && adcode))  return message({
      title: lang().warn.title,
      content: lang().warn.content,
      type: 'warn'
  })
  const cur = provinceCities.find((a) => a.adcode === adcode)
  if (cur) pubsub.publish('searchAreaData', { ...cur, isMsg: false })
  return message({
    title: lang().success.title,
    content: lang().success.content + `${province}${city}`
  })
}
</script>