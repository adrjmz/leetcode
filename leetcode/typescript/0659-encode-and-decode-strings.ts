/**
 * Problem: 659. Encode and Decode Strings
 * Time O(N) | Space O(N)
 * Path: leetcode\typescript\0659-encode-and-decode-strings.ts
 * Link: https://leetcode.com/problems/encode-and-decode-strings/
 * Leetcode: Medium
 * Date: 2023-05-05
 * Redoing all the Medium problems from scratch to get used to TypeScript
 */

class Solution {
	/**
	 * @param strs: a list of strings
	 * @return: encodes a list of strings to a single string.
	 */
	encode(strs: string[]): string {
		let encoded = "";
		for (const str of strs) {
			encoded += `${str.length}:${str}`;
		}
		return encoded;
	}

	/**
	 * @param str: a string
	 * @return: decodes a single string to a list of strings
	 */
	decode(str: string): string[] {
		let arr = str.split(":;");
		let res: string[] = [];
		for (let i = 0; i < arr.length - 1; i++) {
			res.push(arr[i].replace(/::/g, ":"));
		}
		return res;
	}
}

let solution = new Solution();
let encoded = solution.encode(["lint", "code", "love", "you"]);
console.log(encoded); // should print the encoded string
let decoded = solution.decode(encoded);
console.log(decoded); // should print ["lint","code","love","you"]
