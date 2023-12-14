<template>
  <div class="switch-content">
    <div class="s-c-container" :style="{marginTop: distance}">
      <p v-for="(item, key) of list" :key="key">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {reactive, ref, watch} from 'vue'

type Props = {
  text: number | string
}
const props = defineProps<Props>()
const list = reactive([props.text])

const distance = ref('0')
watch(() => props.text, () => {
        // 追加dom
        list.push(props.text)
        // 更改位置
        distance.value = `-${35 * (list.length - 1)}px`
    })
</script>

<style lang='less' scoped>
.switch-content {
    height: 100%;
    overflow: hidden;
    .s-c-container {
        transition: all 1s;
        p {
            height: 35px;
        }
    }
}
</style>
