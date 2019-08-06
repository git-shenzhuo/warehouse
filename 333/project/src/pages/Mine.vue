<template>
	<div id="account-login">
		<div class="navbar">
			<div class="nav-wrap-left mintui mintui-back1" @click="back">
			</div>
			<h2 class="nav-header">
					猫眼电影
				</h2>
		</div>
		<div class="nav_sss">
			<div class="noslide">
				<ul class="taban_no">
					<li class="normal-login-form" :class="cc==1?'select':''" @click="qiehuan(1)">美团账户登录</li>
					<li class="normal-login-form" :class="cc==2?'select':''" @click="qiehuan(2)">手机验证登录</li>
					<!--<li>手机验证登录</li>-->
				</ul>
			</div>

			<div class="list-in">
				<div class="list-in-1" v-show="cc==1">
					<div class="login-form">
						<div class="input-weak">
							<input type="text" class="input-weak-username" placeholder="账户名/手机号/Email" v-model="phone" />
						</div>
						<div class="input-password">
							<input type="password" class="input-weak-password" placeholder="请输入您的密码" v-model="password" />
						</div>
					</div>

					<div class="btn-wrapper">
						<div class="btn-block" @click="login">
							登录
						</div>
					</div>
				</div>

				<div class="list-in-2" v-show="cc==2">
					<div class="input-weak">
						<div class="weak-name">
							<input type="text" class="J-login-name" placeholder="请输入手机号" />
							<button class="J-login-buttom">获取验证码</button>
						</div>

					</div>

					<div class="J_input_sms">
						<input type="text" class="J_input_input_yan" placeholder="请输入短信验证码">
					</div>

					<div class="input-weak-pwss">
						<div class="inp-denglu">登录</div>
					</div>
				</div>
			</div>

			<div class="subline">
				<ul class="line_muall">
					<li class="subline_reg">
						<a @click="goto">立即注册</a>
					</li>
					<li class="subline_pall">
						<a href=""></a>
					</li>
					<li class="subline_pws">
						<a href="">找回密码</a>
					</li>
				</ul>
			</div>
			<div class="copyright">
				? 猫眼电影 客服电话：
				<a href="">
					400-670-5335
				</a>
			</div>

		</div>

	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default {
		created(){
			//判断是否登录
			if(localStorage.getItem("user")){
				this.$router.replace({name:'myhome'})
			}
		},
		data() {
			return {
				cc: 1,
				phone: '',
				password: ''
			}
		},
		methods: {
			qiehuan(type) {
				this.cc = type
			},
			goto() {
				this.$router.push({ name: 'reg' })
			},
			back() {
				this.$router.push({ name: 'hot' })
			},
			login() {
				console.log(1)
				if(!this.phone) {
					MessageBox.alert('账号不能为空').then(action => {});
					return
				} else {
					if(!this.password) {
						MessageBox.alert('密码不能为空').then(action => {});
					} else {
						//判断登录
						this.$axios.post(this.$ip+'/login',{
								phone:this.phone,
								password:this.password
							
						}).then(({data})=>{
							console.log(data)
							if(data.code==250){
								MessageBox.alert('账号或密码错误').then(action => {});
							}else{
								MessageBox.alert('登录成功').then(action => {});
								this.$router.replace({name:'myhome'})
								localStorage.setItem("user",this.phone)
							}
						})
					}
				}
			}
		},

	}
</script>

<style scoped="scoped">
	html,
	body {
		height: 100%;
	}
	
	#account-login {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: #f8f8f8;
	}
	
	.nav_sss {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: auto;
	}
	
	.navbar {
		display: flex;
		flex-direction: row;
		height: 3.01rem;
		background: #df2d2d;
	}
	
	.nav-wrap-left {
		display: flex;
		flex: 1;
		font-size: 20px;
		justify-content: center;
		align-items: center;
		color: #fff;
		background: #e54847;
	}
	
	.nav-header {
		flex: 9;
		font-size: 1rem;
		color: #fff;
		padding-right: 41.5px;
		font-weight: lighter;
		white-space: nowrap;
		text-align: center;
		height: 49.6px;
		background: #e54847;
		border-bottom: 1px solid #e54847;
		line-height: 3rem;
	}
	
	.noslide {
		display: flex;
		flex-direction: row;
		height: 3.293333rem;
		background: #fff;
	}
	
	.taban_no {
		display: flex;
		padding-left: 0.6rem;
		padding-right: 0.6rem;
		flex-direction: row;
		width: 100%;
		height: 3.2rem;
		line-height: 3.293333rem;
		text-align: center;
		font-size: .8rem;
	}
	
	.normal-login-form {
		flex: 1;
		-webkit-transition: left .2s ease-in;
	}
	
	.select {
		border-bottom: 2px solid #df2d2d;
	}
	
	.login-form {
		height: 6.666667rem;
		display: flex;
		flex-direction: column;
		background: #fff;
	}
	
	.input-weak {
		height: 3rem;
		line-height: 3rem;
		display: flex;
		border-bottom: 1px solid #d6d6d6;
	}
	
	.input-password {
		height: 3rem;
		line-height: 3rem;
		display: flex;
	}
	
	.input-weak-username {
		border: 0;
		display: flex;
		width: 100%;
		margin: 10px;
		background: #f8f8f8;
	}
	
	.input-weak-password {
		border: 0;
		width: 100%;
		margin: 10px;
		background: #f8f8f8;
	}
	
	.btn-wrapper {
		display: flex;
		height: 100%;
		background: #fff;
	}
	
	.btn-block {
		width: 100%;
		height: 2.666667rem;
		background: #df2d2d;
		color: #fff;
		font-size: 1.213333rem;
		line-height: 2.666667rem;
		text-align: center;
		margin: 10px;
	}
	
	.subline {
		background: #fff;
		display: flex;
		height: 1.333333rem;
		flex-direction: row;
	}
	
	.line_muall {
		height: 100%;
		display: flex;
		flex-direction: row;
		width: 100%;
	}
	
	.line_muall>li>a {
		font-size: 12px;
		color: #df2d2d;
	}
	
	.subline_reg {
		flex: 2;
		float: right;
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;
	}
	
	.subline_pws {
		flex: 2;
		float: left;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.subline_pall {
		flex: 6;
	}
	
	.copyright {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 2.666667rem;
		font-size: .713333rem;
		background: #fff;
		color: #333;
	}
	
	.copyright>a {
		font-size: .713333rem;
		color: #df2d2d;
	}
	
	.list-in-2 {
		background: #fff;
	}
	
	.input-weak {
		display: flex;
		flex-direction: row;
		height: 2.666667rem;
	}
	
	.weak-name {
		display: flex;
		width: 100%;
		height: 2.666667rem;
		margin: 0 .633333rem;
		font-size: .813333rem;
	}
	
	.J-login-name {
		flex: 7;
		margin: .2rem 0;
		border: none;
	}
	
	.J-login-buttom {
		flex: 3;
		color: #999;
		background: #dcdcdc;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: .266667rem;
		border-radius: .4rem;
	}
	
	.J_input_sms {
		height: 2.666667rem;
		display: flex;
		flex-direction: row;
	}
	
	.J_input_input_yan {
		width: 100%;
		margin: .433333rem .766667rem;
		border: none;
		background: #f8f8f8;
	}
	
	.input-weak-pwss {
		display: flex;
		flex-direction: row;
		height: 3.333333rem;
		color: #999;
	}
	
	.inp-denglu {
		width: 100%;
		margin: .333333rem .466667rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #d6d6d6;
		border-radius: .5rem;
	}
</style>