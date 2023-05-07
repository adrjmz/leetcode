/**
 * Problem: 271. Encode and Decode Strings
 * Time O(N) | Space O(N)
 * Path: leetcode\typescript\0271-encode-and-decode-strings.ts
 * Link: https://leetcode.com/problems/encode-and-decode-strings/
 * Leetcode: Medium
 * Date: 2023-05-05
 * Redoing all the Medium problems from scratch to get used to TypeScript
 */

/**
 * @param strs: a list of strings
 * @return: encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
	return strs.map((str) => `${str.length}#${str}`).join("");
}

/**
 * @param str: a string
 * @return: decodes a single string to a list of strings
 */
function decode(str: string): string[] {
	let decodedWords: string[] = [];
	let i = 0;

	while (i < str.length) {
		let j: number = i;
		while (str[j] !== "#") {
			j++;
		}
		let len: number = parseInt(str.slice(i, j), 10);
		decodedWords.push(str.slice(j + 1, j + 1 + len));
		i = j + 1 + len;
	}
	return decodedWords;
}

let encoded = encode(["lint", "code", "love", "you"]);
console.log(encoded); // should print the encoded string
let decoded = decode(encoded);
console.log(decoded); // should print ["lint","code","love","you"]
