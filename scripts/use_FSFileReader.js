import { FSFileReader } from "wordpaths-common/src/FileReader_.js"

console.log("Loading file.")
const contents = await FSFileReader.load(
    "./data/glove-50d/vectors.bin",
    { 
        onProgress(chunkNo, chunks) {
            console.log(`--- Loading ${chunkNo} of ${chunks}`)
        }
    }
)
console.log("Finished loading file.")

console.log(contents)