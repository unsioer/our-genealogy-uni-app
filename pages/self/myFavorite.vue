<template>
	<view>
		<view class="example-body" v-for="item in infoData">
			<uni-badge text="×" type="error" @click="deleteFavotite(item.id)" v-if="modify"></uni-badge>
			<uni-card :title="item.title" :thumbnail="item.img_url" :note="item.extra" 
			@click="showMore(item.id)">
			    于{{item.modified_time}}收藏了{{item.title}}
			</uni-card>
		</view>
		<movable-area class="fixed-box">
			<movable-view class="fixed-button">
				<button type="primary" @click="modifyFavorite()" v-if="modify == false">编辑</button>
				<button type="primary" @click="confirmFavorite()" v-if="modify">保存</button>
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modify: false,
				infoData:[
					{
						id: 1,
						title: '标题1',
						img_url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						modified_time: '1970-01-01',
						extra: '简要内容1'
					},
					{
						id: 2,
						title: '标题2',
						img_url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						modified_time: '1970-01-01',
						extra: '简要内容2'
					},
					{
						id: 3,
						title: '标题3',
						img_url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						modified_time: '1970-01-01',
						extra: '简要内容3'
					},
					{
						id: 4,
						title: '标题4',
						img_url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						modified_time: '1970-01-01',
						extra: '简要内容4'
					},
				]
			}
		},
		methods: {
			deleteFavotite(id){
				var that = this;
				uni.showModal({
					title: '删除收藏',
					content: '是否不再收藏？',
					success: function(res){
						if(res.confirm) {
							that.infoData.splice(id-1,1);
							console.log('用户取消收藏')
						} else {
							console.log('用户取消操作')
						}
					}
				})
				
			},
			
			modifyFavorite(){
				this.modify = true;
			},
			
			confirmFavorite(){
				this.modify = false;
			},
			showMore(id) {
				console.log("查看" + id + "更多信息")
				//转推送信息页
			},
		}
	}
</script>

<style>

.fixed-box {
	pointer-events: none; // 这里是重点，盒子可穿透操作
	width: 100vw;
	height: 100vh;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 100000;
}
.fixed-button {
	pointer-events: auto;
	width: max-content;
	height: auto;
	overflow: hidden;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
	left: 20rpx;
	top: 85vh;
}

</style>
