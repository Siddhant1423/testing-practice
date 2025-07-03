const analyze = (array) => {
    if(array.length <= 1) throw new Error('array size should be more than one.')
    let array_length = array.length;
    let max = Math.max(...array);
    let min = Math.min(...array);

    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    let avg = sum/array_length

    let analyzed = {
        length: array_length,
        max_number: max,
        min_number: min,
        average: avg
    }
    return analyzed;
}

// const object = analyze([1,8,3,4,2,6]);
// console.log(object)

module.exports = analyze;