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

export function clearLastLine() {
    if(!process.stdout.moveCursor) return
    process.stdout.moveCursor(0, -1) 
    process.stdout.clearLine(1)
}