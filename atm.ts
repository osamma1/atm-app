import * as readlineSync from 'readline-sync';

// User data generation function
function generateRandomUserData() {
  const userId = Math.floor(Math.random() * 10000);
  const pin = Math.floor(Math.random() * 10000);
  const balance = Math.floor(Math.random() * 10000);
  return { userId, pin, balance };
}

// Function to authenticate user
function authenticateUser(users: { [key: number]: { pin: number, balance: number } }, userId: number, pin: number) {
  if (users[userId] && users[userId].pin === pin) {
    return true;
  }
  return false;
}

// ATM main functionality
function runATM() {
  // Generate random user data
  const users: { [key: number]: { pin: number, balance: number } } = {};
  for (let i = 0; i < 10; i++) {
    const userData = generateRandomUserData();
    users[userData.userId] = { pin: userData.pin, balance: userData.balance };
  }

  // Prompt user for user id and pin
  const userId = parseInt(readlineSync.question('Enter user ID: '));
  const pin = parseInt(readlineSync.question('Enter PIN: '));

  // Authenticate user
  if (authenticateUser(users, userId, pin)) {
    console.log('Authentication successful!');

    // ATM functionalities unlocked
    // You can implement deposit, withdrawal, balance check, etc. here
    // For simplicity, let's just display the user's balance
    console.log(`Your balance is: $${users[userId].balance}`);
  } else {
    console.log('Authentication failed. Please try again.');
  }
}

// Run ATM
runATM();
