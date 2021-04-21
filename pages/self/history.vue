<template>
	<view>
		
		<view class="example-body" v-for="item in infoData" :key="index">
			<uni-card :title="item.title" :extra="item.modified_time" :thumbnail="item.thumbnail" @click="showMore(item.id)">
			    {{item.extra}}
			</uni-card>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoData: [
					{
						id: 1,
						thumbnail: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						modified_time: '2021-03-03',
						extra:'预览1',
						title:'标题1'
					},
					{
						id: 2,
						thumbnail: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						modified_time: '2021-03-03',
						extra:'预览2',
						title:'标题2'
					},
					{
						id: 3,
						thumbnail: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						modified_time: '2021-03-03',
						extra:'预览3',
						title:'标题3'
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
