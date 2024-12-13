import assert from "assert";
import Array_ from "wordpaths-common/src/Array_.js"


describe("Array_", () => {
    describe("partition()", () => {
        it("must partition (equal sizes)", () => {
            const array = new Array(12).fill(null).map((x, i) => i) 
            const partitions = Array_.partition(array, 3)
            const expected = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]
            assert.deepEqual(partitions, expected)
        })

        it("must partition (remainder row)", () => {
            const array = new Array(12).fill(null).map((x, i) => i) 
            const partitions = Array_.partition(array, 5)
            const expected = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11]]
            assert.deepEqual(partitions, expected)
        })
    })

    describe("subdivide()", () => {
        it("must divide array", () => {
            const array = new Array(12).fill(null).map((x, i) => i) 
            const partitions = Array_.subdivide(array, 4)
            const expected = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]
            assert.deepEqual(partitions, expected)
        })

        it("must error on undivisibility", () => {
            const array = new Array(12).fill(null).map((x, i) => i) 
            assert.throws(() => {
                Array_.subdivide(array, 5)
            })
        })
    })

    describe("flatten()", () => {
        it("must flatten 2D array", () => {
            const array =  [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]
            const flattened = Array_.flatten(array)
            const expected = new Array(12).fill(null).map((x, i) => i) 
            assert.deepEqual(flattened, expected)
        })

    })
})