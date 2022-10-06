// Define (in a file sayHello.js) the function sayHello, which returns the string 'Hello'.
// Require and call that function in node - you should get the following result:
// > sayHello();
// 'Hello'

// file: hello.js

const sayHello = (name) => {
  return 'Hello '+ name;
}
// Add this at the end of the file
module.exports = sayHello;

// const hello = require('./sayHello');
