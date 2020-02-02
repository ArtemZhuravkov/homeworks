const ajax = new XMLHttpRequest();
const host = "http://localhost:8080";
ajax.open("get", host + "/users");
ajax.setRequestHeader("Content-Type", "application/json");
ajax.addEventListener("load", ev => {
    console.log(JSON.parse(ev.target.response));    
});
ajax.send();

const xhr = new XMLHttpRequest();
const ivan = JSON.stringify({
  name: "Gena",
  age: 30
});
xhr.open("POST", 'http://localhost:8080/users', true)
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText);        
    }
};
xhr.send(ivan);
