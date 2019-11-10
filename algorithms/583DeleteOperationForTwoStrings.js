/**
 * Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string. **/

/**
* @param {string} word1
* @param {string} word2
* @return {number}
*/
var minDistance = function (word1, word2) {
  let paths = new Array(word2.length + 1)
  for (let i = 0; i < paths.length; i++) {
    paths[i] = new Array(word1.length + 1).fill(i)
  }
  for (let j = 0; j <= word1.length; j++) {
    paths[0][j] = j
  }
  for (let row = 1; row <= word2.length; row++) {
    for (let col = 1; col <= word1.length; col++) {
      if (word2[row - 1] !== word1[col - 1]) {
        paths[row][col] = Math.min(paths[row - 1][col], paths[row][col - 1]) + 1
      } else {
        paths[row][col] = paths[row - 1][col - 1]
      }
    }
  }
  return paths[word2.length][word1.length]
};