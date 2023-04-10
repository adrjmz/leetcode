# path: leetcode\python\0338-counting-bits.py
# link: https://leetcode.com/problems/counting-bits/
# 2023-04-10
# leetcode: Easy

from typing import List

class Solution:
    def countBits(self, n: int) -> List[int]:
        res = [0]
        while len(res) <= n:
            res += [i + 1 for i in res]
        return res[:n + 1]