var words = [];
function render(){
    for(i = 0; i < 5; i++){
        words[i] = prompt('Enter the symbols');        
    }
    console.log(words);
    for( var key in words)
    console.log (key + ':' + words[key]); 
}
render(words);

    

