class DoublyLinkedList<T> extends LinkedList<T> {
  private tail: Node<T> | null = null;
  private head: Node<T> | null = null;
  private size: number = 0;

  private class Node<T> {
    constructor(
      public data: T,
      public next: Node<T> | null = null,
      public prev: Node<T> | null = null) { }

    toString(callback ?: (data: T) => string) {
      return callback ? callback(this.data) : `${this.data}`;
    }
  }

  // While using a traverse method, we set all nodes to null and set head & tail to null. 
  // Lastly we set size to 0. O(n)
  public clear(): void {
    let trav: Node<T> | null = this.head;
    while (trav) {
      const next: Node<T> | null = trav.next;
      trav.prev = trav.next = null;
      trav.element = null;
      trav = next;
    }
    this.head = this.tail = trav = null;
    this.size = 0;
  }

  // Return the size of this linked list
  public size(): number {
    return this.size;
  }

  // Is this linked list empty?
  public isEmpty(): boolean {
    return this.size === 0;
  }

  // Add an element  to the tial of the linked list, 0(1)
  public add(data: T): void {
    this.addLast(data);
  }

  // Add data to the beginning/head of this linked list, O(1)
  public addFirst(data: T): void {
    // The linked list is empty 
    if (this.isEmpty()) {
      this.head = this.tail = new Node<T>(data);
    } else {
      this.head.prev = new Node<T>(data, this.head, null);
      this.head = this.head.prev;
    }
    this.size++;
  }

  // Add data to the end/tail of this linked list, O(1)
  public addLast(data: T): void {
    // The linked list is isEmpty
    if (this.isEmpty()) {
      this.head = this.tail = new Node<T>(data);
    } else {
      this.tail.next = new Node<T>(data, null, this.tail);
      this.tail = this.tail.next;
    }
    this.size++;
  }

  // Add an element at a specified index, O(n)
  public addAt(index: number, data: T): void {
    if (index < 0 || index > this.size) {
      throw new Error('Index out of bounds');
    }
    if (index == 0) {
      this.addFirst(data);
      return;
    }

    if (index == this.size) {
      this.addLast(data);
      return;
    }

    let trav: Node<T> = this.head;
    for (let i = 0; i < index - 1; i++) {
      trav = trav.next;
    }
    const newNode: Node<T> = new Node<T>(data, trav.next, trav);
    trav.next.prev = newNode;
    trav.next = newNode;

    this.size++;
  }

  // Check the value of the first node if it exists, O(1)
  public peekFirst(): T {
    if (this.isEmpty()) {
      throw new Error('Empty list');
    }
    return this.head.data;
  }

  // Check the value of the last node if it exists, O(1)
  public peekLast(): T {
    if (this.isEmpty()) {
      throw new Error('Empty list');
    }
    return this.tail.data;
  }

  // Remove the first value of the list, O(1)
  public removeFirst(): T {
    // Can't remove data from an empty list
    if (this.isEmpty()) {
      throw new Error('Empty list');
    }

    // Extract the data at the head and move the head pointer forwards one nodes
    const data: T = this.head.data;
    this.head = this.head.next;
    this.size--;

    // If the list is empty set the tail to null
    if (this.isEmpty()) {
      this.tail = null;
    } else {
    // Do a memory cleanup of the previous node
      this.head.prev = null;
    }

    // Return the data that was at the first node we just removed
    return data;
  }

  // Remove the last value of the list, O(1)
  public removeLast(): T {
    // Can't remove data from an empty list
    if (this.isEmpty()) {
      throw new Error('Empty list');
    }

    // Extract the data at the tail and move the tail pointer backwards one node 
    const data: T = this.tail.data;
    this.tail = this.tail.prev;
    this.size--;

    // If the list is now empty set the head to null
    if (this.isEmpty()) {
      this.head = null;
    } else {
    // Do a memory clean of the node that was just removed
      this.tail.next = null;
    }

    // Return the data that was in the last node we just removed
    return data;
  }
  
  // Remove an arbitrary node from the linked list, O(1)
  private remove(node: Node<T>): T {
    // If the node to remove is somewhere either at the head or the tail handle those independently
    if (node.prev === null) {
      return this.removeFirst();
    }

    if (node.next === null) {
      return this.removeLast();
    }

    // Make the pointers of adjacent nodes skip over 'node'
    node.next.prev = node.prev;
    node.prev.next = node.next;
    
    // Temporarily store the data we want to Return
    const data: T = node.data;

    // Memory cleanup
    node.data = null;
    node = node.prev = node.next = null;

    this.size--;

    // Return the data in the node we just removed
    return data;
  }

  // Remove a node at a particular index, O(n)
  public removeAt(index: number): T {
    // Make sure the index provided is valid
    if (index < 0 || index >= this.size) {
      throw new Error('Illegal argument');
    }

    let i: number;
    let trav: Node<T>;

    // Search from the front of the list
    if (index < this.size / 2) {
      for (i = 0, trav = this.head; i !== index; i++) {
        trav = trav.next;
      }
    } else { // Search from the back of the list
      for (i = this.size - 1, trav = this.tail; i !== index; i--) {
        trav = trav.prev;
      }
    }
    
    return this.remove(trav);
  }

  // Remove a particular value in the linked list, O(n)
  public remove(obj: T): boolean {
    let trav: Node<T>;

    // Support searching for 'null'
    if (obj === null) {
      for (trav = this.head; trav !== null; trav = trav.next) {
        if (trav.data === null) {
          this.remove(trav);
          return true;
        }
      }
    } else { // Search for non null object  
      for (trav = this.head; trav !== null; trav = trav.next) {
        if (obj === trav.data) {
          this.remove(trav);
          return true;
        }
      }
    }
    
    return false;
  }

  // Find the index of a particular value in the linked list, O(n)
  public indexOf(obj: T): number {
    let index: number = 0;
    let trav: Node<T> = this.head;

    // Support searching for 'null'
    if (obj === null) {
      for (; trav !== null; trav = trav.next, index++) {
        if (trav.data === null) {
          return index;
        }
      }
    } else { // Search for non null object
      for (; trav !== null; trav = trav.next, index++) {
        if (obj === trav.data) {
          return index;
        }
      }
    }
  
    return -1;
  }

  // Check is a value is contained within the linked list
  public contains(obj: T): boolean {
    return this.indexOf(obj) !== -1;
  }

  public toString(): string {
    let trav: Node<T> = this.head;
    let str: string = "";
    
    while (trav !== null) {
      str += trav.toString() + ", ";
      trav = trav.next;
    }
    
    return str;
  }
}
