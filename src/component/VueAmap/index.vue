<template>
  <div class="covid19-body">
    <el-amap>
      <el-amap-control-scale />
      <el-amap-control-tool-bar :position="'RT'"/>
      <el-amap-control-control-bar :position="{ bottom: '60px', left: '20px' }" />
      <Geolocation/>
    </el-amap>
    <div class="b-panel b-panel-left">
      <NcovDetails/>
    </div>
    <div class="b-panel b-panel-right">
      <ColorClassify />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Geolocation from './Geolocation/index.vue'
import NcovDetails from '../NcovPanel/NcovDetails/index.vue'
import ColorClassify from '../NcovPanel/ColorClassify/index.vue'
</script>

<style lang="less" scoped>
.covid19-body{
  height: calc(100vh - 100px);
  position: relative;
  .b-panel{
    position: absolute;
    z-index: 197;
  }
  .b-panel-left {
    top: 20px;
    left: 20px;
  }
  .b-panel-right {
    bottom: 25%;
    right: 20px;
  }
}
</style>
