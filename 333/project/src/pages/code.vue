<template>
	<div>
		<div class="info">
			<input type="text" placeholder="请输入短信中的验证码" v-model="code" />
		</div>
		<div class="getcode">
			<input type="button" name="" id="" value="提交验证码" class="show" @click="next" />
		</div>
		<div class="bottom"><span>© 猫眼电影 客服电话：</span><i>400-670-5335</i></div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default {
		props:['user','myyzm'],
		data() {
			return {
				code: '',
				yzm:''
			}
		},
		methods: {
			next() {
				if(!this.code) {
					MessageBox.alert('请输入验证码').then(action => {
					});
				}else{
					//检验验证码
					if(this.myyzm==this.code && this.user== this.$store.state.phone){
						this.$store.commit('nowloc','/reg/password')
						this.$router.replace({name:'password'})
					}else{
						MessageBox.alert('验证码错误').then(action => {});
					}
				}
			}
		},
		created(){
			this.yzm = this.$store.state.yzm.data
			//超过时间验证码失效
//			setTimeout(function(){
//				this.$store.commit('yzm','')
//			},1000*60*5)
		}
	}
</script>

<style scoped="scoped" lang="scss">

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