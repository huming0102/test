<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		    <swiper-slide v-for='item of swiperList' :key='item.id'>
		    	<img class="swiper-img" :src="item.imgUrl" />
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		    
	  	</swiper>
  	</div>
</template>

<script>
	export default {
		name : 'HomeSwiper',
		data () {
			return {
				swiperOption : {
					pagination: '.swiper-pagination',
					loop: true
					
				},
				swiperList : [{
					id : '001',
					imgUrl : 'http://img1.qunarzz.com/piao/fusion/1806/c7/ab25030019e67a02.jpg_890x330_0ebfc81f.jpg'
				},{
					id : '002',
					imgUrl : 'http://img1.qunarzz.com/piao/fusion/1806/cf/eb8c2dfa395d7e02.jpg_890x330_e5cedf73.jpg'
				}
				]
			}
		}
	}
</script>

<style lang='stylus' scoped>
	.wrapper
		overflow: hidden
		width: 100%
		height: 18px
		padding-bottom: 31.25%
		.swiper-img
			width: 100%
</style>