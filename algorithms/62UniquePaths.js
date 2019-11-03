/** A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?**/

/** 題目解釋
 * 一個m*n的方格
 * 從左上方角落走到右下方角落
 * 假設行走方向只能“向右向下”
 * 有幾種走法？**/

/**
 * 題目的規律：假設4*3的方格
    1  1  1  1
    1  2  3  4
    1  3  6  10
 * 從上方數字發現每個格字都是上和左兩個相鄰的格子相加
 * 如走到(2,2)只有兩種可能，(2,3)有三種可能...依此類推
 **/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/** method 1 **/
/** 用Recursion暴力解，但leetcode會出現Time Limit Exceeded**/
var uniquePaths = function (m, n) {
  if (m == 1 || n == 1) return 1

  return uniquePaths(m, n - 1) + uniquePaths(m - 1, n)
}

/** method 2 **/
/** 程式邏輯
 * 用空間換取時間
 * 先建立的個m*n的方格且the first column and row 階定義為 1 (不停向右走及不停向下走)，其餘為零
 * 利用兩個for迴圈，將(m,n)分別按上述邏輯，把每格都放入相對應的數字 **/
var uniquePaths = function (m, n) {
  let array = [];
  for (let i = 0; i < m; i++) {
    array[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        array[i][j] = 1;
      } else {
        array[i][j] = 0;
      }
    }
  }
  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      array[i][j] = array[i - 1][j] + array[i][j - 1];
    }
  }
  return array[m - 1][n - 1];

};