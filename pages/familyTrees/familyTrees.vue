<template>
	<view class="content">
		<movable-area scale-area>
			<movable-view class="max" direction="all" scale out-of-bounds>
				<TreeChart :json="treeData" :class="{landscape: IsVertical}" @click-node="clickNode" />
			</movable-view>
		</movable-area>
		<uni-fab :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
			:direction="direction" @trigger="trigger"></uni-fab>
		<My-modal v-model="value" :mData="data" :type="type" @onConfirm="onConfirm" navMask>
		</My-modal>
	</view>
</template>

<script>
	import TreeChart from "../../components/TreeChart.vue";
	import MyModal from "@/components/My-modal/My-modal.vue"
	export default {
		data() {
			return {

				value: false,
				type: 'genealogy',
				data: {
					title: '123',
					content: [{
							title: '编辑信息',
							type: 'table'
						},
						{
							title: '增加子孙',
							type: 'table'
						},
						{
							title: '增加配偶',
							type: 'table'
						},
						{
							title: '删除',
							type: 'button'
						}
					],
				},


				IsEdit: false,
				IsVertical: false,
				horizontal: 'left',
				vertical: 'bottom',
				direction: 'horizontal',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: "#007AFF"
				},
				content: [{
						iconPath: '/static/component.png',
						selectedIconPath: '/static/componentHL.png',
						text: '编辑模式',
						active: false
					},
					{
						iconPath: '/static/template.png',
						selectedIconPath: '/static/templateHL.png',
						text: '显示方向',
						active: false
					}
				],
				treeData: {
					"children": [{
							"children": [],
							"image_url": "",
							"mates": [],
							"name": "布兰登·史塔克"
						},
						{
							"children": [{
									"children": [],
									"image_url": "",
									"mates": [],
									"name": "罗伯·史塔克"
								},
								{
									"children": [],
									"image_url": "",
									"mates": [],
									"name": "珊莎·史塔克"
								},
								{
									"children": [],
									"image_url": "",
									"mates": [],
									"name": "艾丽娅·史塔克"
								},
								{
									"children": [],
									"image_url": "",
									"mates": [],
									"name": "布兰·史塔克"
								},
								{
									"children": [],
									"image_url": "",
									"mates": [],
									"name": "瑞肯·史塔克"
								},
								{
									"children": [],
									"image_url": "",
									"mates": [],
									"name": "琼恩·雪诺"
								}
							],
							"image_url": "",
							"mates": [{
								"image_url": "",
								"name": "凯特·徒利"
							}],
							"name": "艾德·史塔克"
						},
						{
							"children": [],
							"image_url": "",
							"mates": [],
							"name": "班杨·史塔克"
						},
						{
							"children": [],
							"image_url": "",
							"mates": [],
							"name": "莱安娜·史塔克"
						}
					],
					"image_url": "",
					"mates": [],
					"name": "瑞卡德·史塔克"
				}
			}
		},
		onLoad() {},
		components: {
			TreeChart,
			MyModal
		},
		methods: {
			onLoad:function(option){
				console.log("应该显示的家族id是："+option.familyid);
				//获取用户信息
			},
			clickNode: function(node) {
				// eslint-disable-next-line
				if (this.IsEdit === false) {
					console.log("展开子树")
					uni.showToast({
						title: '展开子树',
						duration: 500,
						icon: "loading"
					});
				} else {
					console.log("编辑结点")
					this.popTap(node);
				}

			},

			trigger(e) {
				if (e.index === 0) {
					this.content[e.index].active = !e.item.active;
					this.IsEdit = e.item.active;
					if (this.IsEdit === true) {
						uni.showToast({
							title: '编辑模式',
							duration: 500,
							icon: "loading"
						});
					} else {
						uni.showToast({
							title: '只读模式',
							duration: 500,
							icon: "loading"
						});
					}
				} else {
					if (this.IsVertical === false) {
						this.IsVertical = true;
						uni.showToast({
							title: '横向显示',
							duration: 500,
							icon: "loading"
						});
					} else {
						this.IsVertical = false;
						uni.showToast({
							title: '竖向显示',
							duration: 500,
							icon: "loading"
						});
					}
				}
			},

			popTap(node) {
				this.value = !this.value
				this.data.title = node.name
			},

			onConfirm(e) {
				switch (e.title) {
					case '编辑信息':
						uni.showToast({
							title: `${e.title}`,
							icon: 'loading',
							duration: 500
						})
						break;
					case '增加子孙':
						uni.showToast({
							title: `${e.title}`,
							icon: 'loading',
							duration: 500
						})
						break;
					case '增加配偶':
						uni.showToast({
							title: `${e.title}`,
							icon: 'loading',
							duration: 500
						})
						break;
					case '删除':
						uni.showModal({
							title: `${e.title}`,
							content: '是否删除该人员？',
							success: function(res) {
								if (res.confirm) {
									uni.showToast({
										title: '删除成功',
										icon: 'success',
										duration: 500
									})
								} else if (res.cancel) {
									uni.showToast({
										title: '取消删除',
										icon: 'none',
										duration: 500
									})
								}
							}
						});
						break;
				}

			},
		},
	}
</script>

<style>
	.content{
		height: 2000rpx;
		width: 1600rpx;
	}
	movable-view {
		display: flex;
		align-items: center;
		justify-content: center;

		color: #fff;
	}
	
	movable-area {
		
		height: 2000rpx;
		width: 1600rpx;
		background-color: #F0F0F0;
		overflow: hidden;
	}
	
	.form-wrap {
		margin-bottom: 124upx;
		padding: 0 30upx;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;

		/deep/ .input-item {
			padding: 40upx 0;

			.left-text {
				font-size: 32upx;
			}

			.input-wrap {
				input {
					font-size: 32upx;
				}
			}
		}
	}
</style>
