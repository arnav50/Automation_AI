
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);


let num = [10, 1, 20, 2, 30];
num.sort();
console.log(num);

num.sort((a, b) => a - b); // Assending 
console.log(num);

num.sort((a, b) => b - a); //decending 
console.log(num);