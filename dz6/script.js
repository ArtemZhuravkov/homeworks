var random = Math.ceil(Math.random() * 5),
    guess;
    
do{
    guess = prompt('Guess y\'re number');    
} while (guess !== null && +guess !== random);

if(guess !== null){
    alert ('you guessed a number!');
}
