
export default class Math_ 
{
    /** 
     * Computes the average of an array of values.
     */
    static average(array) {
        return array.reduce((a, b) => a + b, 0) / array.length
    }

    /** 
     * Computes the variance of an array of values.
     */ 
    static variance(array) {
        let sum = 0
        let mean = Math_.average(array)
        let n = array.length
        for(let x of array) {
            const xm = x - mean 
            const xm2 = xm * xm 
            sum += xm2 
        }
        let variance = sum / (n - 1)
        return variance
    }

    /**
     * Computes the standard deviation of an array of values.
     */
    static standardDeviation(array) {
        return Math.sqrt(Math_.variance(array))
    }

    /** 
     * Computes the magnitude of a vector.
     */
    static magnitude(v) {
        return Math.sqrt(v.reduce((a, b) => a + (b * b), 0))
    }

    /**
     * Round all
     */
    static roundArray(array, decimalPlaces) {
        let factor = Math.pow(10, decimalPlaces)
        return [...array].map(x => Math.round(x * factor) / factor)
    }

    
    /**
     * Computes the dot product of a vector.
    */
    static dotProduct(v1, v2) {
       let products = v1.map((x, i) => v1[i] * v2[i])
       return products.reduce((a, b) => a + b, 0)
    }

    /** 
     * Normalizes a vector.
     */
    static normalize(v) {
        const m = Math_.magnitude(v)
        return v.map(x => x / m)
    }
    /** 
     * Cosine similarity of two vectors.
     */
    static cosineSimilarity(v1, v2) {
        const dotProduct = Math_.dotProduct(v1, v2) 
        const magnitudeA = Math_.magnitude(v1)
        const magnitudeB = Math_.magnitude(v2)
        return dotProduct / (magnitudeA * magnitudeB)
    }

    /** 
     * Computes the cosine distance between two vectors.
     */
    static cosineDistance(v1, v2) {
        return 1 - Math_.cosineSimilarity(v1, v2)
    }   

    /** 
     * Computes the similarity score between two vectors.
     */
    static similarityScore(v1, v2) {
        return (Math_.cosineSimilarity(v1, v2) + 1) / 2
    }

    /** 
     * Inverted Score
     */
    static adjustedCosineDistance(v1, v2) {
        return this.cosineDistance(v1, v2) / 2
    }

    /** 
     * Centroid 
     */
    static centroid(X) {
        let dims     = X[0].length
        let centroid = new Array(dims).fill(0) 
        for(let i = 0; i < X.length; i++) {
            for(let j = 0; j < dims; j++) {
                centroid[j] += X[i][j]
            }
        }
        return centroid.map(x => x / X.length)
    }
}