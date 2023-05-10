/**
 * Problem: 981. Time Based Key-Value Store
 * Path: leetcode\typescript\0981-time-based-key-value-store.ts
 * Link: https://leetcode.com/problems/time-based-key-value-store/
 * Leetcode: Medium
 * Date: 2023-05-10
 */

class TimeMap {
  private map: Map<string, { timestamp: number; value: string }[]>;
  constructor() {
    this.map = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }
    this.map.get(key).push({ timestamp, value });
  }

  get(key: string, timestamp: number): string {
    if (!this.map.has(key)) {
      return "";
    }

    const values = this.map.get(key);
    let l = 0;
    let r = values.length - 1;
    let res = "";

    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      if (values[m].timestamp === timestamp) {
        return values[m].value;
      } else if (values[m].timestamp < timestamp) {
        res = values[m].value;
        l = m + 1;
      } else {
        r = m - 1;
      }
    }

    return res;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
