<template>
	<section :class="{ carrinhoShow : exibeCarrinho }">
		<header>
			<div class="bag">
				<img src="../../assets/img/bag.png" />
				<span>{{ itemsCarrinho.length }}</span>
			</div>
			<h2>SACOLA</h2>
		</header>
	</section>
</template>

<script>

export default{
	props: ["itemsCarrinho", "exibeCarrinho"]
}

</script>

<style scoped lang="scss">
	@import './style.scss';
</style>