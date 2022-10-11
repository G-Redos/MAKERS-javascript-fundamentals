
const fizzBuzzUntil = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        return'FizzBuzz';

      } else if (number % 3 === 0) {
        return 'Fizz';

      } else if (number % 5 === 0) {
        return 'Buzz';

      } else { 
        return number;
      }
    }


for (let i = 0 ; i <= 50 ; i++) {
  const parity = fizzBuzzUntil(i);
  console.log(`${i} is ${parity}`);

//for (let i = 1 ; i <= 100 ; i++) {
//  fizzBuzzUntil(i);
}

module.exports = fizzBuzzUntil;
// const fizzBuzzUntil = require('./fizzBuzzUntil')
