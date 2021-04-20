<template>
	<view>
		<view class="userback">
			<img class="head" src="static/logo.png">
			<view class="userName">{{userData.nickname}}</view>
		</view>	
		
			
		<view id="button_div">
			<button type="primary" @click="login()">{{this.$store.state.hasLogin?'退出登录':'登录'}}</button>
		</view>	
		
		<view class="function">
		<uni-table>
			<uni-tr></uni-tr>
			<uni-tr>
				<uni-th align="center">
					<view class = "divClass">
						<navigator url="selfInfo">
							<img src="static/logo.png">
						</navigator>
						<view class="text">个人信息</view>
					</view>
				</uni-th>
				<uni-th align="center">
					<view class = "divClass">
						<navigator url="../familyTrees/treeList">
							<img src="static/logo.png">
						</navigator>
						<view class="text">家谱列表</view>
					</view>
				</uni-th>
				<uni-th align="center">
					<view class = "divClass">
						<navigator url="myArticle">
							<img src="static/logo.png">
						</navigator>
						<view class="text">我的推送</view>
					</view>
				</uni-th>
				<uni-th align="center">
					<view class = "divClass">
						<navigator url="selfMessage">
							<img src="static/logo.png">
						</navigator>
						<view class="text">我的消息</view>
					</view>
				</uni-th>
			</uni-tr>
			<uni-tr>
				<uni-td align="center">
					<view class="divClass">
						<navigator url="myFavorite">
							<img src="static/logo.png">
						</navigator>
						<view class="text">我的收藏</view>
					</view>
				</uni-td>
				<uni-td align="center">
					<view class="divClass">
						<navigator url="myConnment">
							<img src="static/logo.png">
						</navigator>
						<view class="text">我的评论</view>
					</view>
				</uni-td>
				<uni-td align="center">
					<view class="divClass">
						<navigator url="myLike">
							<img src="static/logo.png">
						</navigator>
						<view class="text">我的点赞</view>
					</view>
				</uni-td>
				<uni-td align="center">
					<view class="divClass">
						<navigator url="history">
							<img src="static/logo.png">
						</navigator>
						<view class="text">历史记录</view>
					</view>
				</uni-td>
			</uni-tr>
		</uni-table>
		</view>
		
	</view>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				userData:{
					nickname: '用户',
				}
			}
		},
		methods: {
			onLoad(){
				//获取用户信息
				console.log(this.$store.state.userInfo.access_token)
				if(this.$store.state.userInfo.access_token){
					axios.get("/api/user",{
						headers:{'Authorization': 'Bearer '+this.$store.state.userInfo.access_token}
					})
					.then(res => {
						console.log(res)
					    if (res.status === 200) {
							this.userData=res.data
					    } else {
					        //
					    }
					})
				}
			},
			login(){
				if(this.$store.state.hasLogin){//已经登录状态，退出
					this.$store.commit('logout',this.$store.state.userInfo)
					uni.switchTab({
						url:'/pages/index/index'
					})
				}
				else{//未登录状态，转登录
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}
			}
			
		}
	}
</script>

<style>
	.function{
		width: 100%;
		text-align: center;
		margin-top: 10%;
	}
	
	.container{
		background-color: #ffffff;
		display: flex;
		position: absolute;
		left: 44%;
		transform: translate(-50%, -50%);
	}
	
	.divClass{
		
	}
	
	.userback {
		height: 200px;
		background-color: #ffffff;
		background-repeat: no-repeat;
		background-size: 100%;
		text-align: center
	}

	.userback img {
		margin: auto;
		margin-top: 10%;
	}
	.head{
		border-radius: 50%;
	}
	.userName{
		color: #111111;
		font-size: 0.9rem;
	}
	#button_div{
		width: 100%;
		position: fixed;
		bottom: var(--window-bottom) ;	
	}
</style>
