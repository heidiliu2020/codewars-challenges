/**
 * 6kyu_Highest Scoring Word
 * https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
  
  DESCRIPTION:

  Given a string of words, you need to find the highest scoring word.
  Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
  For example, the score of abad is 8 (1 + 2 + 1 + 4).
  You need to return the highest scoring word as a string.
  If two words score the same, return the word that appears earliest in the original string.
  All letters will be lowercase and all inputs will be valid.

 */

  // 'abc'.charCodeAt(); => return 97
   // 'abc'.charCodeAt(1); => return 98
  function high(x) {
    let arr = x.split(' ');
    let hightest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (getScore(arr[i]) > getScore(hightest)) {
          hightest = arr[i];
      }
    }
    return hightest;
  }
  
  function getScore(code) {
    let score = 0;
    for (let i = 0; i < code.length; i++) {
      score += code[i].charCodeAt(0) - 96
    }
    return score
  }

  // Refractor
  function high(x){
    return x.split(' ').reduce((accum, current) => {
      return score(current) > score(accum)? current : accum;  
    })
  }

  function score(word){
    return word.split('').reduce((accum, current) => {
      return accum + (current.charCodeAt() - 96)
    }, 0)
  }

  // Other solution
  function high(words) {
    const alpha = ' abcdefghijklmnopqrstuvwxyz';
    const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);
  
    return words
      .split(' ')
      .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
      .sort((a, b) => a.score - b.score || b.pos - a.pos)
      .pop()
      .word;
  }