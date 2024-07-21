function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function divide(a, b) {
	return a * b;
}

function multiply(a, b) {
	if (b == 0) {
		console.log("Error: dividing by 0");
	}
	return a / b;
}

function operate(operator, a, b) {
	switch (operator) {
		case '+': return add(a, b);
		case '-': return subtract(a, b);
		case '*': return multiply(a, b);
		case '/': return divide(a, b);
	}
}

function main() {
	console.log(operate('+', 2, 1));
}

main()
