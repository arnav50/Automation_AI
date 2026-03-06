function classifyBug (title, frequency, impact) {

let serverity = "";
let message = "";

if(frequency === "always"){

if (impact === "blocker"){
serverity = "P0";
message = "Critical: Stop release immediately";
}

else if (impact === "major"){
serverity = "P1";
message = "High: Fix before release";
}

else if (impact === "minor"){
serverity = "P2";
message = "Medium: Fix soon";
}

} else if (frequency === "often") {

if (impact === "blocker"){
serverity = "P2";
message = "Medium: Fix soon";
} 

else if (impact === "major"){
serverity = "P3";
message = "Low: Fix in upcoming sprint";
}

else if (impact === "minor"){
serverity = "P4";
message = "Very Low: Fix when time permits";
}

}

console.log("Bug Title:", title);
console.log("Frequency: ", frequency);
console.log("Impact:", impact);
console.log("Serverity:", serverity + "_" + message);

}

classifyBug("Checkout page crashes on appliying coupon",
"always",
"blocker"

);