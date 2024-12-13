
export default class ProgressItems_ 
{
    constructor() {
        this.items = []
    }

    add(name, task) {
        this.items.push([name, task])
    }

    async run({ onProgress = null, onSubProgress = null} = {}) {
        let i = 0
        let n = this.items.length
        for(let item of this.items) {
            const [name, task] = item 
            const perc = i / n 
            await task(i, n, onSubProgress)
            onProgress && onProgress(perc, name)
            i += 1
        }
        onProgress(1, "#done")
    }
}