# path: leeetcode\python\0190-reverse-bits.py
# link: https://leetcode.com/problems/reverse-bits/
# 2023-04-10
# leetcode: Easy

class Solution:
    def reverseBits(self, n: int) -> int:
        res = 0
        for _ in range(32):
            res = (res << 1) + (n & 1)
            n >>= 1
        return res