/** Given an array of integers nums, sort the array in ascending order. **/
/** 將陣列中的元素升冪排序 **/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* method 1 Runtime: 96 ms */
function sortArray(nums) {
  nums.sort((a, b) => a - b)
  return nums
}

/* method 2 Merge Sort*/
function sortArray(nums) {
  let arr = nums
  if (arr.length <= 1) {
    return arr
  }
  let middleIndex = Math.floor(arr.length / 2)
  let firstHalf = arr.slice(0, middleIndex)
  let secondHalf = arr.slice(middleIndex)

  return sortBeforeMerge(sortArray(firstHalf), sortArray(secondHalf))
}

function sortBeforeMerge(arr1, arr2) {
  let sortedArr = []

  while (arr1.length && arr2.length) {
    let minElement = (arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift()
    sortedArr.push(minElement)
  }

  sortedArr = arr1.length ? sortedArr.concat(arr1) : sortedArr.concat(arr2)
  return sortedArr
}


/** step by step **/
/** for example: [5,2,3,1]
 * 在第一個function中會把[5,2,3,1]依序拆解至最小單位，再排序
            [5,2,3,1]
           /         \
    [5,2]               [3,1]
    /  \                 /  \
  [5]  [2]             [3]  [1]
    \  /                 \   /
    [2,5]                [1,3]
          \            /  
            [1,2,3,5]
 **/

function mergeSort(arr) {

  // 遞回函式終止條件：當陣列被拆到只剩一個元素時
  if (arr.length <= 1) {
    return arr
  }

  // 接受一組尚未排序的陣列當作參數，將它們對半切分
  let middleIndex = Math.floor(arr.length / 2)
  let firstHalf = arr.slice(0, middleIndex)
  let secondHalf = arr.slice(middleIndex)

  // 遞回
  return sortBeforeMerge(mergeSort(firstHalf), mergeSort(secondHalf))
}

function sortBeforeMerge(arr1, arr2) {
  /**
   * 代入兩個已經"各自排序過"的陣列，
   * 將這兩個陣列利用 merge sort 的方式排序後，合併回傳成一個陣列
   **/
  let sortedArr = []

  // 當 arr1 或 arr2 都不是空陣列時
  while (arr1.length && arr2.length) {
    // 以兩陣列中第一個元素進行比較，較小的推入 sortedArr 中
    let minElement = (arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift()
    sortedArr.push(minElement)
  }

  /**
   * 會跳出上面 while 的迴圈，表示 arr1 或 arr2 其中至少有一個為空陣列
   * 因此，如果 arr1 不是空陣列，則把它 concat 到 sortedArr 內；
   * 如果是 arr2 中不是空陣列，則把它 concat 到 sortedArr 內。
  **/
  sortedArr = arr1.length ? sortedArr.concat(arr1) : sortedArr.concat(arr2)
  return sortedArr
}