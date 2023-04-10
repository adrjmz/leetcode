# path: leetcode\python\0110-balanced-binary-tree.py
# link: https://leetcode.com/problems/balanced-binary-tree/
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
        def isBalanced(self, root: Optional[TreeNode]) -> bool:
            # Recursive DFS approach
            # T: O(n) S: O(n)
            def dfs(root):
                if not root:
                    return [True, 0]
                left, right = dfs(root.left), dfs(root.right)
                balance = (left[0] and right[0] 
                           and abs(left[1] - right[1]) <= 1)   # if the difference between the left and right subtree is greater than 1, then the tree is not balanced
                return [balance, 1 + max(left[1], right[1])] # returns the equation for finding the height of the tree
            
            return dfs(root)[0]