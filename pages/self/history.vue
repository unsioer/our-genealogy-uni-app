<template>
	<view>
		
		<view id="button_div">
			<button type="primary" @click="deleteHistory()">删除历史记录</button>
		</view>	
		
		<view class="example-body" v-for="item in infoData">
			<uni-card :title="item.title" :extra="item.modified_time" :thumbnail="item.thumbnail" @click="showMore(item.id)">
			    {{item.extra}}
			</uni-card>
		</view>
		
		<uni-popup ref="popup" type="dialog">
		    <uni-popup-dialog title="确定删除历史记录？" :duration="2000" :before-close="open" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				open:false,
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
			deleteHistory(){
				this.$refs.popup.open()
			},
			showMore(id) {
				console.log("查看" + id + "更多信息")
				//转推送信息页
			},
			close(){  
				this.open=false
			},
			confirm(done,value){
				console.log("删除历史记录")
				//删除历史记录API
				done()
				this.open=false
			}
		}
	}
</script>

<style>
#button_div{
		width: 100%;
		position: fixed;
		bottom: var(--window-bottom) ;	
	}
</style>
