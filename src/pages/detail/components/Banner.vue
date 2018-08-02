<template>
	<div class="banner">
		<img class="banner-img" src="https://imgs.qunarzz.com/vc/33/99/f2/9b8c391353739013629ec85b12.jpg_224x85x92.jpg" />
		<div class="banner-info">
			<div class="banner-title">M张北坝上+草原天路大本营</div>
			<div class="banner-number"><span class="iconfont banner-icon">&#xe632;</span>39</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'DetailBanner'
	}
</script>

<style lang="stylus" scoped>
	.banner
		position: relative
		overflow: hidden
		height: 0
		padding-bottom: 39%
		.banner-img
			width: 100%
		.banner-info
			display: flex
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem
			color: #fff
			.banner-title
				flex: 1
				font-size: .30rem
			.banner-number
				line-height: .32rem
				height: .32rem
				margin-top: .1rem
				padding: 0 .4rem
				border-radius: .2rem
				background: rgba(0,0,0, .8)
				font-size: .24rem
				.banner-icon
					font-size: .24rem
		
</style>