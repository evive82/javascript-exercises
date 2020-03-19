function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

function multiply (x, y) {
	if (typeof x === 'number') {
		return x * y;
	}	else if (typeof x === 'object') {
		let prod = 1;
		for (let i = 0; i < x.length; i++) {
			prod *= x[i];
		}
		return prod;
	}
}

function power(x, y) {
	return x ** y;
}

function factorial(x) {
	let fact = x;
	if (fact === 0) fact++;
	let i = x - 1;
	while (i > 0) {
		fact *= i;
		i--; 
	}
	return fact;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}