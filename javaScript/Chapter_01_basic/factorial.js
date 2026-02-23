
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Please provide a number as an argument.");
  console.log("Usage: node factorial.js <number>");
} else {
  const num = parseInt(args[0], 10);
  if (isNaN(num)) {
    console.error("Invalid input. Please provide a valid integer.");
  } else {
    try {
      const result = factorial(num);
      console.log(`Factorial of ${num} is ${result}`);
    } catch (error) {
      console.error(error.message);
    }
  }
}
