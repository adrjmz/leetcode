# path: leetcode\python\0572-subtree-of-another-tree.py
# link: https://leetcode.com/problems/subtree-of-another-tree/
# date: 2023-04-10
# leetcode: Easy

from ast import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        # Recursive DFS approach
        # T: O(n) S: O(n)
        if not subRoot: return True
        if not root: return False

        if self.sameTree(root, subRoot):
            return True
        
        return (self.isSubtree(root.left, subRoot) or
            self.isSubtree(root.right, subRoot))
    
    def sameTree(self, root, subRoot):
        if not root and not subRoot:
            return True
        if not root or not subRoot or root.val != subRoot.val:
            return False
        return self.sameTree(root.left, subRoot.left) and self.sameTree(root.right, subRoot.right)