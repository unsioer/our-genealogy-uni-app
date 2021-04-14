<template>
	<view class="content">
		<movable-area scale-area>
			<movable-view direction="all" scale scale-min="0.5" scale-max="10">
				<TreeChart :json="treeData" @click-node="clickNode" />
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
	import TreeChart from "../../components/TreeChart.vue";
	export default {
		data() {
			return {
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
		onLoad() {

		},
		components: {
			TreeChart
		},
		methods: {
			clickNode: function(node) {
				// eslint-disable-next-line
				console.log(node)
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	movable-view {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 500rpx;
		width: 500rpx;
		background-color: #007AFF;
		color: #fff;
	}

	movable-area {
		height: 1000rpx;
		width: 100%;
		background-color: #838383;
		overflow: hidden;
	}

	.max {
		width: 500rpx;
		height: 500rpx;
	}
</style>
