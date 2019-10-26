// Author : Vivian Lo
// Date   : 2019-10-26

/** 
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

一個皆為正數的陣列，其中一半為奇數另一半為偶數，試讓陣列排序調整為“雙單雙單...”
**/


/**
1. 先將陣列中的數字一單雙數拆開
2. 再依序重置
**/

/**
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParityII = function (A) {
  let oddArr = []
  let evenArr = []
  let ans = []

  A.forEach(num => {
    if (num % 2 == 0) {
      evenArr.push(num)
    } else {
      oddArr.push(num)
    }
  })

  for (let i = 0; i < A.length / 2; i++) {
    ans.push(evenArr[i])
    ans.push(oddArr[i])
  }

  return ans
};