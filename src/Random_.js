import Chance from "chance"

export default class Random_ 
{
    constructor(randomState) {
        this.generator = new Chance(randomState)
    }

    randInt(a, b) {
        return this.generator.integer({ min: a, max: b })
    }

    randFloat(a, b) {
        return this.generator.floating({ min: a, max: b })
    }

    choice(arr) {
        return this.generator.pickone(arr)
    }

    sample(arr, k) {
        return this.generator.pickset(arr, k)
    }

    randFloatArray(d = 3, a = -10, b = 10) {
        const array = []
        for(let i = 0; i < d; i++) {
            array.push(this.randFloat(a, b))
        }
        return array
    }

    rand2DFloatArray(n = 10, d = 3, a = -10, b = 10) {
        const array = []
        for(let i = 0; i < n; i++) {
            array.push(this.randFloatArray(d, a, b))
        }
        return array
    }
}