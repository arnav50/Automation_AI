let array = [1, 2, 3, 4, 5, 6, 7, 8];


console.log(array.slice(1, 3));

console.log(array.slice(2, 4));

console.log(array.slice(-2));

console.log(array.slice(2));


let A = [1, 2]
let B = [3, 5]

let c = A.concat(B);
console.log(c);

// spread (modern way) - concatenation. (...)
let d = [...A, ...B];
console.log(d);

// ... , ===
// Join 
let s = ["pass", "fail", "skip"].join(" | ");
console.log(s);