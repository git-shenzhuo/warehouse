
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		count:0,
		mid:'',
		selectmv:'',
		timer:'',
		from:'',
		scrollLeft:'',
		//注册时流程位置
		nowloc:'',
		phone:'',
		yzm:''
	},
	mutations:{
		increment(state) {
			state.count++
		},
		getid(state,id) {
			state.mid = id
		},
		selectmv(state,obj){
			state.selectmv = obj.id
			state.timer = obj.timer//电影时间
		},
		from(state,from){
			state.from = from
		},
		scrollLeft(state,scrollLeft){
			state.scrollLeft = scrollLeft
		},
		nowloc(state,nowloc){
			state.nowloc = nowloc
		},
		phone(state,phone){
			state.phone = phone
		},
		yzm(state,yzm){
			state.yzm = yzm
		}
	}
})

export default store;

