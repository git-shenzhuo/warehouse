<template>
	<div id="app">
		<!--显示路由-->
		<router-view/>
		<Footer v-if="isshow"></Footer>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Footer from './pages/Footer.vue'
	import MintUI from 'mint-ui'
	import 'mint-ui/lib/style.css'
	
	Vue.use(MintUI)

	export default {
		data() {
			return {
				isshow: true
			}
		},
		name: 'app',

		methods: {
			selected() {

			}
		},
		components: {
			Footer
		},
		watch: {
			$route(to, from) {
				if(to.name == 'detilesindex' || to.name == 'movieindex' || to.name == 'movieintroduce' || to.name == 'mine' || to.name == 'reg' || to.name == 'code' || to.name == 'password'|| to.name == 'myhome') {
					this.isshow = false
				} else {
					this.isshow = true
				}

			}
		},
		created() {
			let loc = this.$route.name
			if(loc == 'detilesindex' || loc == 'movieindex' || loc == 'movieintroduce' || loc == 'mine' || loc == 'reg' || loc == 'code' || loc == 'password' || loc == 'myhome') {
				this.isshow = false
			} else {
				this.isshow = true
			}
		}

	}
</script>

<style>
	html,
	body {
		height: 100%;
	}
	
	#app {
		display: flex;
		flex-direction: column;
		overflow: visible;
		height: 100%;
	}
	
	* {
		margin: 0;
		padding: 0;
		font-family: PingFangSC-Regular, Hiragino Sans GB, sans-serif;
	}
	
	ul li {
		list-style: none;
	}
	
	i {
		font-style: normal;
	}
	
	.mint-tab-item-label {
		color: #666;
		font-size: 14px;
	}
</style>