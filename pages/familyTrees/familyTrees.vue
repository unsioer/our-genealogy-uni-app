<template>
	<view>
		<scroll-view scroll-x scroll-y style="border: #0066CC solid 7rpx; border-radius: 15rpx;">
			<TreeChart :json="treeData" :class="{landscape: IsVertical}" @click-node="clickNode" />
		</scroll-view>
		<uni-fab :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
			:direction="direction" @trigger="trigger"></uni-fab>
		<My-modal v-model="value" :mData="data" :type="type" @onConfirm="onConfirm" @cancel="cancel" navMask>
		</My-modal>
	</view>
</template>

<script>
	import TreeChart from "../../components/TreeChart.vue";
	import MyModal from "@/components/My-modal/My-modal.vue"
	export default {
		data() {
			return {
				value:false,
				type:'genealogy',
				data:
				{title:'123',
				content: [{title:'编辑信息'},{title: '增加子孙'},{title:'增加配偶'},{title:'删除'}],
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
			clickNode: function(node) {
				// eslint-disable-next-line
				if(this.IsEdit === false)
				{
					console.log("111")
				}
				else
				{
					console.log("222")
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
					}
					else
					{
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
				
			popTap(node)
			{
				this.value = !this.value
				this.data.title = node.name
			}
		},
}
</script>

<style>

</style>
