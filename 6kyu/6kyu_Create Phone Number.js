/**
 * 6kyu_Create Phone Number
 * https://www.codewars.com/kata/525f50e3b73515a6db000b83

  DESCRIPTION:

  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

  Example
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  The returned format must be correct in order to complete this challenge.

  Don't forget the space after the closing parentheses!

 */

  // String.prototype.substring()
  // const str = 'Mozilla';
  // str.substring(1, 3) => 'oz';
  // str.substring(2) => 'zilla';
  function createPhoneNumber(numbers){
    let str = numbers.join('');
    return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`
  }

  // Other solution
  function createPhoneNumber(numbers){
    let format = '(xxx) xxx-xxxx';
    for (let i = 0; i < numbers.length; i++) {
      format = format.replace('x', numbers[i]);
    }
    return format;
  }