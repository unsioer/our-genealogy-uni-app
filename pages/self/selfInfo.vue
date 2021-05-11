<template>
	<view>
		<view class="userback" @click="changeAvatar()">
			<img class="head" :src="avatarImgurl">
			<view class="userName">{{userData.nickname}}</view>
		</view>

		<uni-popup ref="popup" type="center">
			<view class="pop_class">
				<uni-title title="修改头像" align="center" color="#555555"></uni-title>
				<view class="userback">
					<img class="head" :src="preImgurl">
				</view>
				<button class="btn" type="primary" v-if="preview==false" @click="cinema()">拍照</button>
				<button class="btn" type="primary" v-if="preview==false" @click="insertImg()">从相册选择</button>
				<button class="btn" type="primary" v-if="preview" @click="uploadImg()">确定</button>
				<button class="btn" type="default" @click="cancel()">取消</button>
			</view>
		</uni-popup>

		<uni-forms ref="form" :value="userData" validate-trigger="bind" err-show-type="undertext" :rules="rules">
			<uni-group title="基本信息">
				<uni-forms-item name="age" label="年龄" v-if="modify">
					<uni-easyinput v-model="userData.age"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="age" label="年龄" v-if="modify===false">
					<uni-easyinput disabled v-model="userData.age"></uni-easyinput>
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

			<button class="btn" type="default" @click="modifyInfo()" v-if="modify===false">修改个人信息</button>
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
	import {
		pathToBase64,
		base64ToPath
	} from '../../js_sdk/mmmm-image-tools/index.js'
	export default {
		data() {
			return {
				avatarImgurl: 'static/logo.png',
				preImgurl: 'static/logo.png',
				preview: false,
				modify: false,
				userData: {
					nickname: '用户',
					age: '18',
					sex: '0',
					birth: '1990-01-01',
					email: '1@qq.com',
					phone: '123456789'
				},
				sex: [{
						"value": '0',
						"text": "男",
						disabled: true
					},
					{
						"value": '1',
						"text": "女",
						disabled: true
					},
					{
						"value": '2',
						"text": "保密",
						disabled: true
					},
				],
				rules: {
					age: {
						rules: [{
								required: true,
								errorMessage: '请输入年龄'
							},
							{
								format: 'int',
								errorMessage: '年龄必须是数字'
							}
						]
					},
					birth: {
						rules: [{
							required: true,
							errorMessage: '请输入出生日期'
						}, ]
					}
				}
			}
		},
		methods: {
			onLoad() {
				//获取用户信息
				if (this.$store.state.userInfo.access_token) {
					axios.get("/api/user/", {
							headers: {
								'Authorization': 'Bearer ' + this.$store.state.userInfo.access_token
							},
						})
						.then(res => {
							console.log(res)
							if (res.status === 200) {
								this.userData = res.data;
							} else {
								//
							}
						})
				}
			},
			modifyInfo() {
				this.modify = true
				this.sex[0].disabled = false;
				this.sex[1].disabled = false;
				this.sex[2].disabled = false;
			},
			confirmInfo() {
				this.modify = false
				this.sex[0].disabled = true;
				this.sex[1].disabled = true;
				this.sex[2].disabled = true;
			},
			changeAvatar() {
				console.log("更改头像")
				this.preview = false;
				this.$refs.popup.open();
				//更改头像API
			},
			cancel() {
				this.preImgurl = this.avatarImgurl;
				this.$refs.popup.close();
			},
			insertImg() {
				this.preImgurl = this.avatarImgurl;
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album'],
					success: (res) => {
						this.preImgurl = res.tempFilePaths[0];
						this.preview = true;
						console.log("图片显示成功");
						var base64file = '';
						pathToBase64(res.tempFilePaths[0])
							.then(base64 => {
								base64file = base64;
								console.log(base64)
							})
							.catch(error => {
								console.error(error)
							})
						// var fileReader = new FileReader();
						// fileReader.readAsDataURL(res.tempFiles[0])
						// fileReader.onLoad = function(){
						// 	base64file = fileReader.result;
						// }
						axios.post("/api/file/json", {
								headers: {
									'Authorization': 'Bearer ' + this.$store.state.userInfo.access_token
									//'content-type': 'application/json',
								},
								filename: res.tempFiles[0].name,
								content: base64file,
							})
							.then(res => {
								console.log(res)
								if (res.status === 200) {
									console.log("图片上传成功" + res.data.filename);
									this.avatarImgurl = '/api/file/' + res.data.filename;
									
								} else {
									//
								}
							})
					}
				})
			},
			uploadImg() {
				// if(if(this.$store.state.userInfo.access_token)){
				// 	axios.post("/api/file",{
				// 		'Authorization': 'Bearer ' + this.$store.state.userInfo.access_token,
				// 	})
				// }
				//console.log(this.$store.state.userInfo.access_token)
				//this.avatarImgurl = this.preImgurl;
				this.$refs.popup.close();
			},
			cinema() {
				console.log("拍照");
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['camera'],
					success: (res) => {
						console.log(res);
						this.preImgurl = res.tempFilePaths[0];
					}
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
		text-align: center;
		margin-top: 10px;
	}

	.head {
		border-radius: 50%;
		height: 75px;
		width: 75px;
	}

	.pop_class {
		width: 400rpx;
		height: 700rpx;
		background-color: #ffffff;
		background-repeat: no-repeat;
		background-size: 100%;
		text-align: center;
		border: 5px #b7b7b7 solid;
		border-radius: 5px;
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

	.btn {
		margin-top: 10px;
		width: 180px;
	}
</style>
