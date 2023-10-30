let tg = window.Telegram.WebApp;

tg.expand();

let result = "";

let x_gypsum = document.getElementById("x_gypsum");
let x_water = document.getElementById("x_water");
let x_plasticizer = document.getElementById("x_plasticizer");
let x_pigment = document.getElementById("x_pigment");
// let x_all = document.getElementById("x_all");
let calc = document.getElementById("calc");

let input_gypsum = document.getElementById('gypsum1')
let input_water = document.getElementById('water1')
let input_plasticizer = document.getElementById('plasticizer1')
let input_pigment = document.getElementById('pigment1')


input_gypsum.selectedIndex = 3;

function clear_value(value) {
	let item = document.getElementById(value);
	item.value = '';
};

function toggleField(hideObj, showObj){
  hideObj.disabled=true;
  hideObj.style.display='none';
	showObj.focus();
	showObj.disabled=false;
	showObj.style.display='inline';
}

function check_item(item){
	if (!isFinite(item.value) || Number(item.value) <= 0 )  {
		item.classList.add('Important')
		return false
	}
	item.classList.remove('Important')
	return true
};

function give_my_item(array_names){
	for (var i = 0; i < array_names.length; i++){
		let val = document.getElementById(array_names[i]);
		if (!val.disabled) {
			return val
		};
	};
};


calc.addEventListener("click", function(){
	let gypsum = 1000;
	let values_water = document.getElementById('water1').value || document.getElementById('water2').value;
	let values_plasticizer = document.getElementById('plasticizer1').value || document.getElementById('plasticizer2').value;
	let values_pigment = document.getElementById('pigment1').value || document.getElementById('pigment2').value;
	let values_form = document.getElementById('value').value;
	let name = document.getElementById('name').value;
	let ratio_gypsum = document.getElementById("gypsum1").value || document.getElementById("gypsum2").value
	let Result = document.getElementById('Result')

	let checks = [check_item(give_my_item(["gypsum1", "gypsum2"])), check_item(give_my_item(["water1", "water2"])), check_item(give_my_item(["value"]))]
	// console.log()
	if ( !checks.every(element => element)) {
		Result.innerText = 'Не заполнены обязательные поля!'
		Result.setAttribute('style', 'color:red; margin: 30px 30px;');
		return
	};

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
	Result.setAttribute('style', 'color: var(--tg-theme-text-color); margin: 30px 30px;');
	tg.sendData(result)
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






