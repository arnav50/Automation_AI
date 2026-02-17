
console.log(a);
var a = 10;
console.log(a);

function varHosting(){
    console.log("Inside the function");
    console.log(a);
}

console.log(a); // this will print value before the function is called, which is 10

varHosting();

/// Lets check for Let keyword


let x = 50;
console.log(x);
function temporalDeadZone(){

 /**console.log(score);
    score = 100; 
    typeof score;  **/
    let score = 200;
    console.log(score);
    
}
temporalDeadZone();

//const 

const url = "https://www.example.com";
console.log(url);


