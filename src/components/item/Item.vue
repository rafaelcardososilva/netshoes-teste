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
				<div class="alert alert-success" v-if="exibeSucesso">Produto adicionado no carrinho com sucesso!</div>
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
	props: ["item"],

	data(){
		return{
			tamanho: "",
			tamanhoAtivado: "",
			exibeErro: false,
			exibeCompra: false,
			exibeSucesso: false,
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

		computed:{

			itemsCarrinho(){
				return this.$store.state.itemsCarrinho;
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

			var scope = this;

			// valida se tem tamanho
			if(this.item.availableSizes.length > 0 && this.tamanho != ""){

				// adiciona item no carrinho
				this.adicionaItemCarrinho(this.item);

				//exibe sucesso 				
				this.exibeSucesso = true;
				
				setTimeout(function(){ 
					scope.exibeSucesso = false;
				}, 3000);				
			}else{
				// exibe erro				
				this.exibeErro = true;
				
				setTimeout(function(){ 
					scope.exibeErro = false;
				}, 3000);
			}
		},

		adicionaItemCarrinho(item){

			var scope = this;

			var produto = {
				sku : item.sku,
				title : item.title,
				style : item.style,
				size : item.availableSizes[this.tamanhoAtivado],
				price : item.price,
				qtd : 1
			}

			var novo = true;

			// item repetido aumenta quantidade
			this.$store.state.itemsCarrinho.map(function(e){
				if( e.sku == item.sku && e.size == item.availableSizes[scope.tamanhoAtivado] ){
					e.qtd++;
					novo = false;
				}
			});

			// adiciona produto no carrinho
			novo ? this.$store.state.itemsCarrinho.push(produto) : '';
		}
	},
}

</script>

<style scoped lang="scss">
	@import './style.scss';
</style>