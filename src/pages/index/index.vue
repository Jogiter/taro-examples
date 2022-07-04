<template>
  <Layout class="index">
    <Counter />
    <view>
      <view class="container">
        <text>Welcome to Shanghai!</text>
        <text>
          Shanghai is one of the four direct-administered municipalities of the
          People's Republic of China.
        </text>
        <text>
          Shanghai is one of the four direct-administered municipalities of the
          People's Republic of China.
        </text>
        <view>
          <button>Yes</button>
          <button>No</button>
        </view>
      </view>
      <br />

      <button type="button" @tap="getProperty">
        使用 JavaScript 来获取 CSS 变量
      </button>
      <button type="button" @tap="setProperty">
        使用 JavaScript 来更改 CSS 变量
      </button>
    </view>
  </Layout>
</template>

<script lang="ts">
import './index.css'
import Layout from '../../components/Layout.vue'
import Counter from '../../components/Counter.vue'

export default {
  name: 'IndexPage',
  components: {
    Counter,
    Layout,
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
