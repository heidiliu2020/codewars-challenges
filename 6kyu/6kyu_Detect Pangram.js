/**
 * 6kyu_Detect Pangram
 * https://www.codewars.com/kata/545cedaa9943f7fe7b000048

  DESCRIPTION:
 
  A pangram is a sentence that contains every single letter of the alphabet at least once.
  For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

  Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

  function isPangram(string){
    let result = true;
    let str = string.toLowerCase().replace(/[^a-z]/g, '');
    const pangram = 'abcdefghijklmnoprstuvwxyz';

    for (let i = 0; i < pangram.length; i++) {
      if (!str.includes(pangram[i])) {
        result = false;
        break;
      }
    }
    return result;
  }

  // Other solution
  // Array.prototype.every()
  // every(callbackFn, thisArg?) => To tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
  function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }
