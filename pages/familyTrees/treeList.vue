<template>
	<view>
		<view class="radioView">
		    <checkbox-group @change="checkChange">
		        <label class="radio">
		            <checkbox value="create" :checked="true" />我创建的
		        </label>
		        <label class="radio">
		            <checkbox value="manage" :checked="true" />我管理的
		        </label>
				<label class="radio">
				    <checkbox value="join" :checked="true" />我加入的
				</label>
		    </checkbox-group>
		</view>
		
		 <!-- <view class="uni-list">
            <checkbox-group @change="checkboxChange">
                <label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
                    <view>
                        <checkbox :value="item.value" :checked="item.checked" />
                    </view>
                    <view>{{item.name}}</view>
                </label>
            </checkbox-group>
        </view> -->
		
		<uni-table>
			<view v-for="item in infoData" :key="item.index" class="list_continer" @click="showMember(item._id)">
				<uni-tr>
					<uni-th align="center">
						<view>
							<img :src="item.avatar_url" mode="aspectFill">
						</view>
					</uni-th>
				</uni-tr>
				<uni-tr>
					<uni-th align="center">
						<text>{{item.name}}</text>
					</uni-th>
				</uni-tr>
			</view>
		</uni-table>
		
	</view>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				infoData: [{
						id: 1,
						name: '标题1',
						avatar_url: 'static/logo.png'
					},
					{
						id: 2,
						name: '标题2',
						avatar_url: 'static/logo.png'
					}
				],
				items: [{
				                        value: 'USA',
				                        name: '美国'
				                    },
				                    {
				                        value: 'CHN',
				                        name: '中国',
				                        checked: 'true'
				                    },
				                    {
				                        value: 'BRA',
				                        name: '巴西'
				                    },
				                ]
			}
		},
		methods: {
			onLoad() {
				//获取infoData，即获得消息的API
				if(this.$store.state.userInfo.access_token){
					console.log('尝试请求')
					axios.get("/api/family/all",{
							headers:{'Authorization': 'Bearer '+this.$store.state.userInfo.access_token}
						})
					.then(res => {
						console.log(res)
					    if (res.status === 200) {
							this.infoData=res.data
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
			showMember(familyid){
				uni.navigateTo({
					url:'/pages/familyTrees/memberList?familyid='+familyid
				})
			},
			checkChange: function (e) {
			    var values = e.detail.value;
				for(var i =0; i<values.length; i++){
					console.log(values[i])
				}
				//查看我创建的or管理的or加入的-API?传什么呢?
			}
			
		}
	}
</script>

<style>
	.list_continer {
		height: 150px;
		display:flex;
		flex-direction:column;
		align-items:center;
		text-align: center;
	}
	
	.img_class {
		width: 20upx;
		height: 20upx;
	}
	.radio{
		margin-right: 25px;
	}
	.radioView{
		margin-top: 10px;
		margin-left: 20px;
		height: 40px;
	}
</style>
