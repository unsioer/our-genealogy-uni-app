<template>
	<view>
		<!-- 循环卡片视图 -->
		<view class="example-body" v-for="item in infoData" :key="index">
			<uni-section :title="item.modified_time" type="line"></uni-section>
			<uni-card :is-shadow="false" :title="item.title" mode="style" :thumbnail="item.thumbnail"
				:extra="item.extra" note="true" @click="showMore(item._id)">
				<block slot="footer">
					<view class="footer-box">
						<view class=""><text class="footer-box__item" @click="like(item._id)">点赞</text></view>
						<view class=""><text class="footer-box__item" @click="comment(item._id)">评论</text></view>
						<view class=""><text class="footer-box__item" @click="favourite(item._id)">收藏</text></view>
					</view>
				</block>
			</uni-card>
		</view>
	</view>
</template>
<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				test: 'testtitle',
				infoData: [{
						_id: 1,
						title: '标题1',
						thumbnail: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						extra: '描述1',
						modified_time: '2021-03-01'
					},
					{
						_id: 2,
						title: '标题2',
						thumbnail: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						extra: '描述2',
						modified_time: '2021-03-01'
					}
				]
			}
		},
		methods: {
			onLoad() {
				//获取infoData，即获得消息的API
				axios.get("/api/articles")
				.then(res => {
					console.log(res)
				    if (res.status === 200) {
						this.infoData=res.data
						//this.Data=res.data
				    } else {
				        //
				    }
				})
			},
			showMore(id) {
				console.log("查看" + id + "更多信息")
				//转推送信息页
				uni.navigateTo({
					url:'/pages/article/content?id='+id
				})
			},
			like(id) {
				if (!this.$store.state.hasLogin) {
					console.log("没有登录")
					uni.showToast({
						title: '请先登录！',
						icon: 'none',
						duration: 2000
					});
				} else {
					console.log("用户" + this.$store.state.userInfo + "点赞了:" + id)
					//收藏API
				}
			},
			comment(id) {
				if (!this.$store.state.hasLogin) {
					console.log("没有登录")
					uni.showToast({
						title: '请先登录！',
						icon: 'none',
						duration: 2000
					});
				} else {
					console.log("用户" + this.$store.state.userInfo + "评论了:" + id)
					//评论API
				}
			},
			favourite(id) {
				if (!this.$store.state.hasLogin) {
					console.log("没有登录")
					uni.showToast({
						title: '请先登录！',
						icon: 'none',
						duration: 2000
					});
				} else {
					console.log("用户" + this.$store.state.userInfo + "收藏了:" + id)
					//分享API
				}
			},
		}
	}
</script>

<style>
	
	.content-box {
		padding-top: 20rpx;
	}

	.content-box-text {
		font-size: 12px;
		line-height: 22px;
	}

	.footer-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: space-between;
		flex-direction: row;
	}

	.footer-box__item {
		align-items: center;
		padding: 2px 0;
		font-size: 12px;
		color: #666;
	}

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20rpx;
	}

	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
</style>
