# path: leetcode\python\0076-min-cost-climbing-stairs.py
# link: https://leetcode.com/problems/min-cost-climbing-stairs/
# date: 2023-04-10
# leetcode: Easy

from ast import List

class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        cost.append(0)

        for i in range(len(cost) - 3, -1, -1):
            cost[i] += min(cost[i + 1], cost[i + 2])
            
        return min(cost[0], cost[1])