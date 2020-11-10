var age = prompt ('how are you old?');
var ageYears = prompt('What is the year now?');
var result = (ageYears-age);
alert (result);

// 2 метода, если человек пишет возраст и год и если человек ток возраст пишет 
var age = prompt ('how are you old?');
var ageYears = 2020;
var result = (ageYears-age);
alert (result);

// вывод приветствия
var name = prompt('what is your name?');
alert ( "hello," + name);

//делает целые числа
var number1 = prompt ('введите первое число');
var number2 = prompt ('введите второе число');
// var result = (Math.floor(number1/number2));
// alert(result);
alert(Math.floor(number1/number2));