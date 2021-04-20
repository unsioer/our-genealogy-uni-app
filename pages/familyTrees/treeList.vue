<template>
	<view>
		<uni-table>
			<view v-for="item in infoData" :key="item.index" class="list_continer" @click="showMember(item.id)">
				<uni-tr>
					<uni-th align="center">
						<view>
							<img :src="item.imgUrl" mode="aspectFill">
						</view>
					</uni-th>
				</uni-tr>
				<uni-tr>
					<uni-th align="center">
						<text>{{item.title}}</text>
					</uni-th>
				</uni-tr>
			</view>
		</uni-table>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoData: [{
						id: 1,
						title: '标题1',
						imgUrl: 'static/logo.png'
					},
					{
						id: 2,
						title: '标题2',
						imgUrl: 'static/logo.png'
					}
				]
			}
		},
		methods: {
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
