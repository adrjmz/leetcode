/**
 * Problem: 242. Valid Anagram
 * Time O(N) | Space O(N)
 * Path: leetcode\typescript\0242-valid-anagram.ts
 * Link: https://leetcode.com/problems/valid-anagram/
 * Leetcode: Easy
 * Date: 2023-05-08
 * Redoing all the easy problems from scratch to get used to TypeScript
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let first: Array<string | null> = s.split("");
  const second = t.split("");

  for (let i = 0; i < second.length; i++) {
    const index = first.indexOf(second[i]);
    if (index === -1) return false;
    first[index] = null;
  }
  return true;
}
