<template>
	<view>
		<uni-table>
			<view v-for="item in infoData" :key="item.index" class="list_continer" @click="showMember(item._id)">
				<uni-tr>
					<uni-th align="center">
						<view>
							<img :src="item.avatar_url" mode="aspectFill">
						</view>
					</uni-th>
				</uni-tr>
				<uni-tr>
					<uni-th align="center">
						<text>{{item.name}}</text>
					</uni-th>
				</uni-tr>
			</view>
		</uni-table>
		
	</view>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				infoData: [{
						id: 1,
						name: '标题1',
						avatar_url: 'static/logo.png'
					},
					{
						id: 2,
						name: '标题2',
						avatar_url: 'static/logo.png'
					}
				]
			}
		},
		methods: {
			onLoad() {
				//获取infoData，即获得消息的API
				if(this.$store.state.userInfo.access_token){
					console.log('尝试请求')
					axios.get("/api/family/all",{
							headers:{'Authorization': 'Bearer '+this.$store.state.userInfo.access_token}
						})
					.then(res => {
						console.log(res)
					    if (res.status === 200) {
							this.infoData=res.data
							//this.Data=res.data
					    } else {
					        //
					    }
					})
				}else{
					console.log("没有登录")
					uni.showToast({
						title: '请先登录！',
						icon: 'none',
						duration: 2000
					});
				}
				
			},
			showMember(familyid){
				uni.navigateTo({
					url:'/pages/familyTrees/memberList?familyid='+familyid
				})
			}
		}
	}
</script>

<style>
	.list_continer {
		height: 150px;
		display:flex;
		flex-direction:column;
		align-items:center;
		text-align: center;
	}
	
	.img_class {
		width: 20upx;
		height: 20upx;
	}
</style>
