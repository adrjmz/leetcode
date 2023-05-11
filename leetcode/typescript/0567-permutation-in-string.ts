/**
 * Problem: 567. Permutation in String
 * Path: leetcode\typescript\0567-permutation-in-string.ts
 * Link: https://leetcode.com/problems/permutation-in-string
 * Leetcode: Medium
 * Date: 2023-05-11
 */

function checkInclusion(s1: string, s2: string): boolean {
  const charCount: number[] = new Array(26).fill(0);
  let left: number = 0;
  let right: number = 0;
  let count: number = s1.length;

  for (let i = 0; i < s1.length; i++) {
    charCount[s1.charCodeAt(i) - 97]++;
  }

  while (right < s2.length) {
    if (charCount[s2.charCodeAt(right) - 97] > 0) {
      count--;
    }
    charCount[s2.charCodeAt(right) - 97]--;
    right++;

    if (count === 0) {
      return true;
    }

    if (right - left === s1.length) {
      if (charCount[s2.charCodeAt(left) - 97] >= 0) {
        count++;
      }
      charCount[s2.charCodeAt(left) - 97]++;
      left++;
    }
  }

  return false;
}
