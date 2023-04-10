# path: leetcode\python\0191-number-of-1-bits.py
# link: https://leetcode.com/problems/number-of-1-bits/
# 2023-04-10
# leetcode: Easy

class Solution:
    def hammingWeight(self, n: int) -> int:
        res = 0
        while n:
            n &= n - 1
            res += 1
        return res