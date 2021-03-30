<template>
	<view>
		<uni-forms :rules="rules" :value="formData" ref="form" validate-trigger="bind" err-show-type="undertext">
			<uni-group title="基本信息" top="0">
				<uni-forms-item name="name" required label="用户名">
					<uni-easyinput type="text" :inputBorder="true" v-model="formData.name" placeholder="请输入用户名">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="age" required label="年龄">
					<input type="text" v-model="formData.age" class="uni-input-border"
						@blur="binddata('age', $event.detail.value)" placeholder="请输入年龄" />
				</uni-forms-item>
				<uni-forms-item name="birth" label="出生日期">
					<picker mode="date" v-model="formData.birth">
						<input class="uni-input-border" disabled="true" v-model="formData.birth"></input>
					</picker>
				</uni-forms-item>
				

			</uni-group>
			<uni-group title="详细信息">
				<uni-forms-item required name="sex" label="性别">
					<uni-data-checkbox v-model="formData.sex" :localdata="sex"></uni-data-checkbox>
				</uni-forms-item>
				<uni-forms-item name="remarks" label="备注">
					<uni-easyinput type="textarea" v-model="formData.remarks" :maxlength="20" placeholder="请输入备注">
					</uni-easyinput>
				</uni-forms-item>
			</uni-group>
			<uni-group title="验证">
				<uni-forms-item name="email" required label="邮箱">
					<uni-easyinput type="text" :inputBorder="true" v-model="formData.email" placeholder="请输入邮箱地址">
					</uni-easyinput>
					<button type="primary" @click="sendMail()">发送验证邮件</button>
				</uni-forms-item>
			</uni-group>
			<view>
				<button @click="resetForm">重置表单</button>
				<button @click="submitForm('form')">注册</button>
			</view>
		</uni-forms>
	</view>
</template>

<script>
	function getDate(type) {
		const date = new Date();

		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		if (type === 'start') {
			year = year - 10;
		} else if (type === 'end') {
			year = year + 10;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;

		return `${year}-${month}-${day}`;
	}

	export default {
		data() {
			return {
				isPassed: false,
				startDate: getDate('start'),
				endDate: getDate('end'),
				formData: {
					name: '',
					age: 18,
					email: '',
					sex: '0',
					checked: false,
					birth: ''
				},
				sex: [{
						text: '男',
						value: '0'
					},
					{
						text: '女',
						value: '1'
					},
					{
						text: '未知',
						value: '2'
					}
				],
				rules: {
					name: {
						rules: [{
								required: true,
								errorMessage: '请输入用户名'
							},
							{
								minLength: 3,
								maxLength: 15,
								errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符'
							}
						]
					},
					age: {
						rules: [{
								required: true,
								errorMessage: '请输入年龄'
							},
							{
								format: 'int',
								errorMessage: '年龄必须是数字'
							},
							{
								minimum: 18,
								maximum: 30,
								errorMessage: '年龄应该大于 {minimum} 岁，小于 {maximum} 岁'
							}
						]
					},
					birth: {
						rules: [{
							required: true,
							errorMessage: '请选择日期'
						}]
					},
					email: {
						rules: [{
							format: 'email',
							errorMessage: '请输入正确的邮箱地址'
						}]
					},
					checked: {
						rules: [{
							format: 'bool'
						}]
					},
					sex: {
						rules: [{
							format: 'string'
						}]
					}
				}
			}
		},
		methods: {
			change(name, value) {
				this.formData.checked = value
				this.$refs.form.setValue(name, value)
			},

			register() {
				uni.switchTab({
					url: '../index/index'
				})
			},

			sendMail() {
				this.isPassed = true;
			},

			submitForm(form) {
				this.$refs[form]
					.submit()
					.then(res => {
						console.log('表单的值：', res)
						if (this.isPassed == true) {
							uni.showToast({
								title: '验证成功'
							})
							this.register()
						} else {
							uni.show
							uni.showToast({
								icon: 'none',
								title: '请进行验证'
							})
						}
					})
					.catch(errors => {
						console.error('验证失败：', errors)
					})
			},

			//重置表单 。原生的组件input组件不能重置表单
			resetForm() {
				this.$refs.form.resetFields()
			},
			validateField(form) {
				this.$refs[form]
					.validateField(['name', 'email'])
					.then(res => {
						uni.showToast({
							title: '验证成功'
						})
						console.log('表单的值：', res)
					})
					.catch(errors => {
						console.error('验证失败：', errors)
					})
			},

			clearValidate(form, name) {
				if (!name) name = []
				this.$refs[form].clearValidate(name)
			}
		}
	}
</script>
<style>
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
