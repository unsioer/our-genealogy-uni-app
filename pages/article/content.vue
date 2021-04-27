<template>
	<view class="content">
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="nodes"></rich-text>
			</view>
			<!-- #ifndef MP-ALIPAY -->
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="strings"></rich-text>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>
<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				title: 'rich-text',
				nodes: [{
					name: 'div',
					attrs: {
						class: 'div-class',
						style: 'line-height: 60px; color: red; text-align:center;'
					},
					children: [{
						type: 'text',
						text: 'Hello&nbsp;uni-app!'
					}]
				}],
				strings: '<div style="text-align:center;"><img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/ceb770c0-5164-11eb-8a36-ebb87efcf8c0.png"/></div>'
			}
		},
		methods:{
			onLoad:async function(option){
				console.log("应该显示的文章id是："+option.id);
				
					console.log('尝试请求')
					axios.get("/api/article/"+option.id)
					.then(res => {
						console.log(res)
					    if (res.status === 200) {
							this.title=res.data.title
							this.strings=res.data.content
					    } else {
					    }
					})
				
			},
		}
	}
</script>

<style>
	.content {
		color: #555555;
		font-size: 32rpx;
	}
	
	.uni-padding-wrap{
		/* width:690rpx; */
		padding:0 30rpx;
	}
	
	.uni-title {
		font-size:30rpx;
		font-weight:500;
		padding:20rpx 0;
		line-height:1.5;
	}
	
	.uni-common-mt{
		margin-top:30rpx;
	}
</style>
