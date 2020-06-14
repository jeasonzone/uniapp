<template>
  <view>
    <view class="uni-divider">
      <view class="uni-divider__content">安全动态</view>
      <view class="uni-divider__line"></view>
    </view>
    <view class="uni-padding-wrap uni-common-mt" style="margin:7px">
      <uni-segmented-control
        :current="current"
        :values="items"
        :style-type="styleType"
        :active-color="activeColor"
        @clickItem="onClickItem"
      />
    </view>
    <view class="content">
      <view v-if="current === 0">
        <uni-card
          :is-shadow="true"
          title="新闻动态"
          mode="title"
          thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
          extra="技术没有上限"
          @click="clickCard"
        >
          <view>
            <view class="image-box">
              <image
                class="image animated pulse"
                mode="aspectFill"
                src="../assets/img/2.jpg"
              />
            </view>
            <view class="content-box">
              <view class="content-item-a">
                <a href="#">2020-06-12 【深信服】2020年6月12日安全资讯</a>
              </view>
              <view class="content-item-a">
                <a href="#">2020-06-11 【深信服】2020年6月11日安全资讯</a>
              </view>
              <view class="content-item-a">
                <a href="#">2020-06-10 【深信服】2020年6月10日安全资讯</a>
              </view>
              <view class="content-item-a">
                <a href="#">2020-06-9 【深信服】2020年6月9日安全资讯</a>
              </view>
              <view class="content-item-a">
                <a href="#">2020-06-8 【深信服】2020年6月8日安全资讯</a>
              </view>
			  <view class="content-item-a">
                <a href="#">2020-06-6 【深信服】2020年6月6日安全资讯</a>
              </view>
            </view>
            <view class="more-btn">
              <a href="#">查看更多>></a>
            </view>
          </view>
        </uni-card>
      </view>
      <view v-if="current === 1">
        <uni-card
          :is-shadow="true"
          title="威胁分析"
          mode="title"
          thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
          extra="技术没有上限"
          @click="clickCard"
        >
          <view>
            <view class="image-box">
              <image
                class="image animated tada"
                mode="aspectFill"
                src="../assets/img/3.jpg"
              />
            </view>
            <view class="content-box">
              <view class="content-item-a">
                <a href="#">2020-06-12 勒索病毒？一搜就知道</a>
              </view>
              <view class="content-item-a">
                <a href="#">2020-06-11 合法软件沦为勒索工具，深信服EDR提供防御方案</a>
              </view>
			  <view class="content-item-a">
                <a href="#">2020-06-01 使用yarGen提取Linux恶意脚本特征</a>
              </view>
			  <view class="content-item-a">
                <a href="#">2020-05-18 GlobeImposter勒索病毒新变种C4H东山再起</a>
              </view>
			  <view class="content-item-a">
                <a href="#">2020-05-14 汉化远控木马下发挖矿程序，利用肉鸡资源捞金</a>
              </view>
			  <view class="content-item-a">
                <a href="#">2020-04-30 RainbowMiner，一个求生欲极强的挖矿病毒家族</a>
              </view>
            </view>
            <view class="more-btn">
              <a href="#">查看更多>></a>
            </view>
          </view>
        </uni-card>
      </view>
      <view v-if="current === 2">
        <uni-card
          :is-shadow="true"
          title="研究成果"
          mode="title"
          thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
          extra="技术没有上限"
          @click="clickCard"
        >
          <view>
            <view class="image-box">
              <image
                class="image animated bounce"
                mode="aspectFill"
                src="../assets/img/4.jpg"
              />
            </view>
            <view class="content-box">
              <view class="content-item-a">
                <a href="#">2020-06-12 Linux流行病毒家族&清除方法集锦</a>
              </view>
              <view class="content-item-a">
                <a href="#">2019-11-25 追溯朝鲜APT组织Lazarus的攻击历程</a>
              </view>
			  <view class="content-item-a">
                <a href="#">2019-11-14 挖矿处置手册：安全研究员的套路都在这儿了</a>
              </view>
			  <view class="content-item-a">
                <a href="#">2019-11-13 盘点近几年勒索病毒使用过的工具和漏洞</a>
              </view>
			  <view class="content-item-a">
                <a href="#">2019-11-05 Unit42发布powershell自动反混淆工具</a>
              </view>
			  <view class="content-item-a">
                <a href="#">2019-10-30 【实用指南】最全Linux应急响应技巧，看这一篇就够了</a>
              </view>
            </view>
            <view class="more-btn">
              <a href="#">查看更多>></a>
            </view>
          </view>
        </uni-card>
      </view>
    </view>
  </view>
</template>

<script>
import uniCard from "../uni-card/uni-card.vue";
import uniSegmentedControl from "../uni-segmented-control/uni-segmented-control.vue";
export default {
  components: {
    uniCard,
    uniSegmentedControl
  },
  data() {
    return {
      items: ["新闻动态", "威胁分析", "研究成果"],
      current: 0,
      styleType: "button",
      activeColor: "#007aff"
    };
  },
  methods: {
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.content-box {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
}
.content-item-a {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.more-btn {
  text-align: right;
}
</style>
