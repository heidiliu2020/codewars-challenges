/**
 * 6kyu_Stop gninnipS My sdroW!
 * https://www.codewars.com/kata/5264d2b162488dc400000001

  DESCRIPTION:
  Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

  Examples:
  "Hey fellow warriors"  --> "Hey wollef sroirraw" 
  "This is a test        --> "This is a test" 
  "This is another test" --> "This is rehtona test"

 */

// How to reverse a string => split('').reverse().join('')
function spinWords(string){
  //TODO Have fun :)
  let arr = string.split(' ');
  let result = [];
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i].length >= 5) 
      {
        result.push(arr[i].split('').reverse().join(''))
      } else {
        result.push(arr[i])
      }
  }
  return result.join(' ')
}

// Refactor
function spinWords(words){
  return words.split(' ').map((word) => {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
