<template>
	<div>
		<div>状态：账号已登录</div>
		<span class="home" @click="gohome">回到首页？</span>
		<span class="eqit" @click="eqit">退出？</span>
	</div>
</template>

<script>
	export default{
		created(){
			if(!localStorage.getItem('user')){
				this.$router.replace({name:'mine'})
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			gohome(){
				this.$router.push({name:'hot'})
			},
			eqit(){
				localStorage.removeItem("user");
				this.$router.replace({name:'mine'})
			}
		}
	}
</script>

<style scoped="scoped">
	.home{
		color: #58bc58;
		margin-top: 10px;
	}
	.eqit{
		margin-top: 10px;
		color: red;
	}
</style>