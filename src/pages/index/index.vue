<template>
  <view class="index">
    <Counter />
  </view>
</template>

<script lang="ts">
import './index.css'
import Counter from '../../components/Counter.vue'

export default {
  name: 'IndexPage',
  components: {
    Counter,
  },
  setup() {
    console.log('asf')
  },
}
</script>

<style scoped>
.index1 {
  background: #000;
  size: 16px;
  color: red;
  border: 2px solid blue;

  /* top: 3.2456341px; */

  /* heigth: 100%; */
}
</style>
