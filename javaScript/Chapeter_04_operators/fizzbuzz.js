
/**  This is an example of fizzbuzz problem 
    Simple print the value from o to 100 ans if the value is divisible by 3 print "Fizz" 
    if the value is divisible by 5 print "Buzz" and if the value is divisible by both 3 and 5 print "FizzBuzz"
*/
for (i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }

    else if (i % 3 == 0) {
        console.log("Fizz");
    }

    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }

}
