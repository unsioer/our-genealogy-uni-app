<template>
	<view class="mask" @tap="tapMask" :style="{backgroundColor:value?`rgba(0,0,0,${opacity})`:'rgba(0,0,0,0)'}"
		:class="!value?'':'mask-show'" @touchmove.stop.prevent>

		<block v-if="type=='genealogy'&&!detail">
			<view class="genealogy-view" @tap.stop>
				<view class="genealogy-title">{{mData.title}}</view>
				<view v-for="(item,index) in mData.content" :key="index" class="genealogy-box" @tap="tapConfirm(item)">
					<view>{{item.title}}</view>
				</view>
			</view>
		</block>

		<block v-if="detail">
			<view class="input-view" @tap.stop>
				<view class="input-title">{{detailTable.title}}</view>
				<view v-for="(item,index) in detailTable.content" :key="index" class="input-box">
					<view class="view">{{item.title}}</view>
					<block v-if="item.type=='number'">
						<input class="input" v-model="item.content" type="number" :password="item.type=='password'"
							:placeholder="item.placeholder" />
					</block>
					<block v-if="item.type=='password'">
						<input class="input" v-model="item.content" :password="item.type=='password'"
							:placeholder="item.placeholder" />
					</block>
					<block v-if="item.type=='digit'">
						<input class="input" v-model="item.content" type="digit" :password="item.type=='password'"
							:placeholder="item.placeholder" />
					</block>
					<block v-if="item.type=='idcard'">
						<input class="input" v-model="item.content" type="idcard" :password="item.type=='password'"
							:placeholder="item.placeholder" />
					</block>
					<block v-if="!item.type||item.type=='text'">
						<input class="input" v-model="item.content" type="text" :password="item.type=='password'"
							:placeholder="item.placeholder" />
					</block>
				</view>
				<view class="btn">
					<view class="confirm" @tap="tapInput">
						确认</view>
					<view class="cancel" @tap="tapCancel">
						取消</view>
				</view>

			</view>
		</block>

	</view>
</template>

<script>
	import TabMask from './tabMask.js'
	export default {
		props: {
			type: {
				type: String,
				default: 'default'
			},
			value: {
				type: Boolean,
				default: false
			},
			maskEnable: {
				type: Boolean,
				default: true
			},
			mData: {
				type: [Object, Array],
				default: () => {}
			},
			tabbarHeight: {
				type: Number,
				default: null
			},
			navHeight: {
				type: Number,
				default: null
			},
			opacity: {
				type: Number,
				default: 0.6
			},
		},
		data() {
			return {
				tabMask: null,
				detail: false,
				detailTable: {
					title: null,
					content: [{
							title: '123',
							type: 'number'
						},
						{
							title: '456',
							type: 'number'
						},
						{
							title: '789',
							type: 'number'
						},
						{
							title: '10',
							type: 'number'
						},
					],

				},
			}
		},
		mounted() {

			//#ifdef APP-PLUS
			this.tabMask = new TabMask({
				tabbarHeight: this.tabbarHeight,
				navHeight: this.navHeight,
				opacity: this.opacity,
				fn: this.tapMask
			})
			//#endif

		},
		methods: {
			tapCancel() {
				this.$emit('cancel')
				this.detail = false;
			},
			tapConfirm(item) {
				if (item.type == 'table') {
					console.log("1")
					this.detail = true
					this.detailTable.title = item.title
				} else if (item.type == 'button') {
					console.log("2")
					this.$emit('onConfirm', item)
					this.$emit('input', false)
				}
			},
			tapInput() {
				this.$emit('TableInput')
			},
			tapMask() {
				if (!this.maskEnable) return
				if (this.detail == false) // 非详情界面，才能点击mask关闭弹出界面
					this.$emit('input', false)

			}
		},
		watch: {
			value: {
				immediate: true,
				handler(newVal, oldVal) {
					//#ifdef APP-PLUS
					if (newVal) {
						this.tabMask.show()
					} else {
						if (this.tabMask != null)
							this.tabMask.hide()
					}
					//#endif
				}
			}
		}
	}
</script>

<style lang="scss">
	.mask {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 9999;
		transition: background 0.3s linear;
		display: flex;
		align-items: center;
		opacity: 0;
		visibility: hidden;
		justify-content: center;

		&.mask-show {
			visibility: visible;
			opacity: 1;
		}

	}

	.hover {
		background: #f2f2f2;
	}

	.genealogy-view {
		width: 600rpx;
		background-color: #fff;
		border-radius: 50rpx;

		.genealogy-title {
			font-size: 50rpx;
			font-style: italic;
			text-align: center;
			padding-top: 25rpx;
			padding-bottom: 70rpx;
		}

		.genealogy-box {
			height: 100rpx;
			padding: 10rpx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			text-align: center;
			font-size: 40rpx;
			opacity: 0.8;
		}
	}

	.input-view {
		width: 600rpx;
		font-weight: 400;
		font-size: 18px;
		background-color: #fff;
		border-radius: 50rpx;

		.input-title {
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom: 1px solid #ccc;
		}

		.input-box {
			display: flex;
			margin-bottom: 20rpx;
			margin-left: 20rpx;

			.view {
				margin-right: 20rpx;
				min-width: 150rpx;
			}

			.input {
				
				font-size: 18px;
			}
		}

		.btn {
			height: 100rpx;
			display: flex;
			flex-direction: row;
			border-top: 1px solid #ccc;

			.cancel {
				display: flex;
				flex: 1;
				justify-content: center;
				align-items: center;
				border-right: 1px solid #ccc;
			}

			.confirm {
				display: flex;
				flex: 1;
				justify-content: center;
				align-items: center;
				color: rgb(0, 122, 255);
			}
		}

	}
</style>
