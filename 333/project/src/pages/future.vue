<template>
	<div class="future" ref="scorll">
		<div class="show">
			<p class="title">近期最受期待</p>
			<div class="container">
				<ul ref="imglist">
					<li v-for="(item,index) in qd" class="lis"  :id="item.id" @click="goto(item.id)">
						<img :src="item.img.replace('w.h','170.230')" alt="" />
						<h5 class="name">{{item.nm}}</h5>
						<p class="date">{{item.comingTitle}}</p>
						<i class="twant">{{item.wish}}人想看</i>
					</li>
				</ul>
			</div>
		</div>
		<!--遮住滚动条-->
		<p class="line"></p>
		<div class="container-out">
			<div class="sdate" v-for="itemdate in date">{{itemdate}}
				<div class="movie-item" v-for="item in mymovie" v-if="item.comingTitle==itemdate"  :id="item.id" @click="goto(item.id)">
					<div class="imgdiv"><img :src="item.img.replace('w.h','120.180')" /></div>
					<div class="info">
						<div>
							<span class="title" style="display: inline-block;">{{item.nm}}</span>
							<i v-show="item.version" :class="item.version"></i>
							<i v-if="item.preShow" class="dy"><img src="../img/dy.png" alt="" /></i>
						</div>
						<div><i class="people">{{item.wish}}</i><span class="want">人想看</span></div>
						<div><span class="star">主演：{{item.star}}</span></div>
						<div><span><i>{{item.rt}}</i>上映</span></div>
					</div>
					<div :class="item.showst==1?'ybuy wantlook':'ybuy'">{{item.showst==4?'想看':'预售'}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				qd: [],
				coming: [],
				date: [],
				mymovie:[],
				num:0
			}
		},
		created() {
			//近期期待
			this.$axios.get(this.$ip+'/qd', {

			}).then(({ data }) => {
				this.qd = data.coming;
			})
			//近期上映
			this.ajax('0')
		},
		computed: {
			getWidth() {

			}
		},
		mounted() {
			//设置ul长度
			this.$refs.imglist.style.width = 95 * 10 + 'px'
		},
		methods: {
			//请求数据
			ajax(num) {
				this.$axios.get(this.$ip+'/coming', {
					params:{
						num
					}
				}).then(({ data }) => {
					if(data=='ok'){return}
					let $this = this
					this.coming = data.coming
					//去重日期归类
					this.coming.forEach(function(item, i) {
						//					item.preShow = true
						//					item.version = 'v3d imax'
						if($this.date.indexOf(item.comingTitle) == -1) {
							$this.date.push(item.comingTitle)
						}
						//循环取出添加到新数组
						$this.mymovie.push(item)
					})
				})
			},
			goto(id){
				this.$router.push({name:'movieindex',query:{id}})
			}
		},
		beforeUpdate() {
			this.$nextTick(function() { //渲染完成后触发事件
				let $this = this
				let isok = true
				window.onscroll = function() {
					if(!$this.$refs.scorll) { return }
					let height = $this.$refs.scorll.offsetHeight - window.outerHeight
					let y = window.scrollY
					if(y > height) {
						if(isok){
							$this.num++
							console.log('ok')
							$this.ajax($this.num)
							isok = false
						}
						
					}
				}
			})
		},
		destroyed(){
			document.documentElement.scrollTop=0
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.future {
		margin-top: 95px;
		.container {
			padding-bottom: 25px;
			overflow: auto;
			ul {
				width: 100000px;
				height: 100px;
				li {
					width: 85px;
					/*position: absolute;*/
					padding-right: 10px;
					float: left;
					.name {
						margin: 0 0 3px;
						font-size: 13px;
						color: #222;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					.date {
						margin: 0;
						font-size: 12px;
						color: #999;
					}
				}
			}
			img {
				width: 85px;
				height: 115px;
			}
		}
	}
	
	.show {
		width: 90%;
		padding: 12px 0 0px 15px;
		overflow: hidden;
		.title {
			margin-top: 2px;
			margin-bottom: 18px;
			font-size: 14px;
			color: #333;
		}
	}
	
	.line {
		position: relative;
		margin-top: -10px;
		height: 10px;
		background: #f6f5ec;
	}
	
	.container-out {
		padding-top: 12px;
		padding-left: 15px;
		margin-bottom: 53px;
	}
	
	.movie-item {
		padding-top: 10px;
		padding-bottom: 10px;
		position: relative;
		overflow: hidden;
		.star{
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			width: 245px;
			position: relative;
			top: 2px;
		}
		img {
			width: 64px;
			height: 90px;
		}
		.imgdiv {
			float: left;
			margin-right: 10px;
		}
		.info {
			float: left;
		}
		.title {
			position: relative;
			top: 5px;
			font-size: 17px;
			color: #333;
			font-weight: 700;
			padding-right: 5px;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
		.people {
			color: #faaf00;
			font-size: 15px;
			font-weight: 600;
		}
		.want {
			/*position: relative;
			top: 0px;*/
		}
		span {
			font-size: 13px;
			margin-left: 2px;
			display: inline-block;
			color: #666;
		}
		.ybuy {
			font-size: 12px;
			position: absolute;
			right: 25px;
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
		.wantlook {
			background: #faaf00;
		}
	}
	
	.sdate {
		margin: 0;
		font-size: 14px;
		color: #333;
	}
	
	.lis {
		position: relative;
		.twant {
			position: absolute;
			bottom: 40px;
			color: #faaf00;
			font-size: 11px;
			font-weight: 600;
			left: 2px;
		}
	}
	
	.dy {
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
		margin-right: 3px;
	}
	
	.imax {
		background-image: url('../img/3dimax.png');
		width: 42px;
	}
</style>