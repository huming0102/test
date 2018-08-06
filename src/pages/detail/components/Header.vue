<template>
	<div>
		<router-link tag='div' to='/' class="header-abs" v-show='showAbs'>
			<div class="iconfont header-abs-back">&#xe624;</div>
		</router-link>
		<div class="header-fixed" v-show='!showAbs' :style="opacityStyle">
			<router-link to='/'>
				<div class="iconfont header-fixed-back">&#xe624;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
	export default {
		name : 'DetailHeader',
		data () {
			return {
				showAbs : true,
				opacityStyle : {
					opacity: 0
				}
			}
		},
		methods : {
			handleScroll () {
				const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				//console.log(top)
				if (top > 60) {
					let opacity = top / 140
					opacity = opacity > 1 ? 1 : opacity
					this.opacityStyle = {
						opacity
					}
					this.showAbs = false
				} else {
					this.showAbs = true
				}
				//console.log(document.documentElement.scrollTop)
			}
		},
		activated () {
			//console.log(111)
			window.addEventListener('scroll', this.handleScroll)
		},
		deactivated () {
			window.removeEventListener('scroll', this.handleScroll)	//解绑scroll
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'
	.header-abs
		position: absolute
		top: .2rem
		left: .2rem
		width: .6rem
		height: .6rem
		line-height: .6rem
		border-radius: .4rem
		text-align: center
		background : rgba(0,0,0,.8)
		.header-abs-back
			color: #fff
			font-size: .3rem
	.header-fixed
		position: fixed
		top: 0
		left: 0
		right: 0
		height: .86rem
		line-height: .86rem
		text-align: center
		color: #fff
		background: $bgColor
		font-size: .32rem
		z-index: 999
		.header-fixed-back
			position: absolute
			top: 0
			left: 0
			width: .64rem
			text-align: center
			font-size: .4rem
			color: #fff
</style>