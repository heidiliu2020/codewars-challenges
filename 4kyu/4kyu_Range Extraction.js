/**
 * 4kyu_Range Extraction
 * https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

  DESCRIPTION:

  A format for expressing an ordered list of integers is to use a comma separated list of either

  > individual integers
  > or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
    The range includes all integers in the interval including both endpoints.
    It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
  
  Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

  Example:

  solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
  // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

  Courtesy of rosettacode.org
 */

  function solution(list){
    let prev, order, orderArr = [], result = '';
    for (let i = 0; i < list.length; i++) {
      let curr = list[i];
      if (curr == prev) {
        order.push(prev);
        prev++;
        continue;
      }
      order = [curr];
      prev = curr + 1;
      orderArr.push(order);
    }

    for (let m = 0; m < orderArr.length; m++) {
      if (orderArr[m].length > 2) {
        result += orderArr[m][0] + '-' + orderArr[m][orderArr[m].length - 1];
      } else {
        result += orderArr[m].join(',');
      }
      result =  m == orderArr.length - 1 ? result : result + ',';
    }
    return result;
  }
  
  // Other solution
  // Array.prototype.splice() => array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
  function solution(list){
    for(let i = 0; i < list.length; i++){
      let j = i;
      while(list[j] - list[j + 1] == -1) j++;
      if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + '-' + list[j]);
    }
    return list.join();
  }
