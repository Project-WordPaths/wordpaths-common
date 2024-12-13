import assert from "assert";
import Math_ from "wordpaths-common/src/Math_.js"

describe("Math", () => {
    describe("average()", () => {
        it("must return correct average", () => {
            const array = [1.2, 3.4, 4.5] 
            const average = Math_.average(array).toFixed(2)
            assert.equal(average    , 3.03)
        })  
    })

    describe("variance()", () => {
        it("must return correct variance", () => {
            const array = [1.2, 3.4, 4.5] 
            const variance = Math_.variance(array).toFixed(2)
            assert.equal(variance, 2.82)
        })  
    })

    describe("standardDeviation()", () => {
        it("must return correct standard deviation", () => {
            const array = [1.2, 3.4, 4.5] 
            const standardDeviation = Math_.standardDeviation(array).toFixed(2)
            assert.equal(standardDeviation, 1.68)
        })  
    })

    describe("magnitude()", () => {
        it("must return correct magnitude", () => {
            const array = [1.2, 3.4, 4.5] 
            const magnitude = Math_.magnitude(array).toFixed(2)
            assert.equal(magnitude, 5.77)
        })  
    })

    describe("dotProduct()", () => {
        it("must return correct dot product", () => {
            const array = [1.2, 3.4, 4.5] 
            const magnitude = Math_.magnitude(array).toFixed(2)
            assert.equal(magnitude, 5.77)
        })  
    })

    describe("roundArray()", () => {
        it("must round all values", () => {
            const original = [1.26, 3.32, 4.85] 
            const expected = [1.3,  3.3,  4.9] 
            const rounded  = Math_.roundArray(original, 1)
            assert.deepEqual(expected, rounded)
        })  
    })

    describe("dotProduct()", () => {
        it("must return correct dot product", () => {
            const A = [1.2, 3.4, 5.6] 
            const B = [7.8, 9.0, 10.1] 
            const dotProduct = Math_.dotProduct(A, B).toFixed(2)
            assert.equal(dotProduct, 96.52)
        })  
    })


    describe("normalize()", () => {
        it("must normalize vector", () => {
            const v = [1.2, 3.4, 5.6] 
            const normalized = Math_.roundArray(Math_.normalize(v), 2)
            assert.deepEqual(normalized, [0.18, 0.51, 0.84])
        })  
    })

    describe("cosineSimilarity()", () => {
        it("must compute cosine similarity", () => {
            const A = [1.2, 3.4, 5.6] 
            const B = [7.8, 9.0, 10.1] 
            const cosineSimilarity = Math_.cosineSimilarity(A, B).toFixed(2)
            assert.equal(cosineSimilarity, 0.93)
        })  
    })

    describe("cosineDistance()", () => {
        it("must compute cosine distance", () => {
            const A = [1.2, 3.4, 5.6] 
            const B = [7.8, 9.0, 10.1] 
            const cosineDistance = Math_.cosineDistance(A, B).toFixed(2)
            assert.equal(cosineDistance, 0.07)
        })  
    })

    describe("cosineSimilarityScore()", () => {
        it("must compute cosine similarity score", () => {
            const A = [1.2, 3.4, 5.6] 
            const B = [7.8, 9.0, 10.1] 
            const similarityScore = Math_.similarityScore(A, B).toFixed(2)
            assert.equal(similarityScore, 0.96)
        })  
    })


    describe("adjustedCosineDistance()", () => {
        it("must compute adjusted cosine distance", () => {
            const A = [1.2, 3.4, 5.6] 
            const B = [7.8, 9.0, 10.1] 
            const cosineDistance = Math_.adjustedCosineDistance(A, B).toFixed(2)
            assert.equal(cosineDistance, 0.04)
        })  
    })

})