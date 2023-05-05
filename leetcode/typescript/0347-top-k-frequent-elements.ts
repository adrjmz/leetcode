/**
 * Problem: 347. Top K Frequent Elements
 * Time O(N) | Space O(N)
 * Path: leetcode\typescript\0347-top-k-frequent-elements.ts
 * Link: https://leetcode.com/problems/top-k-frequent-elements/
 * Leetcode: Medium
 * Date: 2023-05-05
 * Redoing all the Medium problems from scratch to get used to TypeScript
 */
// Priority Queue & Hash Map
import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function topKFrequent(nums: number[], k: number): number[] {
	const heap = new MaxPriorityQueue({ priority: comparator });
	const map = new Map<number, number>();

	// Count frequency
	for (const num of nums) {
		if (!map.has(num)) {
			map.set(num, 0);
		} else {
			map.set(num, map.get(num)! + 1);
		}
	}

	// Add to heap
	for (const [num, frequency] of map) {
		heap.enqueue([num, frequency]);
	}

	// Return top k
	const answers: number[] = [];
	for (let i = 0; i < k; i++) {
		const [num] = heap.dequeue().element;
		answers.push(num);
	}

	return answers;
}

function comparator([, frequency]: [number, number]) {
	return frequency;
}

// function topKFrequent(nums: number[], k: number): number[] {
// 	const freq = new Map<number, number>();
// 	const buckets = new Array<number[]>(nums.length + 1);

//Construt buckets
// 	for (let i = 0; i < buckets.length; i++) {
// 		buckets[i] = [];
// 	}

//Count frequency
// 	for (let num of nums) {
// 		if (!freq.has(num)) {
// 			freq.set(num, 1);
// 		} else {
// 			freq.set(num, freq.get(num) + 1);
// 		}
// 	}

// Add to buckets
// 	for (let [num, count] of freq.entries()) {
// 		buckets[count].push(num);
// 	}

// Flatten buckets
// 	const flat = buckets.flat();

// Return top k
// 	return flat.slice(flat.length - k);
// }
