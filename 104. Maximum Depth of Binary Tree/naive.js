/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let depthRight = 1;
    let depthLeft = 1;
    if (!root) {
        return 0;
    }
    
    if (root.left) {
        depthLeft += maxDepth(root.left);
    }
    
    if (root.right) {
        depthRight += maxDepth(root.right);
    }
    
    return depthRight > depthLeft ? depthRight : depthLeft
};

