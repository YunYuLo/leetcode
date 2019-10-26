// Author : Vivian Lo
// Date   : 2019-10-26

/**
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
以0,1,2表示紅,白,藍，若陣列只有這三個元素，且隨機出現，如何排序？
**/

/** 
由左而右一個個搜尋，遇到零往左放，遇到二往右放，依次排序。
**/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (nums.length == 0) return
  let start = 0
  let end = nums.length - 1

  for (let i = 0; i < nums.length; i++) {
    while ((nums[i] == 0 && i >= start) || (nums[i] == 2 && i <= end)) {
      if (nums[i] == 0) {
        swap(i, start)
        start++
      } else {
        swap(i, end)
        end--
      }
    }
  }

  function swap(i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  console.log(nums)
};

sortColors([2, 0, 2, 1, 1, 0])