function checkElement(isPresent, isDisplayed, isEnabled) {

    let status;
    let action;

    if (isPresent === false) {
        status: "Not Found";
        action = "Element is present in DOM. check locator or page load.";
    }

    else if (isPresent === true && isDisplayed === false) {
        status = "Hidden";
        action = "Element is present but hidden. wait for enable state or check"
    }

    else if (isPresent === true && isDisplayed === true && isEnabled === false) {
        status: "Disabled";
        action = "Element is visible but disabled. Wait for enable state or check preconditions.";
    }

    else if (isPresent === true && isDisplayed === true && isEnabled === true) {
        status = "Ready";
        action = "Element is ready for interaction";
    }

    const severity = (isPresent === false) ? "Critical" : (isDisplayed === false || isEnabled === false) ? "Warning" : "Ok";

    console.log("Status :", status, "Serverity :", severity, "Action :", action);

}

let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

checkElement(isPresent, isDisplayed, isEnabled);