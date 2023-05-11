/**
 * Problem: 3. Longest Substring Without Repeating Characters
 * Path: leetcode\typescript\0003-longest-substring-without-repeating-characters.ts
 * Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Leetcode: Medium
 * Date: 2023-05-11
 */

function lengthOfLongestSubstring(s: string): number {
  let result: number = 0;
  const charSet: Set<string> = new Set();
  let left: number = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    result = Math.max(result, right - left + 1);
  }

  return result;
}
