import Vue from 'vue'

Vue.filter("slug", function(value) {
 	if (value) {
 		return value.toLowerCase().replace(/ /g, "-").replace(/\//g, "");
	}
});

Vue.filter("preco", function(value) {
 	if (value) {
 		return parseInt(value);
	}
});

Vue.filter("centavos", function(value) {
 	if (value) {
 		return ","+Math.round( (value % Math.floor(value)) * 100);
	}
});

Vue.filter("parcelado", function(value, parcelas) {
 	if (value) {
 		return (value / parcelas).toFixed(2).toString().replace(".",",")
	}
});