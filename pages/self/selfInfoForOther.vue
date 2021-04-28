<template>
	<view>
		<view class="userback" @click="changeAvatar()">
			<img class="head" src="static/logo.png">
			<view class="userName">{{userData.nickname}}</view>
		</view>	
		<uni-section title="基本信息" type="line"></uni-section>
		<uni-table class="table">
			<uni-tr>
				<uni-th >
					<view class="text">年龄</view>
				</uni-th>
				<uni-th >
					<view class="text2">{{userData.age}}</view>
				</uni-th>
			</uni-tr>
			<uni-tr>
				<uni-th >
					<view class="text">性别</view>
				</uni-th>
				<uni-th >
					<view class="text2">{{userData.sex}}</view>
				</uni-th>
			</uni-tr>
			<uni-tr>
				<uni-th >
					<view class="text">出生日期</view>
				</uni-th>
				<uni-th >
					<view class="text2">{{userData.birth}}</view>
				</uni-th>
			</uni-tr>
		</uni-table>
			
		<uni-section title="家族信息" type="line"></uni-section>
		<uni-table class="table" v-for="item in userData.family" :key="item.index">
			<uni-tr>
				</uni-tr>
			<uni-tr>
				<uni-th>
					<view class="text" @click="showFamily(item.id)">{{item.name}}</view>
				</uni-th>
				<uni-th>
					<view class="text" @click="showFamily(item.id)">{{item.role}}</view>
				</uni-th>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				userData:{
					nickname: '用户',
					age:'18',
					sex:'女',
					birth:'1990-01-01',
					family:[
						{
							id:'1',
							name:'家族1',
							role:'族长'
						},
						{
							id:'2',
							name:'家族2',
							role:'成员'
						},
					]
				},
			}
		},
		methods: {
			onLoad:function(option){
				//获取用户信息
				 console.log("应该显示的用户的id是:"+option.userid);
				
			},
			
			showFamily(familyid){
				console.log("show family")
				if(this.checkRole(familyid)){
					uni.navigateTo({
						url:'/pages/familyTrees/memberList?familyid='+familyid
					})
				}
			},
			
			//这个页面用于他人查看某个用户的信息，再试图查看该用户的家族时，可能没有权限，要判断
			checkRole(familyid){
				//查看权限API?
				if(1){
					console.log("没有权限")
					uni.showToast({
						title: '没有权限！',
						icon: 'none',
						duration: 2000
					});
					return false
				}
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
	.text{
		align: center;
		font-size: 30rpx;
		margin-left: 30px;
	}
	.text2{
		align: center;
		font-size: 30rpx;
		margin-left: 90px;
	}
</style>
