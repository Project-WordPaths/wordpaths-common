import ProgressItems_ from "wordpaths-common/src/ProgressItems_.js" 

const tasks = new ProgressItems_()

tasks.add("loop-1",  () => { for(let i = 0; i < 1000; i++); })
tasks.add("loop-2",  () => { for(let i = 0; i < 1000; i++); })
tasks.add("loop-3",  () => { for(let i = 0; i < 1000; i++); })

tasks.run({
    onProgress : (perc, name) => {
        console.log(perc, name)
    }
})