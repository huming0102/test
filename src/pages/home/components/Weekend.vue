<template>
<div>
	<div class="title">周末去哪儿</div>
	<ul>
		<li class="item border-bottom" v-for='item of weekendList' :key='item.id'>
			<div class="item-img-wrapper">
				<img class="item-img" :src="item.imgUrl"/>
			</div>
			<div class="item-info">
				<p class="item-title">{{item.title}}</p>
				<p class="item-desc">{{item.desc}}</p>
			</div>
		</li>
	</ul>
</div>
</template>

<script>
	export default {
		name : 'HomeWeekend',
		data () {
			return {
				weekendList : [{
					id: '001',
					imgUrl: 'https://imgs.qunarzz.com/vc/33/99/f2/9b8c391353739013629ec85b12.jpg_224x85x92.jpg',
					title: 'M张北坝上+草原天路大本营',
					desc: '北京出发'
				},{
					id: '002',
					imgUrl: 'https://imgs.qunarzz.com/vc/33/99/f2/9b8c391353739013629ec85b12.jpg_224x85x92.jpg',
					title: 'M张北坝上+草原天路大本营',
					desc: '北京出发'
				},{
					id: '003',
					imgUrl: 'https://imgs.qunarzz.com/vc/33/99/f2/9b8c391353739013629ec85b12.jpg_224x85x92.jpg',
					title: 'M张北坝上+草原天路大本营',
					desc: '北京出发'
				}]
			}
		}
	}
</script>

<style  lang='stylus' scoped>
.title
	line-height: .8rem
	background: #eee
	text-indent: .2rem
.item-img-wrapper
	height: 0
	overflow: hidden
	padding-bottom: 33.9%
	.item-img
		width: 100%
.item-info
	padding: .1rem
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
</style>