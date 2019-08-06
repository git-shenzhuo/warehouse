<template>
	<div class='detiles-box'>
		<mt-header :title="title" class="mtHeader">
			<router-link :to="back" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<!--<detiles-slider :detilesheader='slider' :show='show' />-->
		<detiles-slider :cid="cid"/>
		<detiles-list/>
		<!--<detiles-food :foodlist='list' />-->
	</div>
</template>

<script>
	// import Vue from 'vue'
	// import {Header} from 'mint-ui'
	// Vue.use(Header)

	import detilesSlider from './detilesSlider.vue'
	import detilesList from './detilesList.vue'
	import detilesFood from './detilesFood.vue'

	export default {
		props: ['id'],
		data() {
			return {
				cid:'',
				info: [],
				title: '',
				slider: '',
				show: '',
				back:''
			}
		},
		components: {
			detilesSlider,
			detilesList,
			detilesFood
		},
		computed: {},
		created() {
			
			console.log(this.$store.state.from)
			
			this.cid = this.$route.query.id;
			let cid = this.$route.query.id
			this.$axios.get(this.$ip+'/cinemades', {
				params: {
					cid
				}
			}).then(({ data }) => {
				this.info = data
				this.title = data.cinemaData.nm
//				this.slider = data.cinemaData
//				this.show = data.showData.movies
				console.log(data)
			})
			console.log(this.$route.query.id)
			
			if(this.$store.state.from != ''){
				this.back = this.$store.state.from
			}else{
				this.back = '/cinemaindex'
			}
			console.log(this.back)
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	.detiles-box {
		/* margin-bottom: 55px; */
		background-color: #fff;
		z-index: 100;
	}
	
	.mtHeader {
		height: 49.6px;
		line-height: 49.6px;
		color: #fff;
		background: #e54847;
		border-bottom: 1px solid #e54847;
		font-size: 1.2rem;
	}
</style>