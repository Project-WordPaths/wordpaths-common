# wordpaths-common

## Features 

1. **Array Operations** 
    * `Array_.partition(array, size)`
    * `Array_.subdivide(array, divisions)`
    * `Array_.flatten(array)`

2. **Common Operations**
    * `Math_.average(array)`
    * `Math_.variance(array)`
    * `Math_.standardDeviation(array)`
    * `Math_.centroid(X)`
    * `Math_.magnitude(X)`
    * `Math_.normalize(X)`
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

4. ** `BA2D` File Loading** 
    * `BA2D_.load(file, dims, { onLoadProgress, type })`
    * `BA2D_.save(file, dims, array, { onSaveProgress, type })`

5. ** `FileReader` File Loading** 
    * `FSFileReader.load(file, { onProgress, chunkSize })`
    * `HttpFileReader.load(file, { onProgress })`