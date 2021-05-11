<template>
	<view>
		<view class="radioView">
			<checkbox-group @change="checkChange">
				<label class="radio">
					<checkbox value="create" :checked="true" />我创建的
				</label>
				<label class="radio">
					<checkbox value="manage" :checked="true" />我管理的
				</label>
				<label class="radio">
					<checkbox value="join" :checked="true" />我加入的
				</label>
			</checkbox-group>
		</view>

		<uni-swipe-action>
			<uni-swipe-action-item v-for="(item, index) in infoData" :right-options="options" :key="item.id"
				@change="swipeChange($event, index)" @click="swipeClick($event, index)">
				<uni-row class="uni-row">
					<uni-col :span="8">
						<view>
							<img :src="item.avatar_url" class="img_class">
						</view>
					</uni-col>
					<uni-col :span="4" class="familyText">
						<text>
							{{item.name}}
						</text>
					</uni-col>
				</uni-row>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					text: '族谱图',
					style: {
						backgroundColor: '#FF7F00'
					}
				}, {
					text: '成员列表',
					style: {
						backgroundColor: '#007aff',
					}
				}],

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
				],
			}
		},

		methods: {
			onLoad() {
				//获取infoData，即获得消息的API
				if (this.$store.state.userInfo.access_token) {
					console.log('尝试请求')
					axios.get("/api/family/all", {
							headers: {
								'Authorization': 'Bearer ' + this.$store.state.userInfo.access_token
							}
						})
						.then(res => {
							console.log(res)
							if (res.status === 200) {
								this.infoData = res.data
								//this.Data=res.data
							} else {
								//
							}
						})
				} else {
					console.log("没有登录")
					uni.showToast({
						title: '请先登录！',
						icon: 'none',
						duration: 2000
					});
				}

			},
			
			showMember(familyId) {
				uni.navigateTo({
					url: '/pages/familyTrees/memberList?familyid=' + familyId
				})
			},

			showTreeChart(familyId) {
				uni.navigateTo({
					url: '/pages/familyTrees/familyTrees?familyid=' + familyId
				})
			},

			swipeChange(e, index) {

			},

			swipeClick(e, index) {
				console.log(e.content.text);
				if (e.content.text === '族谱图') {
					console.log(111);
					this.showTreeChart(this.infoData[index].id);
				} else if (e.content.text === '成员列表') {
					console.log(this.infoData[index].id);
					this.showMember(this.infoData[index].id);
				}
			},

			checkChange: function(e) {
				var values = e.detail.value;
				for (var i = 0; i < values.length; i++) {
					console.log(values[i])
				}
				//查看我创建的or管理的or加入的-API?传什么呢?
			}

		}
	}
</script>

<style>
	.img_class {
		width: 85px;
		height: 85px;
	}


	.uni-row {
		height: 100px;
		padding-left: 20px;
		padding-top: 5px;
		border-bottom: #C0C0C0 solid 1rpx;
	}


	.familyText {
		padding-top: 20px;
		font-size: 20px;
		text-align: center;
	}

	.radio {
		margin-right: 20px;
	}

	.radioView {
		margin-top: 10px;
		margin-left: 20px;
		height: 40px;
	}
</style>
