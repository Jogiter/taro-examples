<template>
  <view class="index">
    <Counter />
  </view>
</template>

<script lang="ts">
import './index.css'
import Counter from '../../components/Counter.vue'

export default {
  name: 'Index',
  components: {
    Counter,
  },
  setup() {
    console.log('asf')
  },
}
</script>
