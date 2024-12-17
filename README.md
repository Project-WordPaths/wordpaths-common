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
    * `Encoder_.encodeUIntArrayToBytes(floatArray, dims)`
    * `Encoder_.decodeUIntArrayFromBytes(bytes, dims)`

4. **`FileReader` File Loading** 
    * `FSFileReader.load(file, { onProgress, chunkSize })`
    * `HttpFileReader.load(file, { onProgress })`

5. **`ProgressItems`** 
    * `const tasks = new ProgressItems_()`
    * `tasks.add("loading.item1", () => {})`
    * `tasks.add("loading.item2", () => {})`
    * `tasks.add("loading.item3", () => {})`
    * `tasks.run({ onProgress(perc, message) , onSubProgress(perc) })`