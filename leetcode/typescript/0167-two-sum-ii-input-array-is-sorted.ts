/**
 * Problem: 167. Two Sum II - Input array is sorted
 * Time O(N) | Space O(N)
 * Path: leetcode\typescript\0167-two-sum-ii-input-array-is-sorted.ts
 * Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Leetcode: Medium
 * Date: 2023-05-08
 */

function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}
