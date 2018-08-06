<template>
	<div>
		<DetailBanner></DetailBanner>
		<DetailHeader></DetailHeader>
		<div style="height:50rem">
			
		</div>
	</div>
</template>

<script>
	import DetailBanner from './components/Banner'
	import DetailHeader from './components/Header'
	export default {
		name : "Detail",
		components : {
			DetailBanner,
			DetailHeader
		}
	}
</script>

<style>
</style>