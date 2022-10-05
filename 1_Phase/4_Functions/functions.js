// 1. This function accepts no arguments
const printMessage = () => {
  console.log("Hi there!");
};

// 2. This function accepts one
const printMessage = (message) => {
  console.log(message);
};

printMessage("Hi there!");

// 3. We use the `return` keyword to return a value from the function.
// Be careful - in JavaScript, we *have* to use `return`, otherwise nothing will be returned.

const getName = () => {
  return "Léo";
};

getName(); // returns 'Léo'

// 4. Here, we forgot to use `return`.
const getName = () => {
  "Léo";
};

getName(); // returns undefined

// file: hello.js

const hello = () => {
  console.log("Hello!");
};

// Add this at the end of the file
module.exports = hello;

// In the node REPL
// Assuming we're in the same current directory where hello.js is.

const hello = require("./hello");

hello();
