import axios from "axios"
import fs from "fs"

export class FileReader {}

// ------------------------ //


export class FSFileReader {
    /**
     * Loads a file from the file system.
     * @param {string} file - The file path.
     * @param {object} [options] - Options for loading.
     * @param {function} [options.onProgress] - Progress callback function.
     * @param {number|string} [options.chunkSize="max"] - Chunk size or "max".
     * @returns {Promise<Buffer>} - Resolves to a Buffer containing the file data.
     */
    static async load(
        file,
        { 
            onProgress = null,
            chunkSize = "max"
        } = {}
    ) {
        return new Promise((resolve, reject) => {
            const fileSize = fs.statSync(file).size;

            if (chunkSize === "max") {
                chunkSize = fileSize;
            }

            const reader = fs.createReadStream(file, {
                highWaterMark: chunkSize,
            });

            const chunks = [];
            let chunkNo = 0;
            const totalChunks = Math.ceil(fileSize / chunkSize);

            reader.on("data", (chunk) => {
                chunks.push(chunk);
                chunkNo += 1;
                onProgress && onProgress(chunkNo, totalChunks);
            });

            reader.on("end", () => {
                resolve(Buffer.concat(chunks));
            });

            reader.on("error", (err) => {
                reject(err);
            });
        });
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
                onProgress && onProgress(progress.progress, progress.total)
            },
            responseType : type
        })
        const data = response.data 
        return data
    }
}