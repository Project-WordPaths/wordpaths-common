import { HttpFileReader } from "wordpaths-common/src/FileReader_.js"

console.log("Loading file.")
const contents = await HttpFileReader.load(
    "http://localhost:8000/data/glove-50d/vectors.bin",
    { 
        onProgress(current, total) {
            console.log(`--- Loading ${current} of ${total}`)
        }
    }
)
console.log("Finished loading file.")

console.log(contents)