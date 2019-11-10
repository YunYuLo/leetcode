/** Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.**/

/** 
 * 參考影片：https://www.youtube.com/watch?v=P-mMvhfJhu8
 * 根據影片邏輯：
 * 1. 先製造出m*n的陣列，m,n皆根據text1,text2的長度
 * 2. 按影片的方法，當字母相同時，回傳左上角相鄰數字加一；當字母不同時，保留上方或左方數字較大值
 * 3. for example: 'abcde', 'ace' 
     ' ' a b c d e
 ' '  0  0 0 0 0 0
 a    0  1 1 1 1 1
 c    0  1 1 2 2 2
 e    0  1 1 2 2 3
 * **/


/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

var longestCommonSubsequence = function (text1, text2) {
  let paths = new Array(text2.length + 1)

  for (let i = 0; i < paths.length; i++) {
    paths[i] = new Array(text1.length + 1).fill(0)
  }
  for (let row = 1; row <= text2.length; row++) {
    for (let col = 1; col <= text1.length; col++) {
      if (text2[row - 1] == text1[col - 1]) {
        paths[row][col] = paths[row - 1][col - 1] + 1
      } else {
        paths[row][col] = Math.max(paths[row - 1][col], paths[row][col - 1])
      }
    }
  }
  return paths[text2.length][text1.length]

};