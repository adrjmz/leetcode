/**
 * Problem: 424. Longest Repeating Character Replacement
 * Path: leetcode\typescript\0403-longest-substring-without-repeating-characters.ts
 * Link: https://leetcode.com/problems/longest-repeating-character-replacement/
 * Leetcode: Medium
 * Date: 2023-05-11
 */

function characterReplacement(s: string, k: number): number {
  let domChar = 0;
  let result = 0;
  const freqHash = {};

  for (let l = 0, r = 0; r < s.length; r++) {
    // increase window size by adding new character
    const currChar = s[r];
    if (!(currChar in freqHash)) freqHash[currChar] = 0;
    freqHash[currChar] += 1;

    // get the most frequent character count
    domChar = Math.max(domChar, freqHash[currChar]);

    // decrease window size if number
    // of characters that need to be
    // replaced is greater than k
    // Note that the +1 is needed because
    // we are dealing with 0 indexed counter
    let repl = r - l - domChar + 1;
    while (repl > k) {
      const leftChar = s[l];
      freqHash[leftChar] -= 1;
      l++;
      repl = r - l - domChar + 1;
    }

    // take the max value between our previous
    // max and the current max
    result = Math.max(result, r - l + 1);
  }
  return result;
}
