/**
 * 6kyu_Are they the "same"?
 * https://www.codewars.com/kata/550498447451fbbd7600041c

  DESCRIPTION:

Given two arrays a and b write a function comp(a, b) (or compSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears).
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
  Valid arrays
  a = [121, 144, 19, 161, 19, 144, 19, 11]  
  b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
  It gets obvious if we write b's elements in terms of squares:

  a = [121, 144, 19, 161, 19, 144, 19, 11] 
  b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

  Invalid arrays
  If, for example, we change the first number to something else, comp is not returning true anymore:

  a = [121, 144, 19, 161, 19, 144, 19, 11]  
  b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

  comp(a,b) returns false because in b 132 is not the square of any number of a.

  a = [121, 144, 19, 161, 19, 144, 19, 11]  
  b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
  comp(a,b) returns false because in b 36100 is not the square of any number of a.

  Remarks

  a or b might be [] or {} (all languages except R, Shell).
  a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
  
  If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

  */
  
  // Array.prototype.splice():  changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
  // splice(start)
  // splice(start, deleteCount)
  // splice(start, deleteCount, item1...)
  function comp(array1, array2){
    if (array1 == null || array2 == null) return false;
    let arr = array2.map(e => Math.sqrt(e));
    let result = true;
    for (let i = 0; i < arr.length; i++) {
      let index = array1.indexOf(arr[i]);
        if (index == -1) {
          result = false;
          break;
        } else {
          array1.splice(index, 1)
        }
    }
    return result;
  }

  // Other solution
  // Array.prototype.sort(): sort((a, b) => a - b) which means to sort numbers in ascending order.
  // Array.prototype.every(): tests whether all elements in the array pass the test implemented by the provided function.
  function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
  }

  // Other solution
  function comp(a, b) {
    return !!a && !!b && a.map(x => x * x).sort().join() == b.sort().join();
  }
  