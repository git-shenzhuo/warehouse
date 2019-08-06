<template>
	<div class="bg">
		<header>
			<i class="mintui mintui-back back" @click="back"></i>
			<span>猫眼电影</span>
			<i></i>
		</header>
		<div class="nav">
			<span class="active">输入手机号</span>&nbsp;&gt;
			<span :class="nowloc=='/reg/code'|| nowloc=='/reg/password'?'active':''">输入验证码</span>&nbsp;&gt;
			<span :class="nowloc=='/reg/password'?'active':''">设置密码</span>
		</div>
		<router-view :user="phone" :myyzm="yzm"></router-view>
		<div class="content" v-if="nowloc=='/reg'">

			<div class="info">
				<input type="number" name="" id="" placeholder="请输入您的手机号" v-model="phone" />
			</div>
			<div class="agree">
				<input type="checkbox" name="" id="" value="" v-model="isagree" />
				<span>我已阅读并同意</span>
				<i>《美团网用户协议》</i>
			</div>
			<div class="getcode">
				<input type="button" name="" id="" value="获取验证码" :class="isget?'show':''" @click="next" />
			</div>
			<div class="bottom"><span>© 猫眼电影 客服电话：</span><i>400-670-5335</i></div>
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default {

		data() {
			return {
				phone: '',
				isget: false,
				isagree: true,
				nowloc: '/reg',
				yzm:''
			}
		},
		created() {
			this.nowloc = this.$route.fullPath
			console.log(this.$route.name)
		},
		methods: {
			next() {
				if(!this.isagree) {
					MessageBox.alert('请同意协议').then(action => {});
				}
				if(this.isget && this.isagree) {
					//验证手机号是否注册
					this.$axios.get(this.$ip + '/reg', {
						params: {
							phone: this.phone
						}
					}).then(({ data }) => {
						console.log(data)
						if(data.code == 250) {
							MessageBox.alert('该手机号已经注册').then(action => {});
						} else {
							//请求验证码
							this.$axios.get(this.$ip+'/duanxin', {
								params:{
									phone: this.phone
								}
							}).then((data)=> {
								//把验证码存起来
								this.yzm = data.data
								this.$store.commit('yzm',data);
							})
							//记录手机号
							this.nowloc = '/reg/code';
							this.$store.commit('phone', this.phone)
							this.$router.replace({ name: 'code' })

						}
					})
				}
			},
			back() {
				if(this.$route.name == 'password') {
					this.$router.push({ name: 'code' })
				} else if(this.$route.name == 'code') {
					this.$router.push({ name: 'reg' })
				} else if(this.$route.name == 'reg') {
					this.$router.push({ name: 'mine' })
				}
			}
		},
		watch: {

			phone(to, from) {
				if(to.length == 11) {
					console.log(1)
					this.isget = true
				} else {
					this.isget = false
				}
			}
		},
		beforeRouteUpdate(to, from, next) {
			this.nowloc = to.fullPath
			console.log(to, from)
			next()
		}
	}
</script>

<style scoped="scoped" lang="scss">
	input {
		outline-style: none;
	}
	
	.bg {
		height: 100%;
		background: #f6f5ec;
	}
	
	header {
		display: flex;
		height: 50px;
		background: #e54847;
		line-height: 50px;
		i {
			flex: 1;
		}
		span {
			flex: 8;
			color: #FFFFFF;
			font-size: 18px;
			text-align: center;
		}
		.back {
			margin-left: 12px;
			color: #FFFFFF;
		}
	}
	
	.nav {
		background: #fff;
		height: 41.6px;
		line-height: 41.6px;
		text-align: center;
		border-bottom: 1px solid #d6d6d6;
		span {
			font-size: 14px;
			font-weight: 400;
		}
		.active {
			color: #df2d2d;
		}
	}
	
	.info {
		margin-top: 16px;
		input {
			border: none;
			padding-left: 20px;
			border: 1px solid #d6d6d6;
			border-right: 0;
			border-left: 0;
			width: 100%;
			height: 40px;
			box-sizing: border-box;
		}
	}
	
	.agree {
		margin-top: 10px;
		margin-left: 10px;
		overflow: hidden;
		input {
			float: left;
			width: 22.5px;
			height: 22.5px;
			color: red;
			background-color: #df2d2d;
		}
		span {
			margin-left: 5px;
			color: #333;
			font-size: 14px
		}
		i {
			color: #df2d2d;
			font-size: 14px
		}
	}
	
	.getcode {
		margin-top: 10px;
		text-align: center;
		input {
			font-size: 20px;
			border-radius: 5px;
			width: 95%;
			height: 47px;
			line-height: 47px;
			background-color: #dcdcdc;
			color: #999;
			border: 0;
		}
		.show {
			color: #fff;
			background-color: #df2d2d;
		}
	}
	
	.bottom {
		margin-top: 10px;
		text-align: center;
		font-size: 14px;
		span {
			margin-right: 5px;
			color: #333;
		}
		i {
			color: #df2d2d;
		}
	}
</style>