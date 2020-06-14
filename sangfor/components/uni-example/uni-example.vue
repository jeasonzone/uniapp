<template>
  <view>
    <view class="uni-divider">
      <view class="uni-divider__content">成功案例</view>
      <view class="uni-divider__line"></view>
    </view>
    <view class="example-body">
			<uni-notice-bar :scrollable="true" :single="true" />
		</view>
  </view>
</template>

<script>
import uniNoticeBar from '../uni-notice-bar/uni-notice-bar.vue'
export default {
  components: {
    uniNoticeBar
  },
  data() {
    return {
      
    };
  },
  methods: {
   
  }
};
</script>

<style scoped>

</style>
