
export default class Benchmark_
{
    constructor(name) {
        this.name = name 
        this.benchmarks = {}
    }    

    start(name) {
        this.benchmarks[name] = {
            start : performance.now() 
        }
    }

    end(name) {
        if(!(name in this.benchmarks)) {
            throw new Error(`The section '${name}' has not yet started.`)
        }
        this.benchmarks[name].end = performance.now() 
        this.benchmarks[name].duration = 
            this.benchmarks[name].end - 
            this.benchmarks[name].start
    }

    duration(name) {
        return this.benchmarks[name].duration / 1000
    }

    durations() {
        let durations = {} 
        for(let name in this.benchmarks) {
            durations[name] = this.duration(name)
        }
    }
}