// Author : Vivian Lo
// Date   : 2019-10-26

/** 題目解釋
Arr1 及Arr2 為兩個順序陣列，
例如
Arr1 = [1,2,3,0,0,0], m = 3
Arr2 = [2,5,6],       n = 3
m與n代表其不重複個數，
且Arr1的長度>m+n
**/

/**
先將Arr2與Arr1融合為一個陣列，
再利用Bubble sort排序。
**/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let toIndex = nums1.length
  let index = 0

  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[index]
    index++
  }

  while (toIndex > 1) {
    toIndex--
    for (let i = 0; i < toIndex; i++) {
      if (nums1[i] > nums1[i + 1]) {
        let temp = nums1[i]
        nums1[i] = nums1[i + 1]
        nums1[i + 1] = temp
      }
    }
  }
  return nums1


};