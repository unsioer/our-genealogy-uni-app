<template>
	<view>
		<view class="userback" @click="changeAvatar()">
			<img class="head" src="static/logo.png">
			<view class="userName">{{userData.nickname}}</view>
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
				<uni-forms-item name="sex" label="性别">
					<uni-data-checkbox v-model="userData.sex" :localdata="sex" />
				</uni-forms-item>
			</uni-group>
			
		<button class="btn" type="default" @click="modifyInfo()" v-if="modify===false" >修改个人信息</button>
		<button class="btn" type="default" @click="confirmInfo()" v-if="modify">确定</button>
		
			<uni-group title="绑定信息">
				<uni-forms-item name="email" label="邮箱">
					<uni-easyinput disabled v-model="userData.email"></uni-easyinput>
				</uni-forms-item>
				<button class="btn" type="primary">解绑邮箱</button>
				<uni-forms-item></uni-forms-item>
				<uni-forms-item name="phone" label="手机号">
					<uni-easyinput disabled v-model="userData.phone"></uni-easyinput>
				</uni-forms-item>
				<button class="btn" type="primary">解绑手机号</button>
			</uni-group>
		</uni-forms>
	</view>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				modify:false,
				userData:{
					nickname: '用户',
					age:'18',
					sex:'0',
					birth:'1990-01-01',
					email:'1@qq.com',
					phone:'123456789'
				},
				sex:[
					{
						"value":'0',
						"text":"男",
						disabled: true
					},
					{
						"value":'1',
						"text":"女",
						disabled: true
					},
					{
						"value":'2',
						"text":"保密",
						disabled: true
					},
				]
			}
		},
		methods: {
			onLoad(){
				//获取用户信息
				if(this.$store.state.userInfo.access_token){
					axios.get("/api/user/",{
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
			modifyInfo(){
				this.modify=true
				this.sex[0].disabled = false;
				this.sex[1].disabled = false;
				this.sex[2].disabled = false;
			},
			confirmInfo(){
				this.modify=false
				this.sex[0].disabled = true;
				this.sex[1].disabled = true;
				this.sex[2].disabled = true;
			},
			changeAvatar(){
				console.log("更改头像")
				//更改头像API
			}
		}
	}
</script>

<style>
	.userback {
		height: 100px;
		background-color: #ffffff;
		background-repeat: no-repeat;
		background-size: 100%;
		text-align: center
	}
	.head{
		border-radius: 50%;
		
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
	.btn{
		width: 180px;
	}
</style>
