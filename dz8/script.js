var wordsAmount = +prompt('Количество слов'),
    minLetterAmount = +prompt('Минимальное кл-во букв'),
    maxLetterAmount = +prompt('Максимальное кл-во букв'),
    alphabet = 'abcdefghijklmnopqrstuvwxyz';
    dictionary = {};
var lettersCount,
    word,
    charIndex;

function random(min, max) {
    return Math.ceil (Math.random() * (max - min) + min);
    }
function lettersAmountRandom () {      
       lettersCount = random(minLetterAmount, maxLetterAmount);
       word = '';
    }
function makeRandomWords () {
        charIndex = random(0, alphabet.length - 1);
        word += alphabet[charIndex];
    }
function addWords () {
    if(dictionary[lettersCount]){
        dictionary[lettersCount].push(word);
    }else{
        dictionary[lettersCount] = [];
        dictionary[lettersCount].push(word);
      }
  }  

for(i = 0; i < wordsAmount; i++){
    lettersAmountRandom();
    for(j = 0; j < lettersCount; j++){
        makeRandomWords();        
    }
    addWords();    
}
console.log(dictionary);