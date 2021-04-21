//引用Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//实例store对象
const store = new Vuex.Store({
	state: {
		hasLogin:true,        //用户是否登录
		userInfo:{}//用户信息	
	},
	mutations: {
		// 登录
		login(state,user){
		//登录状态为已登录
		state.hasLogin = true
		state.userInfo = user
		//储存用户数据到本地
		uni.setStorage({
				key: 'userInfo',
				data: user,
			});
			console.log('登陆成功')
			console.log(state.hasLogin,state.userInfo)
		},
				
		// 退出登录
		logout(state,user){
		     
			//登录状态为未登录
			state.hasLogin = false
			state.userInfo = {
		   }
			//删除本地储存
			uni.removeSavedFile({
				key: 'userInfo',
			})
			console.log('退出登录')
			console.log(state.hasLogin,state.userInfo)
		}
	},
})

//导出store对象
export default store

//export default const store或者export const store会报错
