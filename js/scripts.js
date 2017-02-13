var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var bmi = function(weight, height) {
	return (weight / Math.pow(height, 2)) * 703;
}
//var number1 = parseInt(prompt("Enter weight in pounds:"));
//var number2 = parseInt(prompt("Enter height in inches:"));
//alert(bmi(number1, number2));


var tempConvert = function(degree, isCelsius){
	if(isCelsius === false){
  	//then it's fahrenheit
    var result = (degree-32)*5/9;
  } else{
  	//then it's Celsius
    var result = (9*degree/5) +32;
  }
  return result;
}
//alert(tempConvert(71, false));
//alert(tempConvert(0, true));

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var resultAdd = add(number1, number2);
alert(resultAdd);

var resultSubtract = subtract(number1, number2);
alert(resultSubtract);

var resultMultiply = multiply(number1, number2);
alert(resultMultiply);

var resultDivide = divide(number1, number2);
alert(resultDivide);
