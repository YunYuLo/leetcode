// Author : Vivian Lo
// Date   : 2019-10-24

/**題目解釋
假設原本一個升冪的陣列，但隨機錯置了一段，如[0,1,2,4,5,6,7]變成[4,5,6,7,0,1,2]，
在錯置後的陣列中，如找到目標數字，則回傳該數字的index，如查無資料，則回傳-1。
**/

/**
利用二分法
假設目標值為value，陣列左界left，右界right
1. 先將資料剖一半，檢查中間值(middle)是否等於value，如不相等
2. 判斷middle的左半邊或是右半邊哪邊是升冪，針對升冪的字串進行下列判斷
2. 左半邊--如果left < value < middle，則將right = middle - 1，反之則 left = middle + 1
3. 右半邊--如果middle < value < right，則將left = middle + 1，反之則 right = middle - 1
4. 回到第一步，再來一次，直到 middle = value。
**/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
**/

var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[left] <= nums[mid]) { //left side
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else { //right side
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};