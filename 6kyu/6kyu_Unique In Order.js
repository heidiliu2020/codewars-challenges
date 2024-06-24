/**
 * 6kyu_Unique In Order
 * https://www.codewars.com/kata/54e6533c92449cc251001667

  DESCRIPTION:

  Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

  For example:
  uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
  uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
  uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

  var uniqueInOrder = function(iterable) {
    let arr = typeof(iterable) == 'string' ? iterable.split('') : iterable;
    let result = [];
    let lastStr;
    
    for (let i = 0; i < arr.length; i++) {
      if (lastStr != arr[i]) {
        result.push(arr[i]);
        lastStr = arr[i];
      }
    }
    return result;
  }

  // Refractor
  function uniqueInOrder(iterable) {
    let result = [];
    let last;
    
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== last) {
        result.push(last = iterable[i]);
      }
    }
    return result;
  }

  // Other solution
  // let str = 'AABC';
  // [...str] => ['A', 'A', 'B', 'C']
  var uniqueInOrder = function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i - 1]);
  }