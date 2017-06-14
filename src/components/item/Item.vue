<template>
	<div class="item"> 

		<div class="item-container" @click="exibeCompra = !exibeCompra">
			<div class="imagem">
				<img :src='"../../assets/img/1/"+slug(item.title)+".jpg"'>
			</div>
			<p class="nome">{{ item.title }}</p>
			<div class="precos">
				<p class="preco">{{ item.currencyFormat }}
				 <strong>{{ item.price | preco }}</strong><span>{{ item.price | centavos }}</span>
				</p>
				<span class="preco-parcelado" v-if=" item.installments > 0 ">
				ou {{ item.installments }} x {{ item. currencyFormat }}{{ item.price | parcelado(item.installments) }}
				</span>
			</div>
		</div>

		<div class="compra-container" v-if="exibeCompra">
			<div class="tamanho" v-if="item.availableSizes.length">
				<div class="alert alert-danger" v-if="exibeErro">Por favor, selecione o tamanho para continuar</div>
				<ul>
					<li v-for="(tamanho, itemIndex) in item.availableSizes">
						<span @click="selecionaTamanho(tamanho, itemIndex)" :class="{selected : tamanhoAtivado === itemIndex}">{{ tamanho }}</span>
					</li>
				</ul>
			</div>

			<a xhref="#" class="btn btn-info" @click="comprar">
				<span class="glyphicon glyphicon-shopping-cart"></span>	
			</a>
		</div>
	</div>
</template>

<script>

export default {
	props: ["item", "itemsCarrinho"],

	data(){
		return{
			exibeCompra: false,
			exibeErro: false,
			tamanhoAtivado: "",
			tamanho: ""
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

		selecionaTamanho(tamanho, itemIndex){
			// remove o erro
			this.exibeErro = false;

			// seleciona o tamanho
			this.tamanho = tamanho;
			this.tamanhoAtivado = itemIndex;
		},

		comprar(){

			// valida se tem tamanho
			if(this.item.availableSizes.length > 0 && this.tamanho != ""){

				// adiciona item no carrinho
				this.itemsCarrinho.push(this.item);
			}else{
				// exibe erro
				var scope = this;
				
				this.exibeErro = true;
				
				setTimeout(function(){ 
					scope.exibeErro = false;
				}, 3000);
			}
		}
	},
}

</script>

<style scoped lang="scss">
	@import './style.scss';
</style>
