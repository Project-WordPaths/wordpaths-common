import fs from "fs"
import fsp from "fs/promises"

export async function makeDirectory(directory, overwrite = false) {
    if(overwrite && fs.existsSync(directory)) {
        await fsp.rm(directory, { recursive: true, force: true })
        fs.mkdirSync(directory, { recursive: true })
    }
    else if(fs.existsSync(directory)) {
        return null
    }
    else {
        fs.mkdirSync(directory, { recursive: true })
    }
} 