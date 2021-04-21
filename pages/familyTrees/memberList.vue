<template>
	<view>
		<view class="userback" @click="changeAvatar()">
			<img class="head" src="static/logo.png">
			<view>{{familyData.name}}</view>
		</view>	
			
		<uni-section title="家族基本信息" type="line"></uni-section>
		<uni-table class="table">
			<uni-tr>
				<uni-th>
					<view class="text">名称</view>
				</uni-th>
				<uni-th>
					<view class="text2">{{familyData.name}}</view>
				</uni-th>
			</uni-tr>
			<uni-tr>
				<uni-th >
					<view class="text">人数</view>
				</uni-th>
				<uni-th>
					<view class="text2">{{familyData.num}}</view>
				</uni-th>
			</uni-tr>
		</uni-table>
		
		<uni-section title="成员信息" type="line"></uni-section>
		<uni-table>
			<uni-tr>
				<!-- <uni-th >
					<view class="text">成员名</view>
				</uni-th>
				<uni-th>
					<view class="text">角色</view>
				</uni-th> -->
			</uni-tr>
			<uni-tr v-for="item in familyData.member" :key="item.index">
				<uni-td >
					<view class="text" @click="showPerson(item.id)" >{{item.name}}</view>
				</uni-td>
				<uni-td >
					<view class="text" @click="showPerson(item.id)">{{item.role}}</view>
				</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				familyData:{
					name: '李式家族',
					num:10,
					member:[
						{
							id:1,
							name:'李老明',
							role:'族长'
						},
						{
							id:2,
							name:'李小明',
							role:'成员'
						},
					]
				},
			}
		},
		methods: {
			onLoad:function(option){
				console.log("应该显示的家族id是："+option.familyid);
				//获取用户信息
			},
			showPerson(userid){
				console.log("showPerson")
				uni.navigateTo({
					url:'/pages/self/selfInfoForOther?userid='+userid
				})
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
		margin-left: 130px;
	}
</style>
