/**
 * 5kyu_Simple Pig Latin
 * https://www.codewars.com/kata/55c6126177c9441a570000cc

  DESCRIPTION:

  Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

  Examples
  pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
  pigIt('Hello world !');     // elloHay orldway !
 */

  function pigIt(str){
    let arr = str.split(' ');
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].match(/[a-zA-Z]/g)) {
        result += arr[i];
      } else {
        result += arr[i].substring(1) + arr[i].substring(0, 1) + 'ay';
      }
      if (i < arr.length - 1) result += ' ';
    }
    return result;
  }

  // Other solution
  // \w => [a-zA-Z0-9_]
  // \d => [0-9]
  // \s => [\r\t\n\f] 空白字元
  // $ => last one ; $1 means position
  // a* => zero or more 'a'
  function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, '\$2\$1ay\$3')
  }

  // a+ => one or more 'a'
  // string.slice([begin[, end]])
  function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
  }
  