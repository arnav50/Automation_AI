var a = 10;  // Global Scope
console.log(a); 

function printVar(){
    console.log("Welcome to AI Automation");
    var a = 20; // Local Scope
if(true){
    var a = 30;  // Block Scope (but var does not have block scope, it will overwrite the local variable a)
    console.log(a);
}
console.log("F=",a); 
}
printVar();


console.log("\nWill Understand Scope with let");



let b = 50;  // Global Scope
console.log(b);

function printLet(){
    
    let a = 30; // Local Scope
    console.log(a);

if(true){
    let a = 70;  // Block Scope (let has block scope, so this a is different from the outer a)
    console.log(a);
}
console.log("F=",a); 
}
printLet();


console.log("\nWill Understand Scope with const");

const c = 100;  // Global Scope
console.log(c);

function printConst(){          
    const a = 40; // Local Scope
    console.log(a);

if(true){
    const a = 40; // Block Scope (const has block scope, so this a is different from the outer a)

    console.log(a);
}
console.log("F=",a);
}
printConst();



