<template>
	<div id="footer">
		<router-link tag="div" to="/home/hot"  @click.native="select" :class='this.$route.matched[0].path==="/home"|| this.$route.matched[0].path==="/movieindex" || this.$route.matched[0].path==="/movieintroduce"?"changecolor":""'>
			<i class="mintui mintui-dianying1"></i>
			<span>电影</span>
		</router-link>
		<router-link tag="div" to="/cinemaindex"  @click.native="select" :class='this.$route.matched[0].path==="/cinemaindex"?"changecolor":""'>
			<i class="mintui mintui-dianyingyuan"></i>
			<span>影院</span>
		</router-link>
		<router-link tag="div" to="/mine"  @click.native="select" :class='this.$route.matched[0].path==="/mine"?"changecolor":""'>
			<i class="mintui mintui-me"></i>
			<span>我的</span>
		</router-link>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				active:'',
			}
		},
		methods:{
			select(){
				
			}
		},
		created(){
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
	#footer{
		background: #fff;
		display:flex;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		width: 100%;
		padding-top: 0.5rem;
		padding-bottom: 0.1rem;
		border-top: 1px solid #ccc;
	}
	span{
		font-size: 12px;
	}
	#footer>div{
		display:flex;
		flex-direction: column;
		text-align: center;
		width: 33.33%;
	}
	.changecolor{
		color: #f03d37;
	}
</style>