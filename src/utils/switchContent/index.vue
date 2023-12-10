<template>
  <div>
    {{ props.text }}
  </div>
</template>

<script setup lang='ts'>
type Props = {
  text: number | string
}
const props = defineProps<Props>()

// watch(() => props.text)
</script>

<style lang='less' scoped>

</style>
