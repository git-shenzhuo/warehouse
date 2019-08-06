import Vue from 'vue';
//引入vuerouter
import VueRouter from 'vue-router'

//使用
Vue.use(VueRouter)

//引入页面
import Home from '../pages/home.vue'
import Mine from '../pages/Mine.vue'
import Hot from '../pages/hot.vue'
import Future from '../pages/future.vue'
import Reg from '../pages/reg.vue'
import Code from '../pages/code.vue'
import Password from '../pages/password.vue'
import Myhome from '../pages/myhome.vue'
// 引入组件
import DetilesIndex from '../components/detiles/detilesIndex.vue'
import CinemaIndex from '../components/cinema/cinemaIndex.vue'
import CinemaCity from '../components/cinema/cinemaCity.vue'
import MovieIndex from '../components/movies/movieIndex.vue'
import MovieIntroduce from '../components/movies/movieIntroduce.vue'

//实例化并配置参数
let router = new VueRouter({
	routes: [{
			path: '/',
			redirect: {
				name: 'home'
			}
		},
		{
			path: '/home',
			redirect: {
				name: 'hot'
			}
		},
		{
			name: 'home',
			path: '/home',
			component: Home,
			children: [{
					name: 'hot',
					path: 'hot',
					component: Hot,
				},
				{
					name: 'future',
					path: 'future',
					component: Future
				},
			]
		},
		{
			name: 'mine',
			path: '/mine',
			component: Mine
		},
		{
			name: 'detilesindex',
			path: '/detilesindex',
			component: DetilesIndex
		}, {
			name: 'cinemaindex',
			path: '/cinemaindex',
			component: CinemaIndex,
		},
		{
			name: 'cinemacity',
			path: '/cinemacity',
			component: CinemaCity
		},
		{
			name: 'movieindex',
			path: '/movieindex',
			component: MovieIndex
		}, {
			name: 'movieintroduce',
			path: '/movieintroduce',
			component: MovieIntroduce
		},{
			path:'*',
			Redirect:'/home/hot'
		},{
			name:'reg',
			path:'/reg',
			component:Reg,
			children:[{
				name: 'code',
				path: 'code',
				component: Code
			},{
				name: 'password',
				path: 'password',
				component: Password
			}]
		},{
			name:'myhome',
			path:'/myhome',
			component:Myhome
		}
	]

})

//导出router实例，准备注入vue实例中
export default router