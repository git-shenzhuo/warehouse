<template>
	<div class="box">
		<mt-header :title="detailMovie.nm" class="mtHeader">
			<router-link :to="'/movieindex?id='+mid" slot="left">
				<mt-button icon="back1"></mt-button>
			</router-link>
		</mt-header>
		<movie-tu :title="detailMovie"/>
		<movie-ticket :dsc="detailMovie.dra"/>
		<movie-actor-list/>
		<movie-media :img="detailMovie.photos"/>
		<movie-extension/>
	</div>
</template>

<script>
	import movieTu from './movieTu.vue'
	import movieTicket from './movieTicket.vue'
	import movieActorList from './movieActorList.vue'
	import movieMedia from './movieMedia.vue'
	import movieExtension from './movieExtension.vue'

	export default {
		components: {
			movieTu,
			movieTicket,
			movieActorList,
			movieMedia,
			movieExtension
		},
		data() {
			return {
				detailMovie:'',
				mid:''
			}
		},
		created() {
			let mid = this.$route.query.id
			this.mid = mid
			console.log(mid)
			//得到数据
			this.$axios.get(this.$ip+'/list', {
				params: {
					mid
				}
			}).then(({ data }) => {
				this.detailMovie = data.detailMovie
			})
		},
//		watch:{
//			//监听从哪里跳过来
//			$route(to,from){
//				console.log(to)
//			}
//		},
		methods:{
			back(id){
				this.$router.push({name:'/movieindex',query:{id}})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.box {
		margin-bottom: 55px;
		.mtHeader {
			font-size: 18px;
			height: 50px;
			background-color: #e54847;
		}
	}
</style>