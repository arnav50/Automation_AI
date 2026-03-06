const responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

let i = 0;
let total = 0;
let min = responseTimes[0];
let max = responseTimes[0];
let breaches = 0;

while(i < responseTimes.length ){

let time = responseTimes[i];

total += time;

if(time < min){
min = time;
}

if(time>max){
max = time;
}

if (time > SLA_LIMIT){
breaches++;
}

i++;
}

let avg = total / responseTimes.length;
let brachesPercent = (breaches / responseTimes.length)*100;

let status  = breaches > 0 ? "SLA VIOLATED" : "SLA MET";

console.log("Total Requests : ", responseTimes.length);
console.log("Min Response :", min+"ms");
console.log("Max Response :", max+"ms");
console.log("Average Response:", avg.toFixed(2)+"ms");
console.log("SLA Breaches:", breaches + " (" + brachesPercent.toFixed(2) + "%)");
console.log("Overall Status:", status);