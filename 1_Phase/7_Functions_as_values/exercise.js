// 1. Declare a function lowercaseMessage that returns the lowercase version of the given string.
// 2. Declare a function transform that behaves like the one above:
//     takes one string and one function as arguments
//     calls the function on the given string.
// 3. Call transform by giving it the string 'WHY ARE YOU SHOUTING?' and the function lowercaseMessage. It should return a lowercase version of the message ('why are you shouting?')


const lowercaseMessage = (message) => {
  return message.toLowerCase();
}

const transform = (message, transformFunction) => {
  return transformFunction(message);
}

transform("WHY ARE YOU SHOUTING?", lowercaseMessage);
