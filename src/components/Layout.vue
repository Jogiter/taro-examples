<template>
  <view :style="style">
    <slot></slot>
  </view>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'BellLayout',
  setup() {
    const style = ref()

    setTimeout(() => {
      style.value = '--blue: red;'
    }, 2000)

    return {
      style,
    }
  },
}
</script>
