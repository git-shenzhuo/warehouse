<template>
	<div>
		<!-- :style="'background-image: url('+pro.img.replace('w.h','148.288')+')'"-->
		<div class="tu-box" @click="goto">
			<div class="setminwidth">
				<img :src="pro.img ? pro.img.replace('w.h','148.288') : ''" alt="">
			</div>
			<div class="right">
				<h4 class="name">{{pro.nm}}</h4>
				<p>{{pro.enm}}</p>
				<p v-if="pro.showst=='3'"><i class="sc">{{pro.sc ? pro.sc.toFixed(1) : ''}}</i></p>
				<p v-else><i class="sc">{{pro.wish}}</i>想看</p>
				<p>{{pro.cat}}</p>
				<p>{{pro.src}}/{{pro.episodeDur}}分钟</p>
				<p>{{pro.pubDesc}}</p>
			</div>
			<span v-if="$route.matched[0].path!='/movieintroduce'">&gt;</span>
		</div>
	</div>
</template>
<script>
	export default {
		props:['title'],
		created(){
		},
		data() {
			return {

				bg: '',
				pro:''
			}
		},
		methods:{
			goto(){
				let id = this.title.id
				if(id){
					this.$router.push({name:'movieintroduce',query:{id}})
				}
				
			}
		},
		watch:{
			title(data){
				this.pro = data
			}
		}
	}
</script>

<style lang='scss' scoped>
	.setminwidth{
		width: 110px;
		height: 150px;
	}
	.sc {
		font-size: 18px;
		font-weight: 700;
		color: #fc0;
	}
	
	.info {
		display: flex;
	}
	
	
	.tu-box {
		padding: 19px 30px 19px 15px;
		height: 190px;
		box-sizing: border-box;
		background-color: #777;
		display: flex;
		position: relative;
		img {
			width: 110px;
			height: 150px;
		}
		.right {
			width: 245px;
			margin-left: 14px;
			h4 {
				margin: 0;
				padding: 0;
				font-size: 20px;
				line-height: 20px;
				margin-top: 2px;
				color: #fff;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
			p {
				margin: 0;
				padding: 0;
				font-size: 12px;
				margin-top: 5px;
				color: #fff;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}
		span {
			position: absolute;
			right: 20px;
			font-size: 16px;
			top: 80px;
			color: #fff;
		}
	}
</style>