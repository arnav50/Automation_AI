/*As an SDET, you frequently need to generate test data for form testing. 
Write a JavaScript program that generates test user data using a for loop. 
Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter),
 let (loop variables), and const (fixed values).
Examples:
Input:
Generate 8 users
Output:
USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE USR-0002 | TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | INACTIVE */

// Global counter
var totalUsers = 8;

// Fixed values
const roles = ["admin", "editor", "viewer", "tester", "manager"];
const domain = "testingacademy.com";

for (let i = 1; i <= totalUsers; i++) {

    // Generate formatted ID
    let id = "USR-" + String(i).padStart(4, "0");

    // Generate name and email
    let name = "TestUser_" + i;
    let email = "testuser" + i + "@" + domain;

    // Cycle roles
    let role = roles[(i - 1) % roles.length];

    // Every 3rd user inactive
    let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";


    console.log(`${id} | ${name} | ${email} | ${role} | ${status}`);
}