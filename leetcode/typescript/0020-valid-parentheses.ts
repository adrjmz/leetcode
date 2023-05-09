/**
 * Problem: 20. Valid Parentheses
 * Path: leetcode\typescript\0020-valid-parentheses.ts
 * Link: https://leetcode.com/problems/valid-parentheses
 * Leetcode: Easy
 * Date: 2023-05-09
 */

function isValid(s: string): boolean {
	// create a stack & a store for the opening & closing brackets
	let stack: string[] = [];
	let store: { [key: string]: string } = {
		"(": ")",
		"{": "}",
		"[": "]",
	};

	// iterate through the string
	for (let elem of s) {
		// if elem is opening bracket push to stack
		if (elem in store) {
			stack.push(elem);
			// if elem is closing bracket
		} else {
			// if stack is empty return false
			if (stack.length == 0) {
				return false;
			}
			// else pop the last item from stack
			let item: any = stack.pop();
			// if the popped item is not the corresponding closing bracket return false
			if (elem != store[item]) {
				return false;
			}
		}
	}
	// after the loop ends if stack is empty return true
	return stack.length == 0;
}
