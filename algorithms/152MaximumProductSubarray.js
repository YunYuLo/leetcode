/** Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
 * 在數列中找到相乘最大的組合
 * 乘法會出現負負得正的情況，可能在i=3時因負值至數值最小，走到i=5時乘上另一個負值就由最小的數變成最大的數。
 * 因次在計算最大sub array 時，要同時考慮最大與最小數(可能是負值)
 * for example: 
 * [-2, 3, -4]
 * i=0 => max=-2
          min=-2
          maxProduct=-2
 * i=1 => max=max(-2*3, -2*3, 3) = 3
          min=min(-2*3, -2*3, 3) = -6
          maxProduct=max(3, -2) = 3
 * i=2 => max=max(3*-4, -6*-4, -4) = 24
          min=min(3*-4, -6*-4, -4) = -12
          maxProduct=max(24, 3) = 24
由上整理出
max = max(前一個max*nums[i], 前一個min*nums[i], nums[i])
min = min(前一個max*nums[i], 前一個min*nums[i], nums[i])
maxProduct = max(max, maxProduct)
          **/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length == 0) return 0
  let maxToCurrent = nums[0]
  let minToCurrent = nums[0]
  let maxProduct = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let nextMax = maxToCurrent * nums[i]
    let nextMin = minToCurrent * nums[i]
    maxToCurrent = Math.max(nextMax, nextMin, nums[i])
    minToCurrent = Math.min(nextMax, nextMin, nums[i])
    maxProduct = Math.max(maxToCurrent, maxProduct)
  }
  return maxProduct
};