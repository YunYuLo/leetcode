/**
You are given an array-like data structure Listy which lacks a size method. It does, however, have an elementAt(i) method that returns the element at index i in O(1) time. If i is beyond the bounds of the data structure, it returns -1. (For this reason, the data structure only supports positive integers.) Given a Listy which contains sorted, positive integers, find the index at which an element x occurs. If x occurs multiple times, you may return any index.
**/

/** 不用size 或 length 等方法來用二分法取得目標值 **/

/** 
二元搜尋的前提要先將搜尋的資料排序，並取得長度後從中間開始依序，每次都取中間值與目標值比較，如中間值較大，則將上界設為中間值，重複上述動作；若中間值較小，則反之。
但是對於不同資料型態，如 listy 因為不具 size 或 length的方法，若是順序排列的資料，則必須用其資料特性elementAt(index) 不存在則回傳 -1來搜尋：
1. 如果用順序由第一個開始找，也是一個方法，但太耗時=> Ｏ(n) 假設資料的長度是n
2. 利用 n^2 快速遞增的特性，如search function，來逼近資料的長度。
後者的執行時間為Ｏ(log (n-i)) 假設資料長度為 n ，目標值value的位置為 i ，速度大幅降低。
有了資料長度後，就可以依照二元搜尋來查找value，如下：
**/

function search(listy, value) {
  let index = 1
  while (elementAt(index) !== -1 && elementAt(index) < value) {
    index *= 2
  }
  return index
}

function binarySearch(listy, value) {
  let low = 0
  let high = search(listy, value)

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let midValue = elementAt(mid)

    if (midValue > value || midValue == -1) {
      high = mid - 1
    } else if (midValue < value) {
      low = mid + 1
    } else {
      return mid
    }
  }
  return -1
}