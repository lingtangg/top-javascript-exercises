const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    sum *= array[i];
  }
  return sum;
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(num) {
  if (num == 0) {
    return 1;
  }
  let sum = 1;
	for (let i = 1; i < num + 1; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
