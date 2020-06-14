<template>
	<view class="main-box">
		<uni-menu ref="menu"/>
		<Banar />
		
		<view style="display:flex;padding:1px">
			<button type="primary" style="width:100%;margin:1px">免费试用</button>
			<button type="default" plain="true" style="width:100%;margin:1px">了解更多</button>
		</view>
		<uni-trends />
		<uni-example />
		<uni-more />
	</view>
</template>

<script>
	import uniMenu from '../../components/uni-menu/uni-menu.vue'
	import Banar from "../../components/uni-banar/uni-banar.vue"
	import uniMore from '../../components/uni-more/uni-more.vue'
	import uniTrends from '../../components/uni-trends/uni-trends.vue'
	import uniExample from '../../components/uni-example/uni-example.vue'
	
	export default {
		components: {
			uniMenu,
			Banar,
			uniMore,
			uniTrends,
			uniExample
		},
		data() {
			return {
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF'
				},
				content: [{
						iconPath: '/static/component.png',
						selectedIconPath: '/static/componentHL.png',
						text: '组件',
						active: false
					},
					{
						iconPath: '/static/api.png',
						selectedIconPath: '/static/apiHL.png',
						text: 'API',
						active: false
					},
					{
						iconPath: '/static/template.png',
						selectedIconPath: '/static/templateHL.png',
						text: '模版',
						active: false
					}
				],
				horizontal: 'left',
				vertical: 'bottom',
				direction: 'horizontal',
			}
		},
		onLoad() {

		},
		methods: {
			trigger(e) {
				console.log(e)
				this.content[e.index].active = !e.item.active
				uni.showModal({
					title: '提示',
					content: `您${this.content[e.index].active ? '选中了' : '取消了'}${e.item.text}`,
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定')
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			fabClick() {
				uni.showToast({
					title: '点击了悬浮按钮',
					icon: 'none'
				})
			}
		},
		onNavigationBarButtonTap(e) {
			this.$refs.menu.show()
		},
	}
</script>

<style>
	.main-box{
		background-color: #F4F5F6;
        height: 100%;
        font-size: 28rpx;
        line-height: 1.8;
	}
</style>
