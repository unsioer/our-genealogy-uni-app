<template>
	<view>
		<!-- 循环卡片视图 -->
		<view class="example-body" v-for="item in infoData" :key="item.index">
			<uni-card :title="item.type" :extra="item.modified_time" :thumbnail="item.thumbnail" @click="showMore(item.id)">
			    {{item.user}} {{item.type}}了你发表的: {{item.title}}
			</uni-card>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				test: 'testtitle',
				infoData: [{
						id: 1,
						type: '评论',
						thumbnail: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						modified_time: '2021-03-03',
						user:'小明',
						title:'我的家谱'
						
					},
					{
							id: 2,
							type: '点赞',
							thumbnail: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
							modified_time: '2021-03-02',
							user:'小红',
							title:'爷爷的80大寿'
							
						},
						{
								id: 3,
								type: '评论',
								thumbnail: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
								modified_time: '2021-03-01',
								user:'李明',
								title:'回家祭祖'
								
							},
				]
			}
		},
		methods: {
			onLoad() {
				//获取infoData，即获得消息的API
			},
			showMore(id) {
				console.log("查看" + id + "更多信息")
				//转推送信息页
			},
		}
	}
</script>

<style>
	
</style>
