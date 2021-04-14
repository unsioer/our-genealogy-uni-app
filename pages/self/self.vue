<template>
	<view>
		<view class="userback">
			<img class="head" src="static/logo.png">
			<view class="userName">用户名</view>
		</view>	
		
			
		<view id="button_div">
			<button type="primary" @click="login()">{{this.$store.state.hasLogin?'退出登录':'登录'}}</button>
		</view>	
		
		<view class="function">
			<view class="container">
				<view class = "divClass">
					<navigator url="selfInfo">
						<img src="static/logo.png">
					</navigator>
					<view class="text">个人信息</view>
				</view>
				<view class = "divClass">
					<navigator url="../familyTrees/treeList">
						<img src="static/logo.png">
					</navigator>
					<view class="text">家谱列表</view>
				</view>
				<view class = "divClass">
					<navigator url="myArticle">
						<img src="static/logo.png">
					</navigator>
					<view class="text">我的推送</view>
				</view>
				<view class = "divClass">
					<navigator url="selfMessage">
						<img src="static/logo.png">
					</navigator>
					<view class="text">我的消息</view>
				</view>
			</view>
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
	.container{
		background-color: #ffffff;
		display: flex;
		position: absolute;
		left: 44%;
		transform: translate(-50%, -50%);
	}
	
	.function{
		flex-direction: column;
		margin-top: 10%;
	}
	
	.divClass{
		margin-right: 5%;
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
