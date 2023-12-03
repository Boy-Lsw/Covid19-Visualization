<template>
  <el-amap-control-geolocation
  :position="{ top: '100px', right: '13px' }"
  :zoomToAccuracy="false"
  :getCityWhenFail="true"
  :GeoLocationFirst="true"
  :panToLocation="false"
  :showMarker="false"
  :showCircle="false"/>
</template>

<script setup lang='ts'>

</script>

<style lang='less' scoped>

</style>
