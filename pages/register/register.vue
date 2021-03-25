
<template>
	<view>
		<uni-forms :rules="rules" :value="formData" ref="form" validate-trigger="bind" err-show-type="undertext">
			<uni-group title="基本信息" top="0">
				<uni-forms-item name="name" required label="用户名">
					<uni-easyinput type="text" :inputBorder="true" v-model="formData.name" placeholder="请输入用户名"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="age" required label="年龄">
					<input type="text" v-model="formData.age" class="uni-input-border" @blur="binddata('age', $event.detail.value)" placeholder="请输入年龄" />
				</uni-forms-item>
				<uni-forms-item required name="birth" label="出生日期">
					<uni-datetime-picker timestamp v-model="formData.birth"></uni-datetime-picker>
				</uni-forms-item>
				
			</uni-group>
				<uni-group title="详细信息">
					<uni-forms-item required name="sex" label="性别">
						<uni-data-checkbox v-model="formData.sex" :localdata="sex"></uni-data-checkbox>
					</uni-forms-item>
					<uni-forms-item name="remarks" label="备注">
						<uni-easyinput type="textarea" v-model="formData.remarks" :maxlength="20" placeholder="请输入备注"></uni-easyinput>
					</uni-forms-item>
				</uni-group>
			<view>
				<button  @click="submitForm('form')">校验表单</button>
				<button  @click="resetForm">重置表单</button>
				<button>注册</button>
			</view>
		</uni-forms>
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				formData: {
					name: '',
					age: 18,
					email: '',
					sex: '0',
					remarks: '',
					checked: false,
					weight: 120,
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
					weight: {
						rules: [{
								format: 'number',
								errorMessage: '体重必须是数字'
							},
							{
								minimum: 50,
								maximum: 300,
								errorMessage: '体重应该大于 {minimum} 斤，小于 {maximum} 斤'
							}
						]
					},
					birth: {
						rules: [
							{
								required: true,
								errorMessage: '请选择时间'
							}
						]
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
 
			submitForm(form) {
				this.$refs[form]
					.submit()
					.then(res => {
						console.log('表单的值：', res)
						uni.showToast({
							title: '验证成功'
						})
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