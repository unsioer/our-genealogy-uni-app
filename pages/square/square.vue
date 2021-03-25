<template>
	<view>
		<uni-section title="1970-01-01" type="line"></uni-section>
		<view class="example-body">
			<uni-card :is-shadow="false" title="X氏家谱" mode="style" thumbnail="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png" extra="描述" note="true">
				<block slot="footer">
					<view class="footer-box">
						<view class=""><text class="footer-box__item">收藏</text></view>
						<view class=""><text class="footer-box__item">评论</text></view>
						<view class=""><text class="footer-box__item">分享</text></view>
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
				
			}
		},
		methods: {
			
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
		width:690rpx;
		width: 100%;
	}
	
	.uni-common-mt{
		margin-top:60rpx;
		position:relative;
	}
	
	.info {
		position: absolute;
		right:20rpx;
	}
	
	.uni-padding-wrap {
	    width:550rpx;
	    padding:0 100rpx;
	}
</style>
