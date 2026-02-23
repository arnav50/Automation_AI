let age = 18;

let confirm_Visitors = age <= 16 ? "You can visit out of country without gaurdien " : "You can't visit out of country without gaurdien "
console.log(confirm_Visitors);



let s = "Hi";
s += "Bye";     //concept of concatenation
console.log(s);



let amul = null;
let val = amul ?? "nandani milk";
let val2 = null ?? "default";   // "default" (?? returns right side if left is null/undefined)

// Modern JS - Typescript.

val = "which milk? -> " + val;
console.log(val)
// very useful in test data handling.