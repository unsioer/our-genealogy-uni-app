<template>
	<view>
		
		<view class="example-body" v-for="item in infoData">
			<uni-card :title="item.title" :note="item.extra" 
			@click="showMore(item.id)">
			    于{{item.modified_time}}评论了{{item.title}}
			</uni-card>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page:1,
				pageSize:5,
				infoData:[
					{
						id: 1,
						title: '标题1',
						modified_time: '1970-01-01',
						extra: '评论简要内容1'
					},
					{
						id: 2,
						title: '标题2',
						modified_time: '1970-01-01',
						extra: '评论简要内容2'
					},
					{
						id: 3,
						title: '标题3',
						modified_time: '1970-01-01',
						extra: '评论简要内容3'
					},
					{
						id: 4,
						title: '标题4',
						modified_time: '1970-01-01',
						extra: '评论简要内容4'
					},
				],
			}
		},
		methods: {
			showMore(id) {
				console.log("查看" + id + "更多信息")
				//转推送信息页
			},
		}
	}
</script>

<style>

</style>
