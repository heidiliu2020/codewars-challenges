/**
 * 5kyu_Find the unique string
 * https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

  DESCRIPTION:

  There is an array of strings. All strings contains similar letters except one. Try to find it!

  findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
  findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
  Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters.
  E.g. string that contains only spaces is like empty string.

  It’s guaranteed that array contains more than 2 strings.

  This is the second kata in series:

  1. Find the unique number
  2. Find the unique string (this kata)
  3. Find The Unique
 */

  // Set => The Set object lets you store unique values of any type
  function findUniq(arr) {
    let newArr = arr.map(a => { return [...new Set(a.toLowerCase())].sort().join('') });
    for (let i = 0; i < newArr.length; i++) {
      if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]) ) return arr[i];
    }
  }

