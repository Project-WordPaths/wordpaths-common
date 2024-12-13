
export default class Array_
{
    /**
     * Partitions an array into partitions
     * of mostly equal sizes except possibly
     * the last partition.
     */
    static partition(array, size) {
        let subArrays = [] 
        let buffer = [] 
        for(let i = 0; i < array.length; i++) {
            if(i > 0 && i % size == 0) {
                subArrays.push(buffer)
                buffer = []
            }
            buffer.push(array[i])
        }
        if(buffer.length > 0) {
            subArrays.push(buffer)
        }
        return subArrays
    }

    /**
     * Divides an array into partitions of
     * strictly equal sizes.
     */
    static subdivide(array, divisions) {
        if(array.length % divisions) {
            throw new Error("Array size must be divisible by no. of divisions.")
        }
        const size = array.length / divisions 
        return Array_.partition(array, size)
    }

    /**
     * Flattens a multi-dimensional array.
     */
    static flatten(array) {
        let flattened = []
        for(let item of array) {
            for(let subItem of item) {
                flattened.push(subItem)
            }
        }
        return flattened
    }
}