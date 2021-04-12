<template>
	<view>
		<view class="userback">
			<img src="static/logo.png">
			<view class="userName">测试用户</view>
		</view>	
		<uni-forms ref="form" :value="userData" validate-trigger="bind" err-show-type="undertext" :rules="rules">
			<uni-group title="基本信息">
				<uni-forms-item name="age" label="年龄" v-if="modify">
					<uni-easyinput v-model="userData.age"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="age" label="年龄" v-if="modify===false">
					<uni-easyinput disabled  v-model="userData.age"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="birth" label="出生日期" v-if="modify">
					<uni-easyinput v-model="userData.birth"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="birth" label="出生日期" v-if="modify===false">
					<uni-easyinput disabled v-model="userData.birth"></uni-easyinput>
				</uni-forms-item>
			</uni-group>
			
		</uni-forms>
		<button type="default" @click="modifyInfo()" v-if="modify===false">修改个人信息</button>
		<button type="default" @click="confirmInfo()" v-if="modify">确定</button>
		<uni-forms>
			<uni-group title="绑定信息">
				<uni-forms-item name="email" label="邮箱">
					<uni-easyinput disabled v-model="userData.email"></uni-easyinput>
				</uni-forms-item>
				<button type="primary">解绑邮箱</button>
				<uni-forms-item></uni-forms-item>
				<uni-forms-item name="tel" label="手机号">
					<uni-easyinput disabled v-model="userData.tel"></uni-easyinput>
				</uni-forms-item>
				<button type="primary">解绑手机号</button>
			</uni-group>
		</uni-forms>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modify:false,
				userData:{
					age:'18',
					birth:'1990-01-01',
					email:'1@qq.com',
					tel:'123456789'
				}
			}
		},
		methods: {
			onLoad(){
				//获取用户信息
			},
			modifyInfo(){
				this.modify=true
			},
			confirmInfo(){
				this.modify=false
				//
			}
		}
	}
</script>

<style>
	.userback {
		height: 200px;
		background-color: #ffffff;
		background-repeat: no-repeat;
		background-size: 100%;
		text-align: center
	}
	.uni-input-border {
		padding: 0 10px;
		height: 35px;
		width: 100%;
		font-size: 14px;
		color: #666;
		border: 1px #e5e5e5 solid;
		border-radius: 5px;
		box-sizing: border-box;
	}
</style>
