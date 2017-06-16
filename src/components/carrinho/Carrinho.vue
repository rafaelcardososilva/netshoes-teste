<template>
	<section id="carrinho">
		<header @click="carrinho()">
			<div class="bag">
				<img src="../../assets/img/bag.png" />
				<span>{{ itemsCarrinho.length }}</span>
			</div>
			<h2>SACOLA</h2>
		</header>

		<div v-if="itemsCarrinho.length > 0">
			<ul class="items" v-for="itemCarrinho in itemsCarrinho">
				<item-carrinho :itemCarrinho="itemCarrinho"></item-carrinho>
			</ul>

			<div class="subtotal row">
				<div class="col-xs-2 text-left">
					<p class="texto"><strong>SUBTOTAL</strong></p>
				</div>
				<div class="col-xs-10 text-right">
					<p class="total">R$ <strong>{{ getTotal() | preco }}</strong>{{ getTotal() | centavos }}</p>
					<p class="parcelado">ou em até 10x R$ {{ getTotal() | parcelado(parcelas) }}</p>
				</div>
			</div>

			<div class="bt">
				<input type="submit" class="btn btn-primary" value="COMPRAR" />
			</div>			
		</div>
	</section>
</template>

<script>

import ItemCarrinho from '../itemCarrinho/ItemCarrinho.vue';

export default{

	components:{
		"item-carrinho": ItemCarrinho
	},

	data(){
		return{
			parcelas: 10
		}
	},

	computed:{

		itemsCarrinho(){
			return this.$store.state.itemsCarrinho;
		}
	},

	methods:{

		// usando jquery para exibir carrinho
		carrinho(){
			$("#carrinho").toggleClass("carrinhoShow");
		},

		getTotal(){

			var total = 0;

			this.itemsCarrinho.map(function(item){
				total = item.price + total;
			});

			return total;

		}
	}
}

</script>

<style scoped lang="scss">
	@import '../../assets/scss/utils.scss';
	@import './style.scss';
</style>