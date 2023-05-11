class DynamicArray<T> {
  private _data: T[];
  private _size: number;
  private _capacity: number;

  constructor() {
    this._data = [];
  }

  public size(): number {
    return this._size;
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }

  public get(index: number): T {
    return this._data[index];
  }

  public set(index: number, value: T): void {
    this._data[index] = value;
  }

  public clear(): void {
    for (let i: number = 0; i < this._capacity; i++) {
      this._data[i] = null;
    }
    this._size = 0;
  }

  public add(value: T): void {
    if (this._size + 1 >= this._capacity) {
      if (this._capacity === 0) {
        this._capacity = 1;
      } else {
        this._capacity *= 2;
      }
      let newData: T[] = new Array(this._capacity);
      for (let i: number = 0; i < this._size; i++) {
        newData[i] = this._data[i];
      }
      this._data = newData;
    }
    this._data[this._size++] = value;
  }

  public removeAt(index: number): T {
    if (index >= this._size || index < 0) {
      throw new Error("Index out of bounds");
    }
    let data: T = this._data[index];
    let newData: T[] = new Array(this._size - 1);
    for (let i: number = 0, j: number = 0; i < this._size; i++, j++) {
      if (i === index) {
        j--;
      } else {
        newData[j] = this._data[i];
      }
    }
    this._data = newData;
    this._capacity = --this._size;
    return data;
  }

  public remove(item: T): boolean {
    let index: number = this.indexOf(item);
    if (index === -1) {
      return false;
    }
    this.removeAt(index);
    return true;
  }

  public indexOf(item: T): number {
    for (let i: number = 0; i < this._size; i++) {
      if (item === this._data[i]) {
        return i;
      }
    }
    return -1;
  }

  public contains(item: T): boolean {
    return this.indexOf(item) !== -1;
  }

  public toString(): string {
    return this._data.toString();
  }

  //public push(item: T): void {
  //    this._data.push(item);
  //}

  //public pop(): T {
  //    return this._data.pop();
  //}

  //public get length(): number {
  //    return this._data.length;
  //}
}
