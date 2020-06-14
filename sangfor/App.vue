<script>
export default {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>

<style>
.uni-divider {
  height: 110rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.uni-divider__content {
  font-size: 40rpx;
  color: #999;
  padding: 0 20rpx;
  position: relative;
  z-index: 101;
  background: #f4f5f6;
}
.uni-divider__line {
  background-color: #cccccc;
  height: 1px;
  width: 100%;
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 0;
  transform: translateY(50%);
}
page {
  background-color: #f4f5f6;
  height: 100%;
  font-size: 28rpx;
  line-height: 1.8;
}
</style>
