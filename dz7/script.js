function getRandomArbitrary(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    wordsAmount = +prompt('Количество рандомных значений?'),
    minLettersAmount = +prompt('Минимальное количество букв'),
    maxLettersAmount = +prompt('Максимальное количество букв');
    book = {};
    
    for(var i = 0; i < wordsAmount; i++){
        var wordLength = getRandomArbitrary(minLettersAmount, maxLettersAmount);
        var word = '';
        for(var k = 0; k < wordLength; k++){
          var charIndex = getRandomArbitrary(0, alphabet.length - 1);
          word += alphabet[charIndex];                  
        }
        if(book[wordLength]){
          book[wordLength].push(word);
        }else{
          book[wordLength] = [];
          book[wordLength].push(word);
        }                 
    }
    for(var key in book){
      console.log('у вас ' + key + ' слов' + ' с ' + book[key].length + ' буквами'); 
    }
    
     


