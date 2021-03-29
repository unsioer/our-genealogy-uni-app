<template>
	<view>
		<uni-forms :rules="rules" :value="formData" ref="form" validate-trigger="bind" err-show-type="undertext">
			<uni-group title="基本信息" top="0">
				<uni-forms-item name="name" required label="用户名">
					<uni-easyinput type="text" :inputBorder="true" v-model="loginData.userName" placeholder="请输入用户名">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="password" required label="密码">
					<uni-easyinput v-model="loginData.password" type="password" placeholder="请输入密码"></uni-easyinput>
				</uni-forms-item>
			</uni-group>
		</uni-forms>
		<view>
			<button @click="login()">登录</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginData: {
					userName: '测试用户',
					password: 'ABCD',
				}
			}
		},
		methods: {
			login(){
				this.$store.commit('login',this.loginData)
				console.log('跳转至首页')
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style>
	.uni-input-wrapper {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		padding: 8px 13px;
		flex-direction: row;
		flex-wrap: nowrap;
		background-color: #FFFFFF;
	}

	.uni-input {
		height: 28px;
		line-height: 28px;
		font-size: 15px;
		padding: 0px;
		flex: 1;
		background-color: #FFFFFF;
	}
</style>
