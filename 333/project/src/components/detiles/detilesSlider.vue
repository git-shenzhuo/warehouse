<template>
	<div class="box">
		<div class="box-dingwei">
			<div>
				<p class="title">{{title.nm}}</p>
				<p class="dis">{{title.addr}}</p>
			</div>
			<i>
        <img src="../../assets/img/dingwei.png" alt />
      </i>
		</div>
		<div class="box-img">
			<div ref="reference" @touchmove="touchmove">
				<i v-for="(item,index) in show" :class="index==selectindex ?'huantu':''" @click='clickImg(item.id,index)'>
          <img :src="item.img.replace('w.h','148.207')" alt />
          <span></span>
        </i>
			</div>
		</div>
		<div class="box-xinxi">
			<p>
				<b>{{xinxi.nm}}
					<span v-if="xinxi.globalReleased !=true" >{{xinxi.wish}}<span style="font-size: 12px;" v-show="xinxi.globalReleased ==false">人想看</span></span>
					<span v-else>{{xinxi.sc}}<span style="font-size: 12px;">分</span></span>
				</b>
			</p>
			<p>{{xinxi.desc}}</p>
		</div>
	</div>
</template>
<script>
	// :class="item.id==selected?'huantu':''"
	export default {
		props: ['cid'],
		data() {
			return {
				selectindex:'0',
				selected: '',
				xinxi: '',
				show: '',
				title: ''
			};
		},

		methods: {
			touchmove() {
				let scrollLeft = this.$refs.reference.parentElement.scrollLeft
				
//				 console.log( Math.floor(scrollLeft/75))
				let sid = Math.floor(scrollLeft / 75)
				this.selectindex = sid
				//滑动切换
				this.xinxi = this.show[sid]
				//vuex传参
				this.$store.commit('selectmv',{id:this.xinxi.shows,timer:this.xinxi.dur})
			},
			clickImg(id,index) {
				this.selectindex = index;
				this.selected = id;
				this.xinxi = (this.show.filter(item => item.id == this.selected))[0]
				//vuex传参
				this.$store.commit('selectmv',{id:this.xinxi.shows,timer:this.xinxi.dur})
				// let left = (id - 1) * 75
				// this.$refs.reference.parentElement.style.marginLeft = -left + 'px';
			},
		},
		beforeUpdate() {
			this.$nextTick(function() {
				let len = this.show.length;
				this.$refs.reference.style.width = len * 75 + 360 + 'px'
			})
		},
		created() {
			console.log(this.$route.query.mid)
			let cid = this.cid;
			this.$axios.get(this.$ip + '/cinemades', {
				params: {
					cid,
				}
			}).then(({ data }) => {
				this.title = data.cinemaData
				this.show = data.showData.movies
				this.selected = data.showData.movies[0].id? data.showData.movies[0].id :''
				console.log(this.selected)
				this.xinxi = data.showData.movies[0]
				this.$store.commit('selectmv',{id:this.xinxi.shows,timer:this.xinxi.dur})
				console.log(this.title, this.show)
			})
		},
		computed:{
			sl(){
				return this.$store.state.scrollLeft
			}
		},
		mounted(){
			
		},
		watch:{
			sl(to,from){
				console.log(to)
			}
		}
		
	};
</script>

<style scoped>
	.stonefont {
		font-family: 'stonefont';
	}
	
	.box {
		height: 270px;
	}
	
	.box-dingwei {
		height: 42px;
		margin: 14px;
		display: flex;
	}
	
	.box-dingwei div {
		/* width: 240px; */
		flex: 5;
		border-right: 1px solid #ccc;
	}
	
	.box-dingwei i {
		flex: 1;
		text-align: center;
		line-height: 42px;
	}
	
	.box-dingwei img {
		width: 19px;
		height: 20px;
	}
	
	.box-dingwei p {
		margin: 0;
		width: 300px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	/*.box-dingwei p:nth-of-type(1) {
		font-size: 20px;
		line-height: 24px;
		font-weight: bolder;
	}*/
	/*.box-dingwei p:nth-of-type(2) {
		font-size: 14px;
		line-height: 18px;
		color: #ccc;
	}*/
	
	.box-img {
		height: 138px;
		background-color: #666;
		overflow: auto;
	}
	
	.box-img div {
		/* width: 400%; */
		height: 100%;
		background-color: #666;
	}
	
	.box-img div i {
		margin: 20px 10px 20px 0;
		width: 65px;
		height: 95px;
		display: inline-block;
		vertical-align: middle;
	}
	
	.box-img div img {
		width: 100%;
		height: 100%;
	}
	
	.box-img div i:nth-of-type(1) {
		margin-left: 180px;
	}
	
	.box-img div .huantu {
		border: 2px solid #fff;
		margin: 12px 10px 12px 0;
		width: 75px;
		height: 110px;
		position: relative;
	}
	
	.box-img div .huantu span {
		border: 6px solid transparent;
		border-top-color: #fff;
		position: absolute;
		bottom: -14px;
		left: 33px;
	}
	
	.box-xinxi {
		padding-top: 15px;
		text-align: center;
	}
	
	.box-xinxi p:nth-of-type(1) {
		font-size: 18px;
		line-height: 24px;
		margin-bottom: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.box-xinxi p:nth-of-type(1) span {
		color: #ffb400;
		font-size: 16px;
	}
	
	.box-xinxi p:nth-of-type(2) {
		font-size: 14px;
		line-height: 14px;
		color: #999;
		margin: 0;
		margin-top: 3px;
	}
	
	.title {
		font-size: 17px;
		line-height: 24px;
		font-weight: 700;
		color: #333;
	}
	
	.dis {
		margin-top: 2px;
		font-size: 13px;
		line-height: 18.5px;
		color: #999;
	}
</style>