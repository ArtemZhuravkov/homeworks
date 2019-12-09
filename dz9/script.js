
function render(arr){
    var newArr = [];
    for(var key in arr)
    newArr.push(key + ':' + arr[key]);
    // console.log(newArr = [key + ':' + arr[key]]);
    return newArr 
     
}
console.log(render(['a', 'b', 'c', 'd']));