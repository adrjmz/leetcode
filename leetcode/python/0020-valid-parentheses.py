# Path: leetcode\python\0020-valid-parentheses.py
# link https://leetcode.com/problems/valid-parentheses/
# date 2023-04-07
# leetcode: Easy

class Solution:
    def isValid(self, s: str) -> bool:
        store = {")": "(", "]": "[", "}": "{"}
        stack = []

        for c in s:
            if c not in store:
                stack.append(c)
                continue
            if not stack or stack[-1] != store[c]:
                return False
            stack.pop()

        return not stack

        # stack = []
        # store = {"(":")", "{": "}", "[": "]"}

        # for elem in s:
        #     if elem in store:
        #         stack.append(elem)
        #     else:
        #         if len(stack) == 0:
        #             return False
        #         item = stack.pop()
        #         if elem != store[item]:
        #             return False
        
        # return len(stack) == 0