
let display = document.getElementById('display');

function append(char) {
	display.value += char;
}

function clearDisplay() {
	display.value = '';
}

function deleteLast() {
	display.value = display.value.slice(0, -1);
}

function calculate() {
	try {
		display.value = eval(display.value);
	} catch (e) {
		display.value = 'Error';
	}
}

function square() {
	display.value = (parseFloat(display.value)) ** 2;
}


