<template>
	<div id="app">
		<carrinho :itemsCarrinho="itemsCarrinho" :exibeCarrinho="exibeCarrinho"></carrinho>
		<div class="container">
			<div class="bag-container" @click="exibeCarrinho = ! exibeCarrinho">
				<div class="bag text-right">
					<img src="./assets/img/bag-color.png" />
					<span>{{ itemsCarrinho.length }}</span>
				</div>
			</div>
			<div class="row produtos">
				<div v-for="item in items" class="col-md-4 col-xs-6">
					<item-lista :item="item" :itemsCarrinho="itemsCarrinho"></item-lista>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import Item from './components/item/Item.vue';
import Carrinho from './components/carrinho/Carrinho.vue';
import data from './public/data/products.json';

export default {
	name: 'app',
	
	components: {
		'item-lista': Item,
		'carrinho': Carrinho
	},

	data(){
		return{
			items: data.products,
			itemsCarrinho: [],
			exibeCarrinho: false
		}
	},

	created(){
		this.items = data.products;
	}
}

</script>

<style lang="scss">
	@import './style.scss';
</style>
