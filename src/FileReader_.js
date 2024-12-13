import axios from "axios"

export class FileReader {}

// ------------------------ //

export class FSFileReader extends FileReader
{
    /** 
     * Loads a file from file system.
     */
    static load(
        file,
        { 
            onProgress = null,
            chunkSize = 10000
        } = {}
    ) {

    }
}

// ------------------------ //

export class HttpFileReader extends FileReader
{
    /** 
     * Loads a file from file system.
     */
    static load(
        file,
        { 
            onProgress = null,
            chunkSize = 10000
        } = {}
    ) {

    }
}