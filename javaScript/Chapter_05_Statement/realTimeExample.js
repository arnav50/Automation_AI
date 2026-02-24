let isloggedIn = true;
let userRole = "editor";

if (isloggedIn) {
    if (userRole === "admin") {
        console.log("You can login all and All admin acess you have");
    }

    else if (userRole === "editor") {
        console.log("Welcome - you are login as editor");

    }

    else if (userRole === "user") {
        console.log("welcome - You have login as a user");
    }

    else {
        console.log("No Auth access you have for this domain");
    }
}