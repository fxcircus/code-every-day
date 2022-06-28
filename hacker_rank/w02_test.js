/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

// ------------------------------------
// AUX functions:
// ------------------------------------
const flipRow = (arr) => {
    for(let i = 0, j = arr.length - 1; i < j; i++, j--) {
        const tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }
    return arr
}
const flipColumn = (multArr, rowNum) => {
    for(let i = 0, j = multArr.length - 1; i < j; i++, j--) {
        const tmp = multArr[i][rowNum]
        multArr[i][rowNum] = multArr[j][rowNum]
        multArr[j][rowNum] = tmp
    }
    return multArr
}
// ------------------------------------
// Main: function:
// ------------------------------------
function flippingMatrix(matrix) {
    let len = matrix.length - 1, res = 0

    // PT1: flip rows && columns
    for(let i = 0; i <= len; i++) {
        if(matrix[i][0] < matrix[i][len]) {
            flipRow(matrix[i])
        }
        if(matrix[0][i] < matrix[len][i]) {
            flipColumn(matrix, i)
        }
    }
    console.log(matrix)

    // PT2: calculate inner matrix sum
    const midPoint = len / 2
    for(let i = 0; i <= midPoint; i++){
        for(let j = 0; j <= midPoint; j++){
            console.log(`res=${res}\tadding ${matrix[i][j]} to sum`)
            res+=matrix[i][j]
        }
    }
    
    return res
}

const arr = [
    [ 112, 42, 83, 119 ],
    [ 56, 125, 56, 49 ],
    [ 15, 78, 101, 43 ],
    [ 62, 98, 114, 108 ]
  ]

console.log(flippingMatrix(arr))