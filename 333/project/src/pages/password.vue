<template>
	<div>
		<div class="info">
			<input type="password" placeholder="请输入密码" v-model="pwd"/>
		</div>
		<div class="info">
			<input type="password" placeholder="请再次输入密码" v-model="cpwd"/>
		</div>
		<div class="getcode">
			<input type="button" name="" id="" value="注册" class="show" @click="next" />
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default{
		created(){
//			this.$store.commit('yzm','')
		},
		data(){
			return{
				pwd:'',
				cpwd:''
			}
		},
		methods:{
			next(){
				if(this.pwd&&this.cpwd){
					if(this.pwd!=this.cpwd){
						MessageBox.alert('两次密码不一致').then(action => {});
					}else{
						let $this = this
						//写入数据库
						this.$axios.post(this.$ip+'/reg',{
							phone:$this.$store.state.phone,
							password:$this.pwd,
						}).then(({data})=>{		
							let $this = this
							console.log($this.$store)
							if(data.code==1000){
								MessageBox.alert('注册成功！').then(action => {});
								$this.$router.replace({name:'mine'})
							}else{
								MessageBox.alert('注册失败！'+data.status).then(action => {});
							}
						})
					}
				}else{
					MessageBox.alert('请输入密码').then(action => {});
				}
			}
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
</style>