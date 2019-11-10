// Переписать итерации числа на do\while

// var i = 1;

// do {
//     if(!(i % 2)) break;
//     console.log(i);
//     i++;
// } while(i < 10);

// var i = 1;

// do {
//     i++;
//     if(i % 2) continue;
//     console.log(i);    
// } while(i < 10);


// Угадать число do\while

// var random = Math.ceil(Math.random() * 5),
//     guess;
    
// do{
//     guess = prompt('Guess y\'re number');    
// } while (guess !== null && +guess !== random);

// if(guess !== null){
//     alert ('you guessed a number!');
// }

// for(var random = Math.ceil(Math.random() * 5), guess; guess !== null && +guess !== random; guess = prompt('Guess y\'re number'));
// if(guess !== null){
//     alert ('you guessed a number!');
// }

// Запросить у пользователя число кратные которому будут выводиться
// var enter = prompt('Введите число от 1 до 100'),
//     amo = prompt('Количество выводимых чисел'),
//     num = 1;
// do {
//     if(!(num % enter)){
//         console.log(num);
//     }
//     num++;
// } while(num <= amo * enter);

var enter = prompt('Введите число от 1 до 100'),
    amo = prompt('Количество выводимых чисел'),
    num = 1;
for(; num <= amo * enter; num++){
    if (!(num % enter)) {
        console.log(num);
    }
}