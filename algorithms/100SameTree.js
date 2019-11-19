/** Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.**/

/** 
 * 如果value相同=>繼續向下檢查
 * 如果value不相同=>return false
 * 如果左邊return true, 右邊return false => return false (反之亦然)
 * 兩邊都return true => return true
 * **/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p == null && q == null) return true
  if (p == null || q == null) return false
  if (p.val != q.val) return false
  return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
};