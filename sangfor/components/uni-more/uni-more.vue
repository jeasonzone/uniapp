<template>
	<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction" @trigger="trigger" />
</template>

<script>
	import uniFab from '../../components/uni-fab/uni-fab.vue'
	export default {
		components: {
			uniFab,
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
						iconPath: '../../static/icon/search.svg',
						selectedIconPath: '../../static/icon/search.svg',
						text: '病毒查找',
						active: false
					},
					{
						iconPath: '../../static/icon/upload-cloud.svg',
						selectedIconPath: '../../static/icon/upload-cloud.svg',
						text: '样本上传',
						active: false
					},
					{
						iconPath: '../../static/icon/message-square.svg',
						selectedIconPath: '../../static/icon/message-square.svg',
						text: '安全Q&A',
						active: false
					},
					{
						iconPath: '../../static/icon/users.svg',
						selectedIconPath: '../../static/icon/users.svg',
						text: '申请合作',
						active: false
					},
					{
						iconPath: '../../static/icon/phone.svg',
						selectedIconPath: '../../static/icon/phone.svg',
						text: '联系我们',
						active: false
					}
				],
				horizontal: 'left',
				vertical: 'bottom',
				direction: 'vertical',
			}
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
			}
		}
	};
</script>

<style>
	
</style>
