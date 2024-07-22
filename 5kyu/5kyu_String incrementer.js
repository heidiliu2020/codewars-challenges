/**
 * 5kyu_String incrementer
 * https://www.codewars.com/kata/54a91a4883a7de5d7800009c

  DESCRIPTION:

  Your job is to write a function which increments a string, to create a new string.

  If the string already ends with a number, the number should be incremented by 1.
  If the string does not end with a number. the number 1 should be appended to the new string.
  Examples:

  foo -> foo1
  foobar23 -> foobar24
  foo0042 -> foo0043
  foo9 -> foo10
  foo099 -> foo100

  Attention: If the number has leading zeros the amount of digits should be considered.

 */

  function incrementString(str) {
    let result = '';
    let strArr = str.split('');
    for(let i = 0; i < strArr.length; i++) {
      if (Number.isInteger(+str)) return result = (+str + 1).toString().padStart(str.length, '0');
      if (!Number.isInteger(+strArr[strArr.length - i - 1])) {
        return result = str.slice(0, strArr.length - i) + (+str.slice(strArr.length - i, strArr.length) + 1).toString().padStart(i, '0');
      }
    }
  }

  // Other solution => Regex
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes
  // \d: Equivalent to [0-9]
  // $: the end
  // ?: 0 or 1 time
  // +: 1 or more times
  let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1);

  // Other solution
  function incrementString(str){
    let c = str[str.length - 1];
    switch(c){
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8': return str.substring(0, str.length - 1) + (parseInt(c) + 1);
      case '9': return incrementString(str.substring(0, str.length - 1)) + 0;
      default: return str + '1';
    }
  }
