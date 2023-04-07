# Path: leetcode\python\0021-merge-two-sorted-lists.py
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