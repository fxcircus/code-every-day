
/*
 * The function accepts INTEGER_ARRAY arr as parameter.
 * Calculate the ratios of its elements that are positive, negative, and zero.
 * Print the decimal value of each fraction on a new line with 6 places after the decimal.
 */

function plusMinus(arr) {
    const len = arr.length
    let pos = 0, neg = 0, zero = 0

    arr.forEach(element => {
        if(element > 0) {
            pos++
        } else if (element < 0) {
            neg++
        } else {
            zero++
        }
    })
    
    console.log(`${(pos / len).toFixed(6)}\n${(neg / len).toFixed(6)}\n${(zero / len).toFixed(6)}`)
}

plusMinus([1, 1, 0, -1, -1])


