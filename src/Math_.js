
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
    static cosineSimilarity(v1, v2, normalized = false) {
        const dotProduct = Math_.dotProduct(v1, v2) 
        if(!normalized) {
            const magnitudeA = Math_.magnitude(v1)
            const magnitudeB = Math_.magnitude(v2)
            return dotProduct / (magnitudeA * magnitudeB)
        } else {
            return dotProduct
        }
    }

    /** 
     * Computes the euclidean distance between two vectors.
     */
    static euclideanDistance(v1, v2) {
        let sum = 0;
        
        for (let i = 0; i < v1.length; i++) {
            let diff = v1[i] - v2[i];
            sum += diff * diff;
        }

        return Math.sqrt(sum);
    }   

    /** 
     * Computes the cosine distance between two vectors.
     */
    static cosineDistance(v1, v2, normalized = false) {
        return 1 - Math_.cosineSimilarity(v1, v2, normalized)
    }   

    /** 
     * Computes the similarity score between two vectors.
     */
    static similarityScore(v1, v2, normalized = false) {
        return (Math_.cosineSimilarity(v1, v2, normalized) + 1) / 2
    }

    /** 
     * Inverted Score
     */
    static adjustedCosineDistance(v1, v2, normalized = false) {
        return Math_.cosineDistance(v1, v2, normalized) / 2
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

    /**
     * Geometric Mean
     */
    static geometricMean(values) {
        let product = values.reduce((acc, curr) => acc * curr, 1);
        return Math.pow(product, 1 / values.length);  
    }

    static unrootedGeometricMean(values) {
        let product = values.reduce((acc, curr) => acc * curr, 1);
        return product
    }

    /**
     * Harmonic Mean
     */
    static harmonicMean(values) {
        let n = values.length 
        let denominator = values.reduce((a, b) => a + 1 / b, 0)
        return n / denominator
    }
}