<template>
  <Transition name="drawer">
    <div class="covid19-drawer-mask" v-if="props.modelValue">
      <div class="d-m-body">
        <div class="d-m-b-header">
          <p class="d-m-b-h-title">{{ props.drawerTitle }}</p>
          <button @click="closeDrawer()">
              {{ i18nMap.header.menus.btn1 }}
          </button>
        </div>
        <div class="d-m-b-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang='ts'>
import { inject } from 'vue';
import defaultValue from '@/constant';

interface Props {
  modelValue: boolean,
  drawerTitle: string
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
const closeDrawer = () => {
  emit('update:modelValue', false)
}
const i18nMap = inject('i18nMap', defaultValue.i18nMap)

</script>

<style lang='less' scoped>
.covid19-drawer-mask{
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 198;
  background-color: rgba(0, 0, 0, 0.45);
  .d-m-body{
    width: 355px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    box-shadow: -6px 0 16px 0 rgba(0, 0, 0, 0.08), -3px 0 6px -4px rgba(0, 0, 0, 0.12),-9px 0 28px 8px rgba(0, 0, 0, 0.05);
    color: var(--text-title-color);
    background-color: var(--bg-color);
    .d-m-b-header{
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid rgb(216, 100, 34);
      .d-m-b-h-title{
        font-size: 22px;
        font-weight: 300;
      }
      button{
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
        color: var(--bg-color);
        background-color: var(--text-title-color);
      }
    }
    .d-m-b-content{
      flex: 2;
      padding: 10px;
      // background-color: black;
    }
  }
}
</style>
