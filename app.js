let tg = window.Telegram.WebApp;

tg.expand();

let result = "";

let x_gypsum = document.getElementById("btn1");
let x_water = document.getElementById("btn2");
let x_plasticizer = document.getElementById("btn3");
let x_pigment = document.getElementById("btn4");
let x_all = document.getElementById("btn5");
let calc = document.getElementById("calc");

function clear_value(value) {
	let ratio_gypsum = document.getElementById(value);
	ratio_gypsum.value = '';
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
	let values_svv500 = document.getElementById('plasticizer').value;
	let values_pigment = document.getElementById('pigment').value;
	let values_form = document.getElementById('value').value;
	let name = document.getElementById('name').value;
	let ratio_gypsum = document.getElementById("gypsum").value;

	let gypsum_value = values_form * ratio_gypsum;
	let need_water = (values_water / gypsum) * gypsum_value;
	let need_svv500 = (values_svv500 / gypsum) * gypsum_value;
	let need_pigment = (values_pigment / gypsum) * gypsum_value;
	let need_titan = (values_titan / gypsum) * gypsum_value;

	result = '<b>' + name + '</b><br>'
		     'гипс: ' + Number(gypsum_value).toFixed() + 'гр (' + gypsum_value.toFixed(2) + ')' +
			 '<br>воды: ' + Number(need_water).toFixed() + 'гр (' + need_water.toFixed(2) + ')' +
			 '<br>пластификатор: ' + Number(need_svv500).toFixed() + 'гр (' + need_svv500.toFixed(2) + ')' +
			 '<br>пигмент: ' + Number(need_pigment).toFixed() + 'гр (' + need_pigment.toFixed(2) + ')';
	tg.sendData(result)
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






