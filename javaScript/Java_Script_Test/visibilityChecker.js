/*In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good). */


function checkElementState(isPresent, isDisplayed, isEnable){

let state;
let action;

if(isPresent === true && isDisplayed === true && isEnable === true ){
state = "Ready";
action = "Safe to interact with the element.";
}

else if (isPresent === true && isDisplayed === true && isEnable === false){
state = "DISABLED";
action = "Elements are present and displayed but not enabled";
}
 
else if (isPresent === true && isDisplayed === false){
State = "HIDDEN";
action = "Elements are present but not displayed";
}

else if (isPresent === false){
State = "Not FOUND";
action = "Elements are not present";
}

 const severity = (isPresent === false)
  ? "CRITICAL" : (isDisplayed === false || isEnable === false) 
  ? "WARNING"  : "OK";
 
 console.log("State :",  state);
 console.log("Severity :",  severity);
 console.log("Required Action :",  action);

}

checkElementState(true, true, true);

checkElementState(true, true, false);

checkElementState(true, false, true);

checkElementState(false, false, false);


