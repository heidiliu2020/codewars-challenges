/**
 * 5kyu_Maximum subarray sum
 * https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

  DESCRIPTION:

  The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  // should be 6: [4, -1, 2, 1]

  Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
  If the list is made up of only negative numbers, return 0 instead.

  Empty list is considered to have zero greatest sum.
  Note that the empty list or array is also a valid sublist/subarray.

 */

  var maxSequence = function(arr){
    let currentSum  = arr[0];
    let maxSum = currentSum;
    
    if (!arr.some(v => v > 0)) {
      maxSum = 0;
    } else {  
      for (let i = 1; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum < arr[i]) currentSum = arr[i];
        if (currentSum > maxSum) maxSum = currentSum;
      }
    }
    return maxSum;
  }

  // Refractor
  var maxSequence = function(arr){
    let currentSum = 0;
    let maxSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i];
      if (currentSum < arr[i]) currentSum = arr[i];
      if (currentSum > maxSum) maxSum = currentSum;
    }
    return maxSum;
  }

  // Other solution
  var maxSequence = function(arr){
    let min = 0, ans = 0, sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }
  