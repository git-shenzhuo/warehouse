<template>
	<div class="scorll" ref="scorll">
		
		<div class="move-item" v-for="(item,index) in mymovie"  :id="item.id" @click="getmid(item.id)">
			<div class="imgdiv"><img :src="item.img.replace('w.h','128.180')" alt="" /></div>
			<div class="info">
				<p class="title">{{item.nm}}
					<i v-show="item.version" :class="item.version"></i>
					<i v-if="item.preShow" class="dy"><img src="../img/dy.png" alt="" /></i>
				</p>
				<span v-show="item.noscore">暂无评分</span>
				<span v-show="!item.noscore">
					<span v-show="item.want"><i class="score">{{(item.wish)}}</i>人想看</span>
				<span v-show="!item.want"><em style="font-style: normal;margin-right: 5px;">观众点评</em><i class="score">{{(item.sc).toFixed(1)}}</i></span>
				</span>
				<span class="star" v-show="item.star">主演：{{item.star}}</span>
				<span>{{item.showInfo}}</span>
			</div>
			<div :class="item.globalReleased ?'buy':'ybuy'">{{item.globalReleased?"购买":"预售"}}</div>
		</div>
		
	</div>
</template>

<script>

//	import {mapMutations,mapState} from 'vuex'
	
	
	export default {
		data() {
			return {
				movies: [],
				mymovie:[],
				num:0//第几次请求
			}
		},
		created() {
//			console.log(this.$store.state.count)
			this.ajax(0)
		},
		methods: {
			ajax(num) {
				this.$axios.get(this.$ip+'/movies', {
					params: {
						//第几次请求加载
						num,
					}
				}).then(({ data }) => {
					if(data=='ok'){return}
					num ? this.movies = data.coming : this.movies = data.movieList;
					//this.movies = data.moviesList
					let $this = this;
					this.movies.forEach(function(item, i) {
						if(item.globalReleased) {
							if(item.sc == 0) {
								item['noscore'] = true
							}
						} else {
							item['want'] = true
						}
						//循环取出添加到新数组
						$this.mymovie.push(item)
						
					})
				})
			},
			getmid(id){
				this.$store.commit('getid',id)
				this.$router.push({name:'movieindex',query: {id}})
			}
//			...mapMutations(['getmid'])

		},
		beforeUpdate() {
			this.$nextTick(function() { //渲染完成后触发事件
				let $this = this
				let isok = true
				window.onscroll = function() {
					if(!$this.$refs.scorll){return}
					let height = $this.$refs.scorll.offsetHeight - window.outerHeight
					let y = window.scrollY 		
					if(y > height) {
						if(isok){
							$this.num++
							console.log('ok')
							$this.ajax($this.num)
							isok = false;//防止一次请求过多
						}

					}
				}
			})
		},
		destroyed(){
			document.documentElement.scrollTop = 0
		}

}

</script>
<style lang="scss" scoped="scoped">
	img {
		width: 64px;
		height: 90px;
	}
	
	i {
		font-style: normal;
	}
	
	.scorll {
		margin-top: 95px;
		margin-bottom: 53px;
	}
	
	.move-item {
		height: 114px;
		position: relative;
		margin-left: 15px;
		margin-right: 15px;
		.imgdiv {
			margin-top: 12px;
			float: left;
		}
		.info {
			height: 114px;
			box-sizing: border-box;
			padding-bottom: 14px;
			border-bottom: 1px solid #f6f5ec;
			padding-top: 15px;
			margin-left: 74px;
			.title {
				width: 244px;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				font-size: 17px;
				color: #333;
				font-weight: 700;
				padding-right: 5px;
			}
			span {
				line-height: 15px;
				margin-top: 6px;
				display: block;
				font-size: 13px;
				color: #666;
				.score {
					font-weight: 700;
					color: #faaf00;
					font-size: 15px;
					/*padding-left: px;*/
				}
			}
			.title-span{
				width: 75%;
				white-space:nowrap;
				overflow:hidden;
				text-overflow:ellipsis;
			}
		}
		.buy {
			font-size: 12px;
			position: absolute;
			right: 20px;
			top: 50%;
			margin-top: -14px;
			width: 47px;
			height: 27px;
			line-height: 28px;
			text-align: center;
			box-sizing: border-box;
			background-color: #f03d37;
			color: #fff;
			border-radius: 4px;
			cursor: pointer;
		}
		.ybuy {
			font-size: 12px;
			position: absolute;
			right: 20px;
			top: 50%;
			margin-top: -14px;
			width: 47px;
			height: 27px;
			line-height: 28px;
			text-align: center;
			box-sizing: border-box;
			background-color: #3c9fe6;
			color: #fff;
			border-radius: 4px;
			cursor: pointer;
		}
		.star {
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			width: 245px;
		}
	}
	.dy {
		margin-left: 4px;
		padding-top: 2px;
		position: absolute;
		img {
			width: 23px;
			height: 14px;
			position: relative;
			top: 1px;
		}
	}
	
	.v3d {
		position: relative;
		top: 1px;
		background: url('../img/v3d.png');
		background-size: contain;
		background-repeat: no-repeat;
		height: 14px;
		width: 17px;
		display: inline-block;
		margin-top: 5px;
		-webkit-box-flex: 0;
		flex: 0 0 auto;
	}
	
	.imax {
		background-image: url('../img/3dimax.png');
		width: 42px;
	}
</style>