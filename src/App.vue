<template>
	<div id="app">
		<carrinho></carrinho>
		<div class="container">
			<div class="bag-container" @click="carrinho">
				<div class="bag text-right">
					<img src="./assets/img/bag-color.png" />
					<span class="bag-produtos">{{ itemsCarrinho.length }}</span>
				</div>
			</div>
			<div class="row produtos" @click="hideCarrinho">
				<div v-for="item in items" class="col-md-4 col-xs-6">
					<item-lista :item="item"></item-lista>
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
			items: data.products
		}
	},

	computed:{

		itemsCarrinho(){
			return this.$store.state.itemsCarrinho;
		}
	},

	created(){
		this.items = data.products;
	},

	methods:{

		carrinho(){
			if( this.itemsCarrinho.length > 0 )
				// usando jquery para exibir carrinho
				$("#carrinho").toggleClass("carrinhoShow");
		},
		hideCarrinho(){
			$("#carrinho").removeClass("carrinhoShow");	
		}
	}
}

</script>

<style lang="scss">
	@import './style.scss';
	@import './assets/scss/utils.scss';
</style>