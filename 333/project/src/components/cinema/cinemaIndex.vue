<template>
	<div>
		<mt-header class="header" title="影院"></mt-header>
		<keep-alive>
			<cinema-search :city='city' />
		</keep-alive>
		<cinema-class/>
		<cinema-list :cinemalist="cinemalist" />
	</div>
</template>

<script>
	import cinemaSearch from './cinemaSearch'
	import cinemaClass from './cinemaClass'
	import cinemaList from './cinemaList'
	// import cinemaCity from './cinemaCity'

	export default {
		data() {
			return {
				city: '',
				cinemalist: ''
			}
		},
		components: {
			cinemaSearch,
			cinemaClass,
			cinemaList,
			// cinemaCity
		},
		created() {
			this.city = this.$route.query.item;
			let num = 0
			this.$axios.get(this.$ip+'/cinema', {
				params: {
					//第几次请求加载
					num,
				}
			}).then(({ data }) => {
				this.cinemalist = data.cinemas;
				console.log(data)
			})
		},
		destroyed() {
			document.documentElement.scrollTop = 0
		}
	}
</script>

<style scoped>
	.header {
		height: 49.6px;
		font-size: 18px;
		font-weight: 400;
		text-align: center;
		line-height: 50px;
		color: #fff;
		background: #e54847;
	}
</style>