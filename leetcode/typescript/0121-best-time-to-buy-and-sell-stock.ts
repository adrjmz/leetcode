/**
 * Problem: 121. Best Time to Buy and Sell Stock
 * Path: leetcode\typescript\0121-best-time-to-buy-and-sell-stock.ts
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Leetcode: Easy
 * Date: 2023-05-11
 */

function maxProfit(prices: number[]): number {
  let result: number = 0;
  let minPrice: number = prices[0];

  for (let idx: number = 0; idx < prices.length; idx++) {
    if (prices[idx] < minPrice) {
      minPrice = prices[idx];
    } else {
      result = Math.max(result, prices[idx] - minPrice);
    }
  }
  return result;
}
