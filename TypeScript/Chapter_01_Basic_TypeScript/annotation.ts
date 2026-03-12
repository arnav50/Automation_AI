let userName: String = "Rahul";
let age: number = 28;
let isActive: boolean = true;

function greetUser(name: String, age: number) {
    return `Hello ${name}, you are ${age} years old.`;
}

let greeting = greetUser(userName, age);
console.log(greeting);