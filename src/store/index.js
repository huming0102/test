import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		city: '上海'
	},
//	actions: {
//		changeCity (ctx, city) {
//			ctx.commit('changeCity', city)
//			//console.log(city)
//		}
//	},		//暂时用不到actions，先删掉
	mutations: {
		changeCity (state, city) {
			state.city = city
		}
	}
})
