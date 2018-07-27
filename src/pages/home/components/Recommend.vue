<template>
<div>
	<div class="title">热销推荐</div>
	<ul>
		<li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
			<img class="item-img" :src="item.imgUrl"/>
			<div class="item-info">
				<p class="item-title">{{item.title}}</p>
				<p class="item-desc">{{item.desc}}</p>
				<button class="item-button">查看详情</button>
			</div>
		</li>
	</ul>
</div>
</template>

<script>
	export default {
		name : 'HomeRecommend',
		data () {
			return {
				recommendList : [{
					id: '001',
					imgUrl: 'https://imgs.qunarzz.com/p/tts4/1707/99/0ee2c73b20fa5502.jpg_180x120_dfd83cbb.jpg',
					title: 'M张北坝上+草原天路大本营',
					desc: '北京出发'
				},{
					id: '002',
					imgUrl: 'https://imgs.qunarzz.com/p/tts4/1707/99/0ee2c73b20fa5502.jpg_180x120_dfd83cbb.jpg',
					title: 'M张北坝上+草原天路大本营',
					desc: '北京出发'
				},{
					id: '003',
					imgUrl: 'https://imgs.qunarzz.com/p/tts4/1707/99/0ee2c73b20fa5502.jpg_180x120_dfd83cbb.jpg',
					title: 'M张北坝上+草原天路大本营',
					desc: '北京出发'
				}]
			}
		}
	}
</script>

<style lang='stylus' scoped>
.title
	margin-top:.2rem
	line-height: .8rem
	background: #eee
	text-indent: .2rem
.item
	overflow: hidden
	display: flex
	height: 1.9rem
	.item-img
		width: 2rem
		height: 1.7rem
		padding: .1rem
	.item-info
		flex: 1
		padding: .1rem
		min-width: 0
		.item-title
			line-height: .54rem
			font-size: .32rem
			overflow: hidden    /*现在显示字符*/
			white-space: nowrap
			text-overflow: ellipsis
		.item-desc
			line-height: .4rem
			font-size: .28rem
			color: #ccc
			overflow: hidden    /*现在显示字符*/
			white-space: nowrap
			text-overflow: ellipsis
		.item-button
			line-height: .44rem
			margin-top: .16rem
			background: #ff9300
			padding: 0 .2rem
			border-radius: .06rem
			color: #fff
</style>