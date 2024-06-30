/**
 * 5kyu_Product of consecutive Fib numbers
 * https://www.codewars.com/kata/5541f58a944b85ce6d00006a

  DESCRIPTION:
  
  The Fibonacci numbers are the numbers in the following integer sequence (Fn):

  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

  such as

  F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

  Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

  F(n) * F(n+1) = prod.

  Your function productFib takes an integer (prod) and returns an array:

  [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
  depending on the language if F(n) * F(n+1) = prod.

  If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

  [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
  F(n) being the smallest one such as F(n) * F(n+1) > prod.

  Some Examples of Return:
  (depend on the language)

  productFib(714) # should return (21, 34, true), 
                  # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

  productFib(800) # should return (34, 55, false), 
                  # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
  -----
  productFib(714) # should return [21, 34, true], 
  productFib(800) # should return [34, 55, false], 
  -----
  productFib(714) # should return {21, 34, 1}, 
  productFib(800) # should return {34, 55, 0},        
  -----
  productFib(714) # should return {21, 34, true}, 
  productFib(800) # should return {34, 55, false}, 
  Note:
  You can see examples for your language in "Sample Tests".

 */

  function productFib(prod){
    let n1 = 0, n2 = 1, nextTerm = n1 + n2;
    let fibArr = [n1, n2];
    while (nextTerm <= prod) {
      n1 = n2;
      n2 = nextTerm;
      nextTerm = n1 + n2;
      fibArr.push(nextTerm);
    }
    
    let minIndex = fibArr.findLastIndex(e => e < Math.sqrt(prod));
    let min = fibArr[minIndex];
    let max = fibArr[minIndex + 1];
    if (min * max < prod) {
      min = fibArr[minIndex + 1];
      max = fibArr[minIndex + 2];
    }
    return [min, max, max * min == prod];
  }

  // Other solution
  function productFib(prod) {
    let [n1, n2] = [0, 1];
    while(n1 * n2 < prod) [n1, n2] = [n2, n1 + n2];
    return [n1, n2, n1 * n2 === prod];
  }
  