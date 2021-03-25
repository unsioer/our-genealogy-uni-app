<template>
	<view class="content">
		<view class="userback">
			<img src="static/logo.png">
			<view class="userName">测试用户</view>
		</view>	
			
		<view id="button_div">
			<button type="primary">退出登录</button>
		</view>	
		
		<view class="function">
			<view class="container">
				<view class = "divClass">
					<img src="static/logo.png">
					<view class="text">个人信息</view>
				</view>
				<view class = "divClass">
					<img src="static/logo.png">
					<view class="text">家谱列表</view>
				</view>
				<view class = "divClass">
					<img src="static/logo.png">
					<view class="text">消息提醒</view>
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
		margin-right: 10%;
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
