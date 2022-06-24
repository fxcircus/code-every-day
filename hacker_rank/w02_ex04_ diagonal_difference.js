/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let lD = 0, rD = 0, rIdx = arr.length

    arr.forEach((dim, idx) => {
        lD += dim[idx]
        rIdx--
        rD += dim[rIdx]
    })
    // console.log(`lD = ${lD}\trD = ${rD}`)
    const diff = lD - rD
    return diff < 0 ? diff * -1 : diff
}

console.log(diagonalDifference([[11, 2, 4],[4,5, 6], [10, 8,-12]])) // 15