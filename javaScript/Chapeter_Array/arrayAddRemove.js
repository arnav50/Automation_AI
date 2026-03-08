let arr = [2, 3, 4, 5];
arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

//Addding element at the beginning of the array
arr.unshift(1);
console.log(arr);

//Removing element from the beginning of the array
arr.shift();
console.log(arr);

let array = [100, 200, 300, 400, 500];

//Removing element at index 2
array.splice(2, 1);
console.log(array);

//Adding element at index 2 without removing any element
array.splice(2, 0, 350);
console.log(array);

//Replacing element at index 2 with 10 and 600
array.splice(2, 1, 10, 600);
console.log(array);