var arr = [1, 2, 3, 4, -5];
function some(arr, cb) {
    for (let index = 0; index < array.length; index++) {
        if(!cb(arr[index], index, arr)) {
            return true;
        }        
    }
}

var newArr = arr.some(function(value){
    return value > 2
});
console.log(newArr);




function fill(arr, cb) {    
    var newArr = [];   
    for (var index = 0; index < arr.length; index++) {
        if(cb(arr[index], index, arr)){
            newArr.push(arr[index]); 
        }                                                
    }
    return newArr;
}


var arr = ['artem', 'ivan', 'roman', 'lev', 'inna'];
var result = fill(arr, function(word){
    return word.length > 3
});
console.log(result);
