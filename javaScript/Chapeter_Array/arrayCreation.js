let fruit = [];
let fruit_fresh = ["Apple", "Mango", "Banana"];
console.log(fruit_fresh);

console.log (fruit_fresh[0]);
console.log(fruit_fresh[2]);


//Array constructor

let scores = new Array(5);
console.log(scores);

scores[0] = 100;
scores[4] = 120;
scores.push(130, 140);

console.log(scores);


let test = new Array(10, 20, 40, 50);
console.log(test);

let chars = Array.from("Welcome to JavaScript");
console.log(chars);