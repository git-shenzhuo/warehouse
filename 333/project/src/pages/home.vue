<template>
	<div>
		<div class="fiexd">
			<header>猫眼电影</header>
			<div class="nav">
				<span><em @click="loc">广州<em class="jt"></em></em></span>
				<div>
					<p @click="goto('/home/hot')" :class="this.$route.fullPath=='/home/hot' ? 'active' : ''">正在热映</p>
					<!--<router-link tag="p" class="hot" to="hot">正在热映</router-link>-->
					<p @click="goto('/home/future')" :class="this.$route.fullPath=='/home/future' ? 'active' : ''">即将上映</p>
				</div>
				<i></i>
			</div>
		</div>
		<router-view></router-view>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
			
		},
		created(){
			 console.log(this)
		},
		methods:{
			goto(path){
				this.$router.push({path})
				
				// console.log(this)
			},
			loc(){
				this.$router.push({name:'cinemacity',query:{path:'/home/hot'}})
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
em{
	font-style: normal;
}
	.fiexd{
		position: fixed;
		width: 100%;
		z-index: 10;
	}
	header {
		font-size: 18px;
		font-weight: 400;
		text-align: center;
		line-height: 50px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: #fff;
		background: #e54847;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	}
	
	.nav {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		height: 44px;
		-webkit-box-pack: justify;
		justify-content: space-between;
		background-color: #fff;
		border-bottom: 1px solid #ccc;
		span {
			flex: 1;
			font-size: 15px;
			color: #666;
			padding-left: 15px;
		}
		div {
			display: flex;
			flex: 2;
			justify-content: space-around;
			font-size: 15px;
			line-height: 44px;
			color: #666;
			font-weight: 700;
			height: 100%;
			p{
				padding: 0 10px;
				border-bottom: 2px solid transparent;
			}
			.active{
				color: #ef4238;
				border-color: #ef4238;
			}
		}
		i {
			height: 20px;
			flex: 1;
			padding-right: 15px;
			background: url('../img/search.png') no-repeat right;
			background-size: 20px;
			background-origin: content-box;
			text-align: right;
		}
		.jt{
			position: relative;
			top: 14px;
			left: 4px;
			width: 0;
			border: 5px solid;
			border-color: #b0b0b0 transparent transparent  transparent; 
		}
	}
</style>