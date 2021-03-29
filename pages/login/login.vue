<template>
	<view>
		<uni-forms ref="form" validate-trigger="bind" err-show-type="undertext">
			<uni-group title="基本信息" top="0">
				<uni-forms-item name="email" required label="邮箱">
					<uni-easyinput type="text" :inputBorder="true" v-model="loginData.email" placeholder="请输入邮箱">
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
	import axios from 'axios';
	export default {
		data() {
			return {
				loginData: {
					//userName: '测试用户',
					//password: 'ABCD',
				}
			}
		},
		methods: {
			login(){
				if (!(this.loginData.email && this.loginData.password)) {
					console.warn('账户名和密码不能为空')
					return;
				}
				this.loggingin = true;
				axios.post("/api/login", {email: this.loginData.email, password: this.loginData.password})
				.then(res => {
					console.log(res)
				    if (res.status === 200) {
				        uni.switchTab({
				        	url:'/pages/index/index'
				        })
				    } else {
				        //
				    }
				})
				.finally(() => {
				    this.loggingin = false;
				});
				
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
