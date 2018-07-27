<template>
<div class="icons">
	<swiper>
		<swiper-slide v-for='(page,index) of pages' :key='index'>
			<div class="icon" v-for='item of page' :key='item.id'>
				<div class="icon-img">
					<img class="icon-img-content" :src="item.imgUrl" />
				</div>
				<p class="icon-desc">{{item.desc}}</p>
			</div>
		</swiper-slide>
	</swiper>
	
	
</div>
</template>

<script>
	export default {
		name : 'HomeIcons',
		data () {
			return {
				iconList: [{
					id: '001',
					imgUrl: 'https://imgs.qunarzz.com/p/p21/201302/28/19290b08f52f61ec93835fbb.jpg_144x96_3c9d6cfb.jpg',
					desc: '景点门票景点门票景点门票'
				},{
					id: '002',
					imgUrl: 'https://img1.qunarzz.com/travel/d6/1807/e8/48147da9cb7101b5.jpg_200x150x95_76168745.jpg',
					desc: '滑雪季节'
				},{
					id: '003',
					imgUrl: 'https://img1.qunarzz.com/travel/d6/1807/e8/48147da9cb7101b5.jpg_200x150x95_76168745.jpg',
					desc: '泡温泉'
				},{
					id: '004',
					imgUrl: 'https://img1.qunarzz.com/travel/d6/1807/e8/48147da9cb7101b5.jpg_200x150x95_76168745.jpg',
					desc: '动植物园'
				},{
					id: '005',
					imgUrl: 'https://imgs.qunarzz.com/p/p21/201302/28/19290b08f52f61ec93835fbb.jpg_144x96_3c9d6cfb.jpg',
					desc: '景点门票'
				},{
					id: '006',
					imgUrl: 'https://img1.qunarzz.com/travel/d6/1807/e8/48147da9cb7101b5.jpg_200x150x95_76168745.jpg',
					desc: '滑雪季节'
				},{
					id: '007',
					imgUrl: 'https://img1.qunarzz.com/travel/d6/1807/e8/48147da9cb7101b5.jpg_200x150x95_76168745.jpg',
					desc: '泡温泉'
				},{
					id: '008',
					imgUrl: 'https://img1.qunarzz.com/travel/d6/1807/e8/48147da9cb7101b5.jpg_200x150x95_76168745.jpg',
					desc: '动植物园'
				},{
					id: '009',
					imgUrl: 'https://img1.qunarzz.com/travel/d6/1807/e8/48147da9cb7101b5.jpg_200x150x95_76168745.jpg',
					desc: '动植物园'
				}]
			}
		},
		computed: {
			pages () {
				const pages = []
				this.iconList.forEach((item,index) => {
					const page = Math.floor(index / 8)		//数据除以8
					if(!pages[page]) {
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>

<style lang='stylus' scoped>
	.icons >>> .swiper-container
		height: 0
		padding-bottom: 50%
		
	.icon
		position: relative
		overflow: hidden
		float:left
		width: 25%
		height: 0
		padding-bottom: 25%
		
		.icon-img
			position: absolute
			top: 0
			left: 0
			right: 0
			bottom: .44rem
			.icon-img-content
				height:100%
		.icon-desc
			position: absolute
			left: 0
			right: 0
			bottom: 0
			height: .44rem
			line-height: .44rem
			color: #333
			text-align: center
			overflow: hidden    /*现在显示字符*/
			white-space: nowrap
			text-overflow: ellipsis
</style>