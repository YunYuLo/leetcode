// Author : Vivian Lo
// Date   : 2019-10-26

/** 題目解釋
A 為丘狀陣列，其條件符合下述
1. A 長度大於三
2. 數列可找到一個最大值，並以最大值為中心，兩側依序遞減
**/

/** 
利用linear search可找到一個值，皆大於相鄰兩側的數字，即為目標值。
**/


/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1])
      return i
  }
};