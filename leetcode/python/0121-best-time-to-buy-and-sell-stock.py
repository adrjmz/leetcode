
# path: leetcode\python\0121-best-time-to-buy-and-sell-stock.py
# link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
# date 2023-04-08
# leetcode: Easy

from ast import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # buy, sell = 0, 1 #left=buy, right=sell
        # maxP = 0
        
        # while sell < len(prices):
        #     if prices[buy] < prices[sell]:
        #         profit = prices[sell] - prices[buy]
        #         maxP = max(maxP, profit)
        #     else:
        #         buy += 1
        #     sell += 1
        # return maxP

        res = 0
        lowest = prices[0]

        for price in prices:
            if price < lowest:
                lowest = price
            res = max(res, price - lowest)
        return res