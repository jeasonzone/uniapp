<template>
	<view class="example-body">
		<uni-drawer :visible="showRight" mode="right" @close="closeDrawer('right')">
			<uni-list>
				<uni-list-item title="首页" />
				<uni-list-item title="终端检测响应平台EDR" />
				<uni-list-item title="响应工具" />
				<uni-list-item title="安全资讯" />
				<uni-list-item title="信服论坛" />
				<uni-list-item title="安全实验室" />
				<uni-list-item class="last-list-item" title="关于EDR" />
			</uni-list>
		</uni-drawer>
	</view>
</template>

<script>
	import uniDrawer from '../uni-drawer/uni-drawer.vue'
	import uniList from '../uni-list/uni-list.vue'
	import uniListItem from '../uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniListItem,
			uniDrawer,
			uniList
		},
		data() {
			return {
				showRight: false
			};
		},
		methods: {
			show(e) {
				this.showRight = true
			},
			closeDrawer(e) {
				this.showRight = false
			},
			confirm() {}
		},
		onNavigationBarButtonTap(e) {
			console.log(23232);
			this.showRight = !this.showRight
		},
		onBackPress() {
			if (this.showRight) {
				this.hide()
				return true
			}
		}
	};
</script>

<style>
	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	}

	/* #endif */

	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}

	.example {
		padding: 0 15px 15px;
	}

	.example-info {
		padding: 15px;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 15px;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 14px;
		line-height: 20px;
	}

	.example-info-text {
		font-size: 14px;
		line-height: 20px;
		color: #3b4144;
	}


	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.header {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 10px 15px;
		align-items: center;
		border-top-width: 1px;
		border-top-color: #f5f5f5;
		border-top-style: solid;
		background-color: #ffffff;
	}

	.input-view {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
		flex-direction: row;
		background-color: #e7e7e7;
		height: 30px;
		border-radius: 15px;
		padding: 0 10px;
		flex: 1;
		background-color: #f5f5f5;
	}

	.uni-drawer-info {
		background-color: #ffffff;
		padding: 30rpx;
		padding-top: 10rpx;
		color: #3b4144;
	}

	.uni-padding-wrap {
		padding: 0 15px;
		line-height: 1.8;
	}

	.input {
		flex: 1;
		padding: 0 5px;
		height: 24px;
		line-height: 24px;
		font-size: 28rpx;
		background-color: transparent;
	}

	.close {
		padding: 30rpx;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 0;
	}

	.draw-cotrol-btn {
		flex: 1;
	}
</style>
