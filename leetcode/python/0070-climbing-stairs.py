# path: leetcode\python\0070-climbing-stairs.py
# link: https://leetcode.com/problems/climbing-stairs/
# date: 2023-04-10
# leetcode: Easy

class Solution:
    def climbStairs(self, n: int) -> int:
        # T: O(n) S: O(n)
        # dp approach
        one, two = 1, 1

        for _ in range(n - 1):
            temp = one
            one = one + two
            two = temp
        return one

        # if n == 1:
        #     return 1
        # dp = [0] * (n + 1)
        # dp[1] = 1
        # dp[2] = 2
        # for i in range(3, n + 1):
        #     dp[i] = dp[i - 1] + dp[i - 2]
        # return dp[n]