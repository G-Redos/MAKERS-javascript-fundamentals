const isValidLength = (phoneNumber) => {
    const validLength = 10;
    if (phoneNumber.length === validLength) {
      return 'true';
    } else {
      return 'false';
    }
  }
  module.exports = isValidLength;
  // const isValidLength = require('./isValidLength')