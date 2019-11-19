/** 
 * Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.
 * 將BST的每個節點，轉換成節點與比自己更大所有節點之和**/
/** 
 * 依據BST的特性，root.left < root < root.right
 * 因此按題目要求可知，最大的值(最右邊)不用與任何數相加，如此慢慢由右往左加，加到最小的值為止**/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var convertBST = function (root) {
  let sum = 0
  function traverse(root) {
    if (root == null) return
    traverse(root.right)
    sum += root.val
    root.val = sum
    traverse(root.left)
  }
  traverse(root)
  return root

};