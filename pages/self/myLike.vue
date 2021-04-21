<template>
	<view>
		
		<view class="example-body" v-for="item in infoData" :key = 'index'>
			<uni-card :title="item.title" :thumbnail="item.img_url" @click="showMore(item.id)">
			    于{{item.modified_time}}点赞了{{item.title}}
			</uni-card>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoData:[
					{
						id: 1,
						title: '标题1',
						img_url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						modified_time: '1970-01-01',
					},
					{
						id: 2,
						title: '标题2',
						img_url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						modified_time: '1970-01-01',
					},
					{
						id: 3,
						title: '标题3',
						img_url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						modified_time: '1970-01-01',
					},
					{
						id: 4,
						title: '标题4',
						img_url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						modified_time: '1970-01-01',
					},
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
