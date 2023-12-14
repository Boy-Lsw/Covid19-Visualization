<template>
  <div class="covid19-body">
    <el-amap
    @init="init"
    :center="_center"
    :zoom="_zoom"
    :zooms="zooms"
    :isHotspot="false"
    :scrollWheel="false"
    :doubleClickZoom="false"
    >
      <el-amap-control-scale />
      <el-amap-control-tool-bar :position="'RT'"/>
      <el-amap-control-control-bar :position="{ bottom: '60px', left: '20px' }" />
      <Geolocation/>
      <LayerDistrict/>
      <el-amap-marker :clickable="true" :cursor="'pointer'">
      </el-amap-marker>
    </el-amap>
    <div class="b-panel b-panel-left">
      <NcovDetails/>
    </div>
    <div class="b-panel b-panel-right">
      <ColorClassify />
    </div>
    <div class="b-reset-pos">
      <ResetAMapPos @reset="reset"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {inject} from 'vue'
import Geolocation from './Geolocation/index.vue'
import NcovDetails from '../NcovPanel/NcovDetails/index.vue'
import ColorClassify from '../NcovPanel/ColorClassify/index.vue'
import ResetAMapPos from './ResetAMapPos/index.vue'
import LayerDistrict from './LayerDistrict/index.vue'
import pubsub from '@/utils/pubsub';
import defaultValue from '@/constant';
import styleUtils from '@/utils/theme'
import type { SwitchStyle } from '@/utils/pubsub/interface';
import message from '@/utils/message'
import storage from '@/utils/storage'

const zooms = [3, 9]
const _center = [104.62313499999999, 37.358796]
const _zoom = 4

const i18nMap = inject('i18nMap', defaultValue.i18nMap)

const amap = {
    /** 高德地图实例 */
    e: null as any,
    /** 当前主题(默认) */
    curStyle: 'normal'
}

const init = (e: any) => {
    // 保存地图实例
    amap.e = e
    // 主题自适应与初始化
    const style = styleUtils.adaptation()
    const key = style.theme === '_light' ? 0 : 3
    _changeAllTheme(style.theme, key)
    style.dark.push(() => _changeAllTheme('dark', 3))
    style.light.push(() => _changeAllTheme('_light', 0))
    // 地图显示要素
    amap.e.setFeatures(['bg', 'road'])
}

const _changeAllTheme = (style: string, key: number) => {
    /**
     * 高德地图的light为月光银主题，而不是normal默认主题
     * 所以使用_light与light进行区分
     */
    const mapStyle = style === '_light' ? 'normal' : style
    // 切换高德地图主题
    amap.e.setMapStyle(`amap://styles/${mapStyle}`)
    // 切换网站主题
    styleUtils.changeTheme(style)
    // 重置当前所使用的地图样式编号
    storage.setItem('theme_order', String(key))
    // 记录当前主题
    amap.curStyle = mapStyle
}

const switchStyle = ({style, key}: SwitchStyle) => {
  const lang = () => i18nMap.header.menus.style
  if (amap.curStyle === style)
    return message({
      title: lang().globalMsg.warn.title,
      content: lang().globalMsg.warn.content,
      type: 'warn'
    })
  _changeAllTheme(style, key)
  message({
      title: lang().globalMsg.success.title,
      content: lang().globalMsg.success.content
  })
}

const reset = () => {
  const isZoom = amap.e.getZoom() === _zoom
  const { KL, kT } = amap.e.getCenter()
  const [_KL, _kT] = _center
  const isReset = isZoom && KL === _KL && kT === _kT
  const lang = () => i18nMap.body.amap.resetPos.globalMsg
  if(isReset) {
    return message({
      title: lang().warn.title,
      content: lang().warn.content,
      type: 'warn'
    })
  }
  amap.e.setZoom(_zoom)
  amap.e.setCenter(_center)
  message({
    title: lang().success.title,
    content: lang().success.content
  })
}

pubsub.subscribe('switchStyle', (_, styleData) => switchStyle(styleData))
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
  .b-reset-pos {
    width: 34px;
    height: 34px;
    padding: 3px;
    box-sizing: border-box;
    position: absolute;
    top: 135px;
    right: 12px;
    border-radius: 17px;
    background-color: #fff;
  }
}
</style>
