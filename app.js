let tg = window.Telegram.WebApp;

tg.expand();

let result = "";

let x_gypsum = document.getElementById("x_gypsum");
let x_water = document.getElementById("x_water");
let x_plasticizer = document.getElementById("x_plasticizer");
let x_pigment = document.getElementById("x_pigment");
let x_all = document.getElementById("x_all");
let calc = document.getElementById("calc");

function clear_value(value) {
	let item = document.getElementById(value);
	item.value = '';
};

x_gypsum.addEventListener("click", function(){
	clear_value('gypsum')
});

x_water.addEventListener("click", function(){
	clear_value('water')
});

x_plasticizer.addEventListener("click", function(){
	clear_value('plasticizer')
});

x_pigment.addEventListener("click", function(){
	clear_value('pigment')
});

x_all.addEventListener("click", function(){
	let array_inputs = ['name', 'gypsum', 'water', 'plasticizer', 'pigment', 'value']
	for (let item of array_inputs) {
		clear_value(item);
	}
});

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
	// tg.sendData(result)
});


// Telegram.WebApp.onEvent("mainButtonClicked", function(){
// 	tg.sendData(item);
// });

// function addActive(x) {
//     if (!x) return false;
//     removeActive(x);
//     if (currentFocus >= x.length) currentFocus = 0;
//     if (currentFocus < 0) currentFocus = (x.length - 1);
//     x[currentFocus].classList.add("active");
//   }
//   function removeActive(x) {
//     for (var i = 0; i < x.length; i++) {
//       x[i].classList.remove("active");
//     }
//   }







