/**
 * Problem: 217. Contains Duplicates
 * Time O(N) | Space O(N)
 * Path: leetcode\typescript\0217-contains-duplicates.ts
 * Link: https://leetcode.com/problems/contains-duplicate/
 * Leetcode: Easy
 * Date: 2023-05-08
 * Redoing all the easy problems from scratch to get used to TypeScript
 */

function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>(nums);
  return set.size < nums.length;
}
