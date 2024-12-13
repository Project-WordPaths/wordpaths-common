# wordpaths-common

## Features 

1. **Array Operations** 
    * `Array_.partition(A, size)`
    * `Array_.subdivide(A, divisions)`
    * `Array_.flatten(A)`

2. **Common Operations**
    * `Math_.average(X)`
    * `Math_.variance(X)`
    * `Math_.standardDeviation(x)`
    * `Math_.centroid(X)`
    * `Math_.magnitude(v)`
    * `Math_.normalize(v)`
    * `Math_.dotProduct(v1, v2)`
    * `Math_.cosineSimilarity(v1, v2)`
    * `Math_.euclideanDistance(v1, v2)`
    * `Math_.cosineDistance(v1, v2)`
    * `Math_.similarityScore(v1, v2)`

3. **Byte Encoding** 
    * `Encoder_.encodeFloatArrayToBytes(floatArray, dims)`
    * `Encoder_.decodeFloatArrayFromBytes(bytes, dims)`
    * `Encoder_.encodeIntArrayToBytes(floatArray, dims)`
    * `Encoder_.decodeIntArrayFromBytes(bytes, dims)`

4. **`BA2D` File Loading** 
    * `BA2D_.load(file, dims, { onLoadProgress })`
    * `BA2D_.save(file, dims, array, { onSaveProgress })`