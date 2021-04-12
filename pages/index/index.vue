<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="item in imgList" :key="index">
					<view class="swiper-item">
						<image :src="item.img" class="swiper-item_img" mode="aspectFill" @click="showMore(item.id)" />
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- 循环卡片视图 -->
		<view class="example-body" v-for="item in infoData" :key="index">
			<uni-section :title="item.modified_time" type="line"></uni-section>
			<uni-card :is-shadow="false" :title="item.title" mode="style" :thumbnail="item.img_url"
				:extra="item.extra" note="true" @click="showMore(item.id)">
				<block slot="footer">
					<view class="footer-box">
						<view class=""><text class="footer-box__item" @click="like(item.id)">收藏</text></view>
						<view class=""><text class="footer-box__item" @click="showMore(item.id)">评论</text></view>
						<view class=""><text class="footer-box__item" @click="share(item.id)">分享</text></view>
					</view>
				</block>
			</uni-card>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				infoData: [{
						id: 1,
						title: '标题1',
						img_url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						extra: '描述1',
						modified_time: '1970-01-01'
					},
					{
						id: 2,
						title: '标题2',
						img_url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						extra: '描述2',
						modified_time: '1970-01-01'
					}
				],
				imgList: [{
						id: 1,
						img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
					},
					{
						id: 2,
						img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
					},
				]
			}
		},
		methods: {
			onLoad() {
				//获取imgList,即滚最上方动图片信息的API
				//获取infoData，即获得消息的API
			},
			showMore(id) {
				console.log("查看" + id + "更多信息")
				//转推送信息页
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
					console.log("用户" + this.$store.state.userInfo + "收藏了:" + id)
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
			share(id) {
				if (!this.$store.state.hasLogin) {
					console.log("没有登录")
					uni.showToast({
						title: '请先登录！',
						icon: 'none',
						duration: 2000
					});
				} else {
					console.log("用户" + this.$store.state.userInfo + "分享了:" + id)
					//分享API
				}
			},
		}
	}
</script>

<style>
	.swiper-item_img {
		width: 100%;
		height: 100%;
	}

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.swiper-item img {
		margin: auto;
		margin-top: 10%;

	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.uni-bg-red {
		background: #ff0000;
	}

	.uni-bg-green {
		background: #4cd964;
	}

	.uni-bg-blue {
		background: #007aff;
	}


	.info {
		position: absolute;
		right: 20rpx;
	}

	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}

	@charset "UTF-8";

	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url("~@/static/uni.ttf") format("truetype");
	}

	/* #endif */
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 15px;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 14px;
		line-height: 20px;
	}

	.example-info-text {
		font-size: 14px;
		line-height: 20px;
		color: #3b4144;
	}

	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 1px 0;
	}

	.example-box {
		margin: 12px 0;
	}

	.image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		height: 350rpx;
		overflow: hidden;
	}

	.image {
		/* #ifndef APP-NVUE */
		width: 100%;
		height: 100%;
		/* #endif */
		flex: 1;
	}

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
</style>
