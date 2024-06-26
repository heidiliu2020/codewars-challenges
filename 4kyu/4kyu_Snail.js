/**
 * 4kyu_Snail
 * https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

  DESCRIPTION:

  Snail Sort
  Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

  array = [[1,2,3],
          [4,5,6],
          [7,8,9]]
  snail(array) #=> [1,2,3,6,9,8,7,4,5]
  For better understanding, please follow the numbers of the next array consecutively:

  array = [[1,2,3],
          [8,9,4],
          [7,6,5]]
  snail(array) #=> [1,2,3,4,5,6,7,8,9]
  This image will illustrate things more clearly:

  NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
  NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
 */

  // Array.prototype.shift() => removes the first element from an array and returns that removed element
  // Array.prototype.pop() =>  removes the last element from an array and returns that element
  // Array.prototype.reverse() => reverses an array in place
  snail = function(array) {
    let result = [];
    
    while (array.length) {
      result.push(...array.shift());              // push the first element in
      array.map(row => result.push(row.pop()));   // push the last element in
      array.reverse().map(row => row.reverse());
    }
    return result;
  }
  