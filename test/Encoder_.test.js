import assert from "assert";
import Encoder_ from "wordpaths-common/src/Encoder_.js"


describe("Encoder_", () => {
    describe("Float Array Encoding", () => {
        it("must encode and decode properly", () => {
            const originalArray = [1.9, 2.8, 3.7, 4.6, 5.5, 4.6, 3.7, 2.8, 1.9]
            const bytes = Encoder_.encodeFloatArrayToBytes(originalArray)
            const derivedArray = 
                Encoder_
                    .decodeFloatArrayFromBytes(bytes)
                    .map(x => parseFloat(x.toFixed(2)))
            assert.deepEqual(originalArray, derivedArray)
        })
    })


    describe("Integer Array Encoding", () => {
        it("must encode and decode properly", () => {
            const originalArray = [9, 8, 7, 6, 5, 1, 2, 3, 4]
            const bytes = Encoder_.encodeUIntArrayToBytes(originalArray)
            const derivedArray = 
                Encoder_
                    .decodeUIntArrayFromBytes(bytes)
                    .map(x => parseFloat(x.toFixed(2)))
            assert.deepEqual(originalArray, derivedArray)
        })
    })
})