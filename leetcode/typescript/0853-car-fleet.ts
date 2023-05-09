/**
 * Problem: 853. Car Fleet
 * Path: leetcode\typescript\0853-car-fleet.ts
 * Link: https://leetcode.com/problems/car-fleet
 * Date: 2023-05-09
 */

function carFleet(target: number, position: number[], speed: number[]): number {
	const cars: [number, number][] = position.map((p, i) => [p, speed[i]]);
	cars.sort((a, b) => b[0] - a[0]);

	let result = 0;
	let time = 0;

	for (let [p, s] of cars) {
		let t = (target - p) / s;

		if (t > time) {
			result++;
			time = t;
		}
	}

	return result;
}
