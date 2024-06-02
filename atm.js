"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// User data generation function
function generateRandomUserData() {
    var userId = Math.floor(Math.random() * 10000);
    var pin = Math.floor(Math.random() * 10000);
    var balance = Math.floor(Math.random() * 10000);
    return { userId: userId, pin: pin, balance: balance };
}
// Function to authenticate user
function authenticateUser(users, userId, pin) {
    if (users[userId] && users[userId].pin === pin) {
        return true;
    }
    return false;
}
// ATM main functionality
function runATM() {
    // Generate random user data
    var users = {};
    for (var i = 0; i < 10; i++) {
        var userData = generateRandomUserData();
        users[userData.userId] = { pin: userData.pin, balance: userData.balance };
    }
    // Prompt user for user id and pin
    var userId = parseInt(readlineSync.question('Enter user ID: '));
    var pin = parseInt(readlineSync.question('Enter PIN: '));
    // Authenticate user
    if (authenticateUser(users, userId, pin)) {
        console.log('Authentication successful!');
        // ATM functionalities unlocked
        // You can implement deposit, withdrawal, balance check, etc. here
        // For simplicity, let's just display the user's balance
        console.log("Your balance is: $".concat(users[userId].balance));
    }
    else {
        console.log('Authentication failed. Please try again.');
    }
}
// Run ATM
runATM();
