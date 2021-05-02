<template>
	<view>
		<!-- 循环卡片视图 -->
		<view class="example-body" v-for="item in infoData">
			<uni-section class="timeClass" :title="item.modified_time" type="line"></uni-section>
			<uni-card class="cardClass" :is-shadow="false" :title="item.title" mode="style" :thumbnail="item.thumbnail"
				:extra="item.extra" note="true" @click="showMore(item.id)">
				<block slot="footer">
					<view class="footer-box">
						<view class=""><text class="footer-box__item" @click="editor(item.id)">编辑</text></view>
						<view class=""><text class="footer-box__item" @click="deleteArticle(item.id)">删除</text></view>
					</view>
				</block>
			</uni-card>
		</view>
		<view>
			<uni-fab :content = "content" :pattern="pattern" horizontal="left" direction="horizontal"
			vertical="bottom" @trigger="trigger"></uni-fab>
		</view>
	</view>
</template>
<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				test: 'testtitle',
				infoData: [{
						id: 1,
						title: '标题1',
						thumbnail: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						extra: '描述1',
						modified_time: '2021-03-01'
					},
					{
						id: 2,
						title: '标题2',
						thumbnail: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
						extra: '描述2',
						modified_time: '2021-03-01'
					}
				],
				pattern: {
						color: '#7A7E83',
						backgroundColor: '#fff',
						selectedColor: '#007AFF',
						buttonColor: '#007AFF'
						},
				content:[
					{
						iconPath: '/static/api.png',
						selectedIconPath: '/static/apiHL.png',
						text: '新建推送',
						active: false
					},
					
				]
			}
		},
		methods: {
			onLoad() {
				//获取infoData，即获得消息的API
				if(this.$store.state.userInfo.access_token){
					axios.get("/api/articles/mine",{
						headers:{'Authorization': 'Bearer '+this.$store.state.userInfo.access_token}
					})
					.then(res => {
						console.log(res)
					    if (res.status === 200) {
							this.infoData=res.data
					    } else {
					        //
					    }
					})
				}
			},
			showMore(id) {
				console.log("查看" + id + "更多信息")
				//转推送信息页
			},
			editor(id) {
				console.log("用户" + this.$store.state.userInfo + "编辑了:" + id)
				//转编辑界面？？FIXME
			},
			deleteArticle(id) {
				console.log("用户" + this.$store.state.userInfo + "删除了:" + id)
				//删除我的推送API
			},
			trigger(e){
				console.log(e);
				if(e.index == 0){
					uni.navigateTo({
						url:'../article/editor'
					})
				}
			}
		}
	}
</script>

<style>
	.timeClass{
		height: 15px;
		align-items:center;
	}
	.footer-box {
		height: 10px;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: space-between;
		flex-direction: row;
		align-items:center;
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
