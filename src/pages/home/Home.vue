<template>
	<div>
		<!--<home-header :city='city'></home-header>		//ajax（外部）传递数据的--> 
		<home-header></home-header>		<!--//前端存储数据-->
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
				//city : '',	//ajax传递过来的数据。删除city进行前端存储数据
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
					//this.city = data.city			//改成前端存储数据，通过ajax传递过来的city数据都删掉
					this.swiperList = data.swiperList
					this.icontList = data.icontList
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
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