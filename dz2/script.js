// угадать число
var enter = prompt ('Введите число от 1 до 5');
console.log (Number(enter));
var random = Math.random () * (5 - 1) + 1;
random = Math.round (random);
console.log (random);
if (Number(enter) === random){
	alert('Поздравляю, вы отгадали');
} else {
	alert('Попробуйте еще раз!')
}

// // среднее арифметическое нескольких чисел

// var try1 = Number(prompt('Enter the number1'));
// var try2 = Number(prompt('Enter the number2'));
// var try3 = Number(prompt('Enter the number3'));

// alert ((try1 + try2 + try3) / 3);


// // среднее арифметичекое 2
// var enter = (prompt('Enter youre nums'))
// .split(',')
// .map(Number);

// console.log (enter.reduce((sum, next) => sum + next, 0) / enter.length);