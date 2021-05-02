<template>
	<view>
		<view class="userback" @click="changeAvatar()">
			<img class="head" :src="familyData.avatar_url" height="75" width="75">
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
					<view class="text2">{{familyData.members.length}}</view>
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
			<uni-tr v-for="item in familyData.members" :key="item.index">
				<uni-td >
					<view class="text" @click="showPerson(item._id)" >{{item.name}}</view>
				</uni-td>
				<uni-td >
					<view class="text" @click="showPerson(item._id)">{{item.role}}</view>
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
					avatar_url: 'static/logo.png',
					name: '李式家族',
					num:10,
					members:[
						{
							_id:1,
							name:'李老明',
							role:'族长'
						},
						{
							_id:2,
							name:'李小明',
							role:'成员'
						},
					]
				},
			}
		},
		methods: {
			onLoad:async function(option){
				console.log("应该显示的家族id是："+option.familyid);
				//获取用户信息
				if(this.$store.state.userInfo.access_token){
					console.log('尝试请求')
					axios.get("/api/family/"+option.familyid,{
							headers:{'Authorization': 'Bearer '+this.$store.state.userInfo.access_token}
						})
					.then(async res => {
						console.log(res)
					    if (res.status === 200) {
							this.familyData=res.data;
							let idArr=[];
							for(var i=0;i<res.data.members.length;i++)
							{
								idArr.push(res.data.members[i]);
							}
							let urlArr=idArr.map(element => axios.get("/api/person/"+element,{
										headers:{'Authorization': 'Bearer '+this.$store.state.userInfo.access_token}
									}));
							axios.all(urlArr)
							.then(axios.spread((...arg) => {
								Array.from([...arg]).forEach((element, index) => {
									console.log(element)
									this.familyData.members[index]={};
									//this.familyData.members[i]=res.data.members[i];
									this.familyData.members[index]._id=element.data._id;
									this.familyData.members[index].name=element.data.name;
								});
							})
							
							);
							console.log('新版')
							console.log(this.familyData)
							//this.Data=res.data
					    } else {
					        //
					    }
					})
				}else{
					console.log("没有登录")
					uni.showToast({
						title: '请先登录！',
						icon: 'none',
						duration: 2000
					});
				}
				
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
