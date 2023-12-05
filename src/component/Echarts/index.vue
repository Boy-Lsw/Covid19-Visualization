<template>
  <div class="echarts">
    <div class="lt" ref="lt"></div>
    <div class="lb" ref="lb"></div>
    <div class="rt" ref="rt"></div>
    <div class="rb" ref="rb"></div>
  </div>
</template>

<script setup lang='ts'>
import {ref, onMounted} from 'vue'
import * as echarts from 'echarts'

const lt = ref()
const lb = ref()
const rt = ref()
const rb = ref()

onMounted(() => {
  const elt = echarts.init(lt.value)
  const optionLT = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};
elt.setOption(optionLT)
  const elb = echarts.init(lb.value)
  const optionLB = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};
elb.setOption(optionLB)
  const ert = echarts.init(rt.value)
  const optionRT = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};
ert.setOption(optionRT)
  const erb = echarts.init(rb.value)
  const optionRB = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};
erb.setOption(optionRB)
})
</script>

<style lang='less' scoped>
.echarts{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  .lt{
    // background-color: blue;
    height: 50%;
    width: 50%;
  }
  .lb{
    // background-color: red;
    height: 50%;
    width: 50%;
  }
  .rt{
    // background-color: yellow;
    height: 50%;
    width: 50%;
  }
  .rb{
    // background-color: black;
    height: 50%;
    width: 50%;
  }
}
</style>
