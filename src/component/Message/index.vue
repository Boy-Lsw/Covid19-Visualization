<template>
  <Transition name="message" appear>
    <div :class="`covid19-message ${props.isBoxShadow ? 'm-box-shadow' : ''}`" v-if="isShow">
      <div class="m-title">
        <img :src="icons[props.type]">
        <p>{{ props.title }}</p>
      </div>
      <p class="m-content">{{ props.content }}</p>
    </div>
  </Transition >
</template>

<script setup lang='ts'>
import {ref, onMounted} from 'vue'
import success from '@/assets/imgs/success.png'
import warn from '@/assets/imgs/warning.png'

const icons = {success, warn}

type Props = {
  title: string,
  content: string,
  dur: number,
  isBoxShadow: boolean,
  type?: 'success' | 'warn'
}
const isShow = ref(true)

const props = withDefaults(defineProps<Props>(), {type: 'success'})

onMounted(() => {
  setTimeout(() => {
    isShow.value = false
  }, props.dur - 500);
})
</script>

<style lang='less' scoped>
.covid19-message{
  position: fixed;
  width: 300px;
  bottom: 80px;
  left: 20px;
  padding: 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--text-title-color);
  background-color: var(--bg-color);
  .m-title{
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    img{
      height: 24px;
      width: 24px;
      margin-right: 16px;
    }
    p{
      font-size: 16px;
    }
  }
  .m-content {
      padding-left: 40px;
      opacity: 0.8;
  }
}
.m-box-shadow {
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
.message-enter-active{
  animation: bounce-in 0.5s;
}
.message-leave-active{
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
      opacity: 0;
      transform: scale(0);
  }
  50% {
      transform: scale(1.1);
  }
  100% {
      opacity: 1;
      transform: scale(1);
  }
}
</style>
