/**
 * Problem: 1. Two Sum
 * Time O(N) | Space O(N)
 * Path: leetcode\typescript\0001-two-sum.ts
 * Link: https://leetcode.com/problems/two-sum/
 * Leetcode: Easy
 * Date: 2023-05-08
 * Redoing all the easy problems from scratch to get used to TypeScript
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}
