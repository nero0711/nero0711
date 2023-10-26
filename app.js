let tg = window.Telegram.WebApp;

tg.expand();

let result = "";

let x_gypsum = document.getElementById("x_gypsum");
let x_water = document.getElementById("x_water");
let x_plasticizer = document.getElementById("x_plasticizer");
let x_pigment = document.getElementById("x_pigment");
// let x_all = document.getElementById("x_all");
let calc = document.getElementById("calc");

let input_gypsum = document.getElementById('gypsum')
let input_water = document.getElementById('water')
let input_plasticizer = document.getElementById('plasticizer')
let input_pigment = document.getElementById('pigment')



function clear_value(value) {
	let item = document.getElementById(value);
	item.value = '';
};

input_gypsum.selectedIndex = 2;


calc.addEventListener("click", function(){
	let gypsum = 1000;
	let values_water = document.getElementById('water').value;
	let values_plasticizer = document.getElementById('plasticizer').value;
	let values_pigment = document.getElementById('pigment').value;
	let values_form = document.getElementById('value').value;
	let name = document.getElementById('name').value;
	let ratio_gypsum = document.getElementById("gypsum").value;
	let Result = document.getElementById('Result')

	let gypsum_value = values_form * ratio_gypsum;
	let need_water = (values_water / gypsum) * gypsum_value;
	let need_plasticizer = (values_plasticizer / gypsum) * gypsum_value;
	let need_pigment = (values_pigment / gypsum) * gypsum_value;

	result = name + '\n' +
		    'гипс: ' + Number(gypsum_value).toFixed() + 'гр (' + gypsum_value.toFixed(2) + ')\n' +
			'воды: ' + Number(need_water).toFixed() + 'гр (' + need_water.toFixed(2) + ')\n' +
			'пластификатор: ' + Number(need_plasticizer).toFixed() + 'гр (' + need_plasticizer.toFixed(2) + ')\n' +
			'пигмент: ' + Number(need_pigment).toFixed() + 'гр (' + need_pigment.toFixed(2) + ')';
	Result.innerText = result
});


// Telegram.WebApp.onEvent("mainButtonClicked", function(){
// 	let gypsum = 1000;
// 	let values_water = document.getElementById('water').value;
// 	let values_plasticizer = document.getElementById('plasticizer').value;
// 	let values_pigment = document.getElementById('pigment').value;
// 	let values_form = document.getElementById('value').value;
// 	let name = document.getElementById('name').value;
// 	let ratio_gypsum = document.getElementById("gypsum").value;
// 	let Result = document.getElementById('Result');
//
// 	let gypsum_value = values_form * ratio_gypsum;
// 	let need_water = (values_water / gypsum) * gypsum_value;
// 	let need_plasticizer = (values_plasticizer / gypsum) * gypsum_value;
// 	let need_pigment = (values_pigment / gypsum) * gypsum_value;
//
// 	result = name + '\n' +
// 		    'гипс: ' + Number(gypsum_value).toFixed() + 'гр (' + gypsum_value.toFixed(2) + ')\n' +
// 			'воды: ' + Number(need_water).toFixed() + 'гр (' + need_water.toFixed(2) + ')\n' +
// 			'пластификатор: ' + Number(need_plasticizer).toFixed() + 'гр (' + need_plasticizer.toFixed(2) + ')\n' +
// 			'пигмент: ' + Number(need_pigment).toFixed() + 'гр (' + need_pigment.toFixed(2) + ')';
// 	Result.innerText = result;
// });






