/**
 * 6kyu_Sort the odd
 * https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
 * 
  DESCRIPTION:
  
  Task
  You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

  Examples
  [7, 1]  =>  [1, 7]
  [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

 */

  // Array.prototype.sort() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // Array.prototype.shift() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
  function sortArray(arr) {
    // sort odds from smallest to largest
    let oddSort = arr.filter(e => e % 2).sort((a, b) => a - b);
    return arr.map(e => e % 2 ? oddSort.shift() : e);
  }