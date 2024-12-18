export default class Heap_ {
    constructor({
        comparator = (a, b) => a - b,
        maxSize = Infinity,
    } = {}) {
        if (typeof comparator !== 'function') {
            throw new TypeError('Comparator must be a function');
        }
        this.heap = [];
        this.comparator = comparator;
        this.maxSize = maxSize;
    }

    // --- UTILITY METHODS --- //

    peek() {
        return this.size() > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    isFull() {
        return this.size() === this.maxSize;
    }

    getLeftIndex(index) {
        return 2 * index + 1;
    }

    getRightIndex(index) {
        return 2 * index + 2;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    toArray() {
        return [...this.heap].sort(this.comparator);
    }

    extract() {
        return this.toArray();
    }

    // --- ITEM INSERTION --- //

    push(data) {
        if (data === undefined || data === null) {
            throw new Error("Cannot insert null or undefined into the heap");
        }

        this.heap.push(data);
        this.bubbleUp(this.heap.length - 1);

        if (this.size() > this.maxSize) {
            this.pop();
        }

        return true;
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);

            if (this.comparator(this.heap[parentIndex], this.heap[index]) <= 0) {
                break;
            }

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    // --- ITEM DELETION --- //

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        if (this.size() === 1) {
            return this.heap.pop();
        }

        const topValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return topValue;
    }

    bubbleDown(currIndex) {
        let left = this.getLeftIndex(currIndex);
        let right = this.getRightIndex(currIndex);
        let smallest = currIndex;

        if (left < this.size() && this.comparator(this.heap[left], this.heap[smallest]) < 0) {
            smallest = left;
        }

        if (right < this.size() && this.comparator(this.heap[right], this.heap[smallest]) < 0) {
            smallest = right;
        }

        if (smallest !== currIndex) {
            this.swap(currIndex, smallest);
            this.bubbleDown(smallest);
        }
    }
}