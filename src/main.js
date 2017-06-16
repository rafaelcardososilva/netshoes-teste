import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/js/utils.js'

Vue.use(Vuex);

export const store = new Vuex.Store({

	state:{
		itemsCarrinho: [],
	}
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
