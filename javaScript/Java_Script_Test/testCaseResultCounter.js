/*After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). 
Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
Print a test report with total tests, counts, pass rate percentage, and a verdict
 (all passed → ready for release, ≤2 failures → review, >2 failures → block release). */

let testResults = ["pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passCount = 0;
let skipCount = 0;
let failCount = 0;

for (let i = 0; i < testResults.length; i++) {

    if (testResults[i] === "pass") {
        passCount++;
    }

    else if (testResults[i] === "fail") {
        failCount++;
    }

    else if (testResults[i] === "skip") {
        skipCount++;
    }
}

let totalTests = testResults.length;

let passRate = ((passCount / totalTests * 100).toFixed(2));

let verdict;

if (failCount === 0) {
    verdict = "Ready for move out to Stage";
}

else if (failCount <= 2) {
    verdict = "Review required";
}
else {
    verdict = "Block Release";
}

console.log("=========Test Execution Report===========")
console.log("Total Tests : ", totalTests);
console.log("Passed :", passCount);
console.log("Failed :", failCount);
console.log("Skipped :", skipCount);
console.log("Pass rate %", passRate);
console.log("Verdict :", verdict);
