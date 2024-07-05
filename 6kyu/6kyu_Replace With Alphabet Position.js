/**
 * 6kyu_Replace With Alphabet Position
 * https://www.codewars.com/kata/546f922b54af40e1e90001da

  DESCRIPTION:

  Welcome.

  In this kata you are required to, given a string, replace every letter with its position in the alphabet.
  If anything in the text isn't a letter, ignore it and don't return it.

  "a" = 1, "b" = 2, etc.

  Example
  Input = "The sunset sets at twelve o' clock."
  Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
 */

  // String.prototype.charCodeAt()
  // 'a'.charCodeAt() => 97
  function alphabetPosition(text) {
    let result = '';
    text.toLowerCase().split('').map(a => {
      if (a.match(/[a-z]/) && a.match(/[a-z]/).length) result += a.charCodeAt() - 96 + ' ';
    });
    return result.slice(0, result.length - 1);
  }

  // Other solution
  // 'A'.charCodeAt() => 65
  let alphabetPosition = (text) =>        // 'The sunset.'
    text.toUpperCase()                    // 'THE SUNSET.'
      .replace(/[^A-Z]/g, '')             // 'THESUNSET'
      .split('')                          // ['T', 'H', 'E', 'S', 'U', 'N', 'S', 'E', 'T']
      .map(ch => ch.charCodeAt(0) - 64)   // [20, 8, 5, 19, 21, 14, 19, 5, 20]
      .join(' ');                         // '20 8 5 19 21 14 19 5 20'
