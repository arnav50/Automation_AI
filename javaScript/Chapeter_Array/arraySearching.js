

let nums = [10, 25, 30, 45];
nums.find(x => x > 20);  // 25,30,45 -> A -25

// findIndex
nums.findIndex(n => n > 20);

nums.findLast(n => n > 20); // 45] 
nums.findLastIndex(n => n > 20);// 

console.log(nums.find(x => x > 20));