/**
 * Problem: 704. Binary Search
 * Path: leetcode\typescript\0704-binary-search.ts
 * Link: https://leetcode.com/problems/binary-search/
 * Leetcode: Easy
 * Date: 2023-05-10
 */

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      // mid === target
      return mid;
    } else if (nums[mid]) < target) {
      // mid < target
      left = mid + 1;
    } else {
      // mid > target
      right = mid - 1;
    }
  }

  return -1;
}
