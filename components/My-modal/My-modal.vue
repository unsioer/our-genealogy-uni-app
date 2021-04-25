<template>
	<view class="mask" @tap="tapMask" :style="{backgroundColor:value?`rgba(0,0,0,${opacity})`:'rgba(0,0,0,0)'}" :class="!value?'':'mask-show'" @touchmove.stop.prevent>
		
		<block v-if="type=='genealogy'">
			<view class="genealogy-view" @tap.stop>
				<view class="genealogy-title">{{mData.title}}</view>
				<view v-for="(item,index) in mData.content" :key="index" class="genealogy-box" @tap="tapConfirm(item)">
					<view>{{item.title}}</view>
				</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	import TabMask from './tabMask.js'
	export default{
		props:{
			type:{
				type:String,
				default:'default'
			},
			value:{
				type:Boolean,
				default:false
			},
			maskEnable:{
				type:Boolean,
				default:true
			},
			mData:{
				type:[Object, Array],
				default:()=>{}
			},
			tabbarHeight:{
				type:Number,
				default:null 
			},
			navHeight:{
				type:Number,
				default:null
			},
			opacity:{
				type:Number,
				default:0.6
			},
		},
		data(){
			return{
				tabMask:null
			}
		},
		mounted() {

			//#ifdef APP-PLUS
			this.tabMask = new TabMask({
				tabbarHeight:this.tabbarHeight,
				navHeight:this.navHeight,
				opacity:this.opacity,
				fn: this.tapMask
			})
			//#endif
			
		},
		methods:{
			tapCancel(){
				this.$emit('cancel')
				this.$emit('input',false)
			},
			tapConfirm(item){
				this.$emit('onConfirm',item)
				this.$emit('input',false)
			},
			tapMask(){
				if(!this.maskEnable) return
				this.$emit('input',false)

			}
		},
		watch:{
			value:{
				immediate:true,
				handler(newVal,oldVal){ 
					//#ifdef APP-PLUS
					if(newVal) {
						this.tabMask.show()
					}else{
						if(this.tabMask != null)
						this.tabMask.hide()
					}
					//#endif
				}
			}
		}
	}
</script>

<style lang="scss">
	.mask{
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
		&.mask-show{
			visibility:visible;
			opacity: 1;
		}
		
	}
	.hover{
		background: #f2f2f2;
	}
	.genealogy-view{
		width: 600rpx;
		background-color: #fff;
		border-radius: 50rpx;
		.genealogy-title{
			font-size: 50rpx;
			font-style: italic;
			text-align: center;
			padding-top: 25rpx;
			padding-bottom: 70rpx;
		}
		.genealogy-box{
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
</style>
