/**
 * 6kyu_Tribonacci Sequence
 * https://www.codewars.com/kata/556deca17c58da83c00002db

  DESCRIPTION:

  Well met with Fibonacci bigger brother, AKA Tribonacci.

  As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next.
  And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

  So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

  [1, 1 ,1, 3, 5, 9, 17, 31, ...]

  Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

  Signature will always contain 3 numbers; n will always be a non-negative number;
  if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

  If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata
  [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

 */

  // arr.slice([begin[, end]])
  function tribonacci(signature, n) {
    let arr = [...signature];
    for (let i = 3; i < n; i++) {
      arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
      arr.push(arr[i]);
    }
    return n != 0 ? arr.slice(0, n) : [];
  }

  // Refractor
  function tribonacci(signature,n) {
    // iterate n times 
    for (let i = 0; i < n - 3; i++) {
      // add last 3 array items and push to trib
      signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
    }
    return signature.slice(0, n);
  }

  // Other solution
  // arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
  function tribonacci(signature,n) {
    const result = signature.slice(0, n);
    while (result.length < n) {
      result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
    }
    return result;
  }
