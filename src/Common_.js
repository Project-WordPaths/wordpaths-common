import fs from "fs"

export function makeDirectory(directory, overwrite = false) {
    if(overwrite && fs.existsSync(directory)) {
        fs.rmdirSync(directory)
        fs.mkdirSync(directory, { recursive: true })
    }
    else if(fs.existsSync(directory)) {
        return null
    }
    else {
        fs.mkdirSync(directory)
    }
} 