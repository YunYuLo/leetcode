/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  return tree(root, 0, [])
};
var tree = function (node, floor, res) {
  if (node) {
    if (res.length <= floor) {
      res.push([])
    }
    res[floor].push(node.val)
    tree(node.left, floor + 1, res)
    tree(node.right, floor + 1, res)
  }
  return res
}