/**
 * 6kyu_Valid Braces
 * https://www.codewars.com/kata/5277c8a221e209d3f6000b56

  DESCRIPTION:

  Write a function that takes a string of braces, and determines if the order of the braces is valid.
  It should return true if the string is valid, and false if it's invalid.

  This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

  All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

  What is considered Valid?
  A string of braces is considered valid if all braces are matched with the correct brace.

  Examples
  "(){}[]"   =>  True
  "([{}])"   =>  True
  "(}"       =>  False
  "[(])"     =>  False
  "[({})](]" =>  False
 */

  function validBraces(braces){
    let remain = braces;
    while (
      remain.includes('()') ||
      remain.includes('{}') ||
      remain.includes('[]')
    ) {
      remain = remain.replaceAll('()', '');
      remain = remain.replaceAll('{}', '');
      remain = remain.replaceAll('[]', '');
    }
    return !!!remain;
  }

  // Other solution
  function validBraces(braces){
    while(/\(\)|\[\]|\{\}/g.test(braces)) {
      braces = braces.replace(/\(\)|\[\]|\{\}/g, '');
    }
    return !braces.length;
  }

  // Other solution
  function validBraces(braces){
    let matches = { '(':')', '{':'}', '[':']' };
    let stack = [];
    let currentChar;
  
    for (let i = 0; i < braces.length; i++) {
      currentChar = braces[i];
      if (matches[currentChar]) { // opening braces
        stack.push(currentChar);
      } else {
        if (currentChar !== matches[stack.pop()]) { // closing braces
          return false;
        }
      }
    }
    return stack.length === 0; // Check if any unclosed braces left
  }
  