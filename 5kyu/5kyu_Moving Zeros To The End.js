/**
 * 5kyu_Moving Zeros To The End
 * https://www.codewars.com/kata/52597aa56021e91c93000cb0

  DESCRIPTION:
  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

  moveZeros([false,1,0,1,2,0,1,3,"a"])
  // returns[false,1,1,2,1,3,"a",0,0]
 */

  // concat(value1, value2, /* …, */ valueN) => return a new array
  function moveZeros(arr) {
    let zeroArr = arr.filter(e => e === 0);
    return arr.filter(e => e !== 0).concat(zeroArr);
  }

  // Refractor
  function moveZeros(arr) {
    return arr.filter(e => e !== 0).concat(arr.filter(i => i === 0));
  }
  