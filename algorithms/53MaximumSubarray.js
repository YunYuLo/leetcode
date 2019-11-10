/** Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * 在數列中找到相加最大的組合**/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxToCurrent = 0
  let maxSum = 0
  if (nums.length == 0) return 0
  if (nums.length >= 1) {
    maxToCurrent = nums[0]
    maxSum = nums[0]
  }
  for (let i = 1; i < nums.length; i++) {
    maxToCurrent = Math.max(maxToCurrent + nums[i], nums[i])
    maxSum = Math.max(maxToCurrent, maxSum)
  }
  return maxSum
};