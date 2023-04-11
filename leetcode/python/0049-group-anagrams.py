# path: leeetcode\python\0049-group-anagrams.py
# link: https://leetcode.com/problems/group-anagrams/
# 2023-04-10
# leetcode: Medium

from collections import defaultdict
from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # 0(m * n)
        res = defaultdict(list)

        for s in strs:
            count = [0] * 26

            for c in s:
                count[ord(c) - ord("a")] += 1

            res[tuple(count)].append(s)
            
        return res.values()