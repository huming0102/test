<template>
	<div>
		<home-header :city='city'></home-header>
		<HomeSwiper :list ='swiperList'></HomeSwiper>
		<HomeIcons></HomeIcons>
		<HomeRecommend></HomeRecommend>
		<HomeWeekend></HomeWeekend>
	</div>
	
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
	export default {
		name : 'Home',
		components : {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		data () {
			return {
				city : '',
				swiperList: []
			}
		},
		methods : {
			getHomeInfo () {
				axios.get('/api/index.json')
				.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc (res) {
				res = res.data
				if( res.ret && res.data ){
					const data = res.data
					this.city = data.city
					this.swiperList = data.swiperList
				}
			}
		},
		mounted () {
			this.getHomeInfo()
		}
	}
</script>

<style>
	
</style>