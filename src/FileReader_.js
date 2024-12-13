import axios from "axios"
import fs from "fs"

export class FileReader {}

// ------------------------ //

export class FSFileReader extends FileReader
{
    /** 
     * Loads a file from file system.
     */
    static async load(
        file,
        { 
            onProgress = null,
            chunkSize = "max"
        } = {}
    ) {
        return new Promise((resolve, reject) => {
            const fileSize = fs.statSync(file).size

            if(chunkSize == "max") {
                chunkSize = fileSize
            }

            const reader = fs.createReadStream(file, {
                highWaterMark: chunkSize
            })
            

            let data = "";
            let chunks = Math.ceil(fileSize / chunkSize)
            let chunkNo = 0

            reader.on("data", (chunk) => {
                chunkNo += 1
                data += chunk
                onProgress && onProgress(chunkNo, chunks)
            })

            reader.on("end", () => {
                resolve(Buffer.from(data))
            })
        })
    }
}

// ------------------------ //

export class HttpFileReader extends FileReader
{
    /** 
     * Loads a file from http.
     */
    static async load(
        url,
        { 
            onProgress = null,
            type = "arraybuffer"
        } = {}
    ) {
        const response = await axios.get(url, {
            onDownloadProgress(progress) {
                onProgress && onProgress(progress.bytes, progress.total)
            },
            type : type
        })
        const data = response.data 
        return data
    }
}