/** Magic Index: A magic index in an array A[0... n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.**/

/** 
 * 題目解釋，如何從一個順序陣列中，找出符合A[i] = i (magic index)的 index
 * 這題目陣列僅提供排序，但不知道內容，亦即陣列中的元素可能有兩種情況：重複及皆不重複
 * 在不同情況下，應該用什麼樣的方法去找出magic index，時間雜度是多少？**/

/** Case1:暴力解 ; Ｏ(n)**/
var magicIndex = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == i) return i
  }
  return -1
}

/** Case2:Binary Search; Ｏ(log n)**/
var magicIndex = function (array) {
  return magicIndexGenerator(array, 0, array.length - 1)
}
var magicIndexGenerator = function (array, start, end) {
  if (end < start) return -1
  let mid = Math.floor((start + end) / 2)
  if (array[mid] == mid) {
    return mid
  } else if (array[mid] > mid) {
    return magicIndexGenerator(array, start, mid - 1)
  } else {
    return magicIndexGenerator(array, mid + 1, end)
  }
}

/** binary search的限制
 * 這個方法只適用在順序陣列中且元素不重複的情況
 * 如果陣列中的元素重複，便不能用上述方法來運算
 * for example:
 * [不重複陣列]
 * Array1 = [-10, -5, 0, 1, 2, 3, 6, 9, 10, 11, 13]
 * Index =>  0     1  2  3  4  5  6  7  8   9   10
 * [重複元素陣列]
 * Array2 = [-10, -5, 2, 3, 3, 3, 5, 7, 9, 10, 11]
 * Index =>  0     1  2  3  4  5  6  7  8   9  10
   假如在Binary search中，中間的index為 mid = 5
   Array1[5] = 3 < mid
   Array2[5] = 3 < mid
   雖然一樣取中間的index去比較：
   [不重複陣列] Array1因為在不考慮小數與重複數字，左右數列只能依序加減1的情況下，當Array1[5] = 3 < mid，可以得知A[i] = i 的情況只會出現在mid的右邊，依此類推，逐步砍半並找出magic index。
   [重複元素陣列] Array2因為有重複的可能性，左右兩邊皆有出現magic index 的可能，故不適用上述Case2的方法。
 **/