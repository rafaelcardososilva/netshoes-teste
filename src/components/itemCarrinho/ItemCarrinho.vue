<template>
	<li class="item-carrinho" :class="{remove : dataRemove }">
		<div class="row item">
			<div class="col-xs-9">
				<div class="table">
					<div class="imagem">
						<img :src='"../../assets/img/1/"+slug(itemCarrinho.title)+".jpg"'>
					</div>
					<div class="detalhes">
						<p><strong class="nome">{{ itemCarrinho.title }}</strong></p>
						<p><span>{{ itemCarrinho.size }} | </span><span>{{ itemCarrinho.style }}</span></p>
						<p><span>Quantidade: {{ itemCarrinho.qtd }}</span></p>
					</div>
				</div>
			</div>
			<div class="col-xs-3 remover">
				<p><span class="glyphicon glyphicon-remove" @mouseover="dataRemove = !dataRemove" @mouseleave="dataRemove = !dataRemove" @click="remover(itemCarrinho)"></span></p>
				<p class="preco">R$ <strong>{{ itemCarrinho.price | preco }}</strong>{{ itemCarrinho.price | centavos }}</p>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	props: ["itemCarrinho"],

	data(){
		return{
			dataRemove: false
		}
	},

	methods:{

		slug(value){
		 	if (value) {
		 		return value.toLowerCase()
		 		.replace(/ /g, "-")
		 		.replace(/\//g, "")
		 		.replace(/ã/g, "a")
		 		.replace(/é|ê/g, "e")
		 		.replace(/ç/g, "c")
			}
		},

		remover(item){

			if( confirm("Tem certeza ?") ){

				// remove produtos do carrinho
				var i = this.$store.state.itemsCarrinho.indexOf(item);
				i > -1 ? this.$store.state.itemsCarrinho.splice(i, 1) : "";
			}
		}
	}
}
</script>

<style lang="scss">
	@import '../../assets/scss/utils.scss';
	@import './style.scss';
</style>