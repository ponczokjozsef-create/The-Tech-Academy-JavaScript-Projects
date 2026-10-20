// Package Express - Shipping Quote Calculator
// A console application that calculates a shipping quote
// based on the weight and dimensions of a package.

// Import Node's built-in readline/promises module so we can read user input from the console
const readline = require("readline/promises");

// Create an interface that reads input from the keyboard (stdin) and writes output to the console (stdout)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// The main function is async so we can use "await" to wait for the user's answers
async function main() {
  // Requirement 1: the first line of the program must be the welcome message
  console.log("Welcome to Package Express. Please follow the instructions below.");

  // Requirement 2: prompt the user for the package weight and convert the text input to a number
  const weight = parseFloat(await rl.question("Please enter the package weight:\n"));

  // Requirement 3: if the weight is greater than 50, show an error message and end the program
  if (weight > 50) {
    console.log("Package too heavy to be shipped via Package Express. Have a good day.");
    rl.close(); // Close the input interface
    return;     // Exit the function, which ends the program
  }

  // Requirements 4-6: prompt the user for width, height and length, converting each to a number
  const width = parseFloat(await rl.question("Please enter the package width:\n"));
  const height = parseFloat(await rl.question("Please enter the package height:\n"));
  const length = parseFloat(await rl.question("Please enter the package length:\n"));

  // Requirement 7: if the sum of the dimensions is greater than 50, show an error message and end the program
  if (width + height + length > 50) {
    console.log("Package too big to be shipped via Package Express.");
    rl.close(); // Close the input interface
    return;     // Exit the function, which ends the program
  }

  // Requirements 8-9: multiply the three dimensions, multiply the product by the weight,
  // then divide the result by 100 to get the quote
  const quote = (width * height * length * weight) / 100;

  // Requirement 10: display the quote as a dollar amount with exactly two decimal places
  console.log(`Your estimated total for shipping this package is: $${quote.toFixed(2)}`);
  console.log("Thank you!");

  // Close the input interface so the program can finish
  rl.close();
}

// Start the program
main();