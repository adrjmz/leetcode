/**
 * Problem: 49. Group Anagrams
 * Time O(N) | Space O(N)
 * Path: leetcode\typescript\0049-group-anagrams.ts
 * Link: https://leetcode.com/problems/group-anagrams/
 * Leetcode: Medium
 * Date: 2023-05-05
 * Redoing all the Medium problems from scratch to get used to TypeScript
 */

function groupAnagrams(strs: string[]): string[][] {
	const map: Map<string, Array<string>> = new Map();

	for (const str of strs) {
		const sortedStr = str.split("").sort().join("");
		if (map.has(sortedStr)) {
			map.get(sortedStr)?.push(str);
		} else {
			map.set(sortedStr, [str]);
		}
	}

	return Array.from(map.values());
}
